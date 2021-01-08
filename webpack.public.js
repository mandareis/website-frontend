const webpackConfig = require("./webpack.common");

module.exports = webpackConfig({
  entryPoint: "./src/index.js",
  bundleName: "public.js",
});
