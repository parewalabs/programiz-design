/* styleguide.config.js */
const path = require("path");

const {
  createWebpackDevConfig,
  createWebpackProdConfig,
} = require("@craco/craco");

const cracoConfig = require("./craco.config.js");
const webpackConfig =
  process.env.NODE_ENV === "production"
    ? createWebpackProdConfig(cracoConfig)
    : createWebpackDevConfig(cracoConfig);

module.exports = {
  webpackConfig,
  components: "src/lib/components/**/*.js",
  require: [path.join(__dirname, "./src/index.css")],
  styleguideDir: "../docs",
};
