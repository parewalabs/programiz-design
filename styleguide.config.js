/* styleguide.config.js */
const path = require('path');

const {
  createWebpackDevConfig,
  createWebpackProdConfig,
} = require('@craco/craco');

const cracoConfig = require('./craco.config.js');
const webpackConfig =
  process.env.NODE_ENV === 'production'
    ? createWebpackProdConfig(cracoConfig)
    : createWebpackDevConfig(cracoConfig);

module.exports = {
  webpackConfig,
  components: 'src/lib/components/**/*.js',
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.js');
    return `import { ${name} } from 'programiz-design';`;
  },
  require: [path.join(__dirname, './src/lib/assets/css/style.css')],
  styleguideDir: './docs',
  exampleMode: 'collapse',
  usageMode: 'expand',
};
