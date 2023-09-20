/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  sassOptions: {
    includePaths: ["./src/design-system/styles"],
  },
};

module.exports = nextConfig;
