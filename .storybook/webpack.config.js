const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = ({ config }) => ({
  ...config,
  module: {
    ...config.module,
    rules: [
      // Temp fix for issue: https://github.com/storybooks/storybook/issues/3346
      ...config.module.rules.filter(
        rule =>
          !(
            rule.use &&
            rule.use.length &&
            rule.use.find(({ loader }) => loader === "babel-loader")
          ),
      ),
      {
        test: /\.jsx?$/,
        include: path.resolve("./"),
        exclude: /(node_modules|dist|cjs|umd)/,
        loader: "babel-loader",
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "source-map-loader",
        enforce: "pre",
      },
    ],
  },
  plugins: [
    ...config.plugins,
    new CopyPlugin([
      { from: path.resolve(__dirname, "../doc"), to: "doc" },
    ]),
  ],
});
