const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      // Check if we're in development mode
      const isDevelopment = env === 'development';

      if (isDevelopment) {
        // Add React Refresh Babel plugin for development builds
        webpackConfig.module.rules.push({
          test: /\.(js|mjs|jsx|ts|tsx)$/,
          include: path.resolve(paths.appSrc),
          loader: require.resolve('babel-loader'),
          options: {
            // Ensure that React Refresh Babel plugin is only enabled in development
            plugins: [require.resolve('react-refresh/babel')],
          },
        });

        // Add React Refresh plugin for development builds
        webpackConfig.plugins.push(new (require('react-refresh-webpack-plugin'))());
      }

      return webpackConfig;
    },
  },
};
