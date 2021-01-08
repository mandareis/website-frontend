const path = require("path");
module.exports = function webpackConfig({ entryPoint, bundleName }) {
  let mode =
    process.env.NODE_ENV === "development" ? "development" : "production";
  let sourceMaps = mode === "development" ? "eval" : "none";
  return {
    mode,
    entry: entryPoint,
    output: {
      path: path.resolve(__dirname, "public", "javascript"),
      filename: bundleName,
    },
    devtool: sourceMaps,
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules)/,
          use: {
            loader: "babel-loader",
          },
        },
        { test: /\.css$/, use: ["style-loader", "css-loader"] },
      ],
    },
  };
};
