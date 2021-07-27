/* styleguide.config.js */
const path = require('path');

module.exports = {
  components: 'src/lib/components/**/*.js',
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.js');
    return `import { ${name} } from 'programiz-design';`;
  },
  require: [path.join(__dirname, './src/lib/assets/sass/style.scss')],
  styleguideDir: './docs',
  exampleMode: 'collapse',
  usageMode: 'expand',
};
