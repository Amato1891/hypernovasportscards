const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = function override(config, env) {
  if (env === 'development') {
    // Add React Refresh plugin for development builds
    config.plugins.push(new ReactRefreshWebpackPlugin());
  }

  return config;
};
