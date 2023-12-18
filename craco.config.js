const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@UI": path.resolve(__dirname, "src/components/UI"),
      "@pages": path.resolve(__dirname, "src/components/pages"),
      "@services": path.resolve(__dirname, "src/components/services"),
      "@styled": path.resolve(__dirname, "src/components/styled"),
    },
  },
};
