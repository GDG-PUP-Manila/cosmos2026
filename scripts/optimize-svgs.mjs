import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { optimize } from 'svgo';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, '../public');

async function getFiles(dir) {
  const dirents = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(dirents.map((dirent) => {
    const res = path.resolve(dir, dirent.name);
    return dirent.isDirectory() ? getFiles(res) : res;
  }));
  return Array.prototype.concat(...files);
}

// Helper to compress base64 images inside SVG content
async function compressEmbeddedImages(content, filePath) {
  // Regex to capture the full href attribute with data URI
  // Handles: href="...", xlink:href="..."
  // Captures group 2: image type (png|jpeg|jpg)
  // Captures group 3: base64 data
  const regex = /(?:xlink:)?href=["']data:image\/(png|jpeg|jpg);base64,([^"']+)["']/g;
  let newContent = content;
  const matches = [...content.matchAll(regex)];

  if (matches.length > 0) {
      console.log(`  - Found ${matches.length} embedded images in ${path.basename(filePath)}. Compressing...`);
  }

  for (const m of matches) {
      const fullMatch = m[0];
      const type = m[1]; // png/jpeg/jpg
      // Fix: base64 data is in capture group 2, not 3
      const base64Data = m[2];
      
      try {
          const buffer = Buffer.from(base64Data, 'base64');
          // Aggressive optimization for embedded images
          const optimizedBuffer = await sharp(buffer)
              .resize({ width: 1200, withoutEnlargement: true }) // Downscale massive embedded images
              .webp({ quality: 70 })
              .toBuffer();
              
          const newBase64 = optimizedBuffer.toString('base64');
          // Reconstruct the attribute with webp mime type
          // preserve the attribute name (href or xlink:href) and quotes
          const quote = fullMatch.endsWith('"') ? '"' : "'";
          const prefix = fullMatch.startsWith('xlink:') ? 'xlink:href=' : 'href=';
          const newTag = `${prefix}${quote}data:image/webp;base64,${newBase64}${quote}`;
          
          newContent = newContent.replace(fullMatch, newTag);
      } catch (e) {
          console.warn(`  - Failed to optimize an embedded image in ${path.basename(filePath)}:`, e.message);
      }
  }
  return newContent;
}

async function optimizeSvgs() {
  console.log(`Scanning ${PUBLIC_DIR} for SVGs...`);
  
  try {
    const allFiles = await getFiles(PUBLIC_DIR);
    const svgFiles = allFiles.filter(file => path.extname(file).toLowerCase() === '.svg');
    const ONE_MB = 1024 * 1024;

    console.log(`Found ${svgFiles.length} SVGs to process.`);

    let processedCount = 0;
    let savedBytes = 0;

    for (const file of svgFiles) {
        try {
            let data = await fs.readFile(file, 'utf8');
            const originalStats = await fs.stat(file);

            // Step 1: Compress embedded images first (biggest win)
            data = await compressEmbeddedImages(data, file);

            // Step 2: Optimize SVG structure
            const result = optimize(data, {
                path: file,
                multipass: true,
                plugins: [
                    {
                        name: 'preset-default',
                        params: {
                            overrides: {
                                // removing viewBox is often bad for scaling, keeping it is safer
                                removeViewBox: false,
                            },
                        },
                    },
                    'removeDimensions',
                ],
            });

            if (result.error) {
                console.error(`Error optimizing ${file}:`, result.error);
                continue;
            }

            const optimizedSize = Buffer.byteLength(result.data, 'utf8');
            
            if (optimizedSize > ONE_MB) {
                console.warn(`WARNING: ${path.basename(file)} is still larger than 1MB (${(optimizedSize / 1024 / 1024).toFixed(2)} MB)`);
            } else if (optimizedSize > (originalStats.size * 1.1)) {
                // If it grew significantly (rare, but possible if webp header overhead > tiny png), ignore
                 console.log(`Skipped: ${path.relative(PUBLIC_DIR, file)} - Size increased`);
                 continue;
            }

            // Always write if we compressed embedded images or reduced size
            // We use a threshold of "not growing much" or "shrunk"
            // Actually, if we converted to webp, we almost certainly want to keep it even if size is similar, 
            // but usually it will be much smaller.
            
            if (optimizedSize < originalStats.size) {
                await fs.writeFile(file, result.data);
                const saved = originalStats.size - optimizedSize;
                savedBytes += saved;
                console.log(`Optimized: ${path.relative(PUBLIC_DIR, file)} - Saved ${(saved / 1024 / 1024).toFixed(2)} MB`);
                processedCount++;
            } else {
                 console.log(`Skipped: ${path.relative(PUBLIC_DIR, file)} - No reduction`);
            }

        } catch (err) {
            console.error(`Error processing ${file}:`, err);
        }
    }

    console.log(`\nFinished! Optimized ${processedCount} SVGs.`);
    console.log(`Total size reduced: ${(savedBytes / 1024 / 1024).toFixed(2)} MB`);

  } catch (err) {
      console.error('Error scanning directory:', err);
  }
}

optimizeSvgs();