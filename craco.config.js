const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  webpack: {
    configure: (webpackConfig, { env }) => {
      if (env === 'development') {
        // Add React Refresh plugin for development builds
        webpackConfig.plugins.push(new ReactRefreshPlugin());
      }

      return webpackConfig;
    },
  },
};
