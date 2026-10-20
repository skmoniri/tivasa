
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",

  reactCompiler: true,

  images: {
    qualities: [75, 85, 90],
  },
};

export default nextConfig;
