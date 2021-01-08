const webpackConfig = require("./webpack.common");

module.exports = webpackConfig({
  entryPoint: "./src/admin.js",
  bundleName: "admin.js",
});
