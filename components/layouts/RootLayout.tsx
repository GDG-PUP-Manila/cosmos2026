"use client";

import React, { useEffect, useState } from "react";
import CustomEffect from "../ui/custom-effect";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [specs, setSpecs] = useState<any>(null);

  useEffect(() => {
    const dostuff = async () => {
      const mynav = navigator as any;

      const ram = mynav.deviceMemory || "Unknown";
      console.log(`Approximate RAM: ${ram} GB`);

      let info;

      if (mynav.gpu) {
        const adapter = await mynav.gpu.requestAdapter();

        if (adapter) {
          // 'requestAdapterInfo()' is gone. Use 'adapter.info' instead.
          info = adapter.info;

          console.log("GPU Vendor:", info.vendor);
          console.log("GPU Architecture:", info.architecture);
          console.log("GPU Description:", info.description);
        }
      } else {
        console.log("WebGPU not supported");
      }

      const specs = {
        ram,
        gpuvendor: info?.vendor || "Unknown",
        gpuarch: info?.architecture || "Unknown",
        gpudesc: info?.description || "Unknown",
      };
      console.log(specs);
      setSpecs(specs);
    };

    dostuff();
  }, []);

  const RAM_THRESHOLD = 2;
  const isLowEnd =
    (specs && specs.ram !== "Unknown" && specs.ram < RAM_THRESHOLD) ||
    (specs && specs.gpuvendor === "Unknown");

  return (
    <>
      {specs && !isLowEnd && <CustomEffect />}
      {children}
    </>
  );
};

export default RootLayout;
