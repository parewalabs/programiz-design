const rewireCreateReactLibrary = require("react-app-rewire-create-react-library");

module.exports = function override(config, env) {
  config = rewireCreateReactLibrary(config, env);
  return config;
};
