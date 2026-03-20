import sharp from "sharp";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const PUBLIC_DIR = path.join(__dirname, "../public");
const QUALITY = 80;
const FORMATS = [".png", ".jpg", ".jpeg", ".webp"];

async function getFiles(dir) {
  const dirents = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    dirents.map((dirent) => {
      const res = path.resolve(dir, dirent.name);
      return dirent.isDirectory() ? getFiles(res) : res;
    }),
  );
  return Array.prototype.concat(...files);
}

async function optimizeImages() {
  console.log(`Scanning ${PUBLIC_DIR} for images...`);

  try {
    const allFiles = await getFiles(PUBLIC_DIR);
    const imageFiles = allFiles.filter((file) => {
      const ext = path.extname(file).toLowerCase();
      return FORMATS.includes(ext);
    });

    console.log(`Found ${imageFiles.length} images to process.`);

    let processedCount = 0;
    let savedBytes = 0;

    for (const file of imageFiles) {
      if (file.includes(".temp.")) continue;

      const ext = path.extname(file).toLowerCase();
      const filename = path.basename(file, ext);
      const dir = path.dirname(file);
      const isWebP = ext === ".webp";
      const webpPath = isWebP ? file : path.join(dir, `${filename}.webp`);
      const tempPath = path.join(dir, `${filename}.temp.webp`);

      try {
        const originalStats = await fs.stat(file);

        // Read file to buffer first to prevent file locks
        const fileBuffer = await fs.readFile(file);

        // Optimize to temp file
        await sharp(fileBuffer)
          .webp({ quality: QUALITY, effort: 6 })
          .toFile(tempPath);

        const newStats = await fs.stat(tempPath);
        let shouldReplace = false;

        if (isWebP) {
          // Only replace if we save space
          if (newStats.size < originalStats.size) {
            shouldReplace = true;
          }
        } else {
          // Always convert new formats
          shouldReplace = true;
        }

        if (shouldReplace) {
          if (isWebP) {
            await fs.unlink(file); // Delete original webp
            await fs.rename(tempPath, webpPath); // Move temp to webp
            const saving = originalStats.size - newStats.size;
            savedBytes += saving;
            console.log(
              `Optimized: ${path.relative(PUBLIC_DIR, file)} (${(saving / 1024).toFixed(2)} KB saved)`,
            );
          } else {
            // For non-webp, check if webp already exists?
            // If webp already exists, we might overwrite it. That's fine.
            // But if webp exists and is smaller than our new optimization attempt?
            // That's tricky. Let's just overwrite for now as per script intent.
            await fs.rename(tempPath, webpPath);
            console.log(
              `Converted: ${path.relative(PUBLIC_DIR, file)} -> webp`,
            );
          }
          processedCount++;
        } else {
          await fs.unlink(tempPath);
          if (isWebP) {
            // console.log(`Skipped: ${path.relative(PUBLIC_DIR, file)} (already optimal)`);
          }
        }
      } catch (err) {
        console.error(`Error processing ${file}:`, err);
        try {
          await fs.unlink(tempPath);
        } catch (e) {}
      }
    }

    console.log(`\nDone! Optimized ${processedCount} images.`);
    if (savedBytes > 0) {
      console.log(
        `Total space saved: ${(savedBytes / 1024 / 1024).toFixed(2)} MB`,
      );
    } else {
      console.log(`No space saved on existing WebP images.`);
    }
  } catch (err) {
    console.error("Error scanning directories:", err);
  }
}

optimizeImages();
