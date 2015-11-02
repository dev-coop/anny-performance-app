import _ from 'lodash';
import paths from './paths';
import webpack from 'webpack';
import pkg from './package.json';

/**
 * This config builds in memory and serves the app.
 * @type {{}}
 */
export default {
  entry: {
    app: [
      'webpack/hot/only-dev-server',
      paths.entry,
    ],
    vendors: [
      'lodash',
      'jquery',
      'classnames',
      'anny',
      'radium',
      'history/lib/createBrowserHistory',
      'react',
      'react-ace',
      'react-dom',
      'react-router',
      'brace/mode/javascript',
      'brace/theme/tomorrow',
      'stardust',
    ],
  },
  output: {
    path: paths.build,
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel', 'eslint'],
        include: paths.src,
      },
      {
        test: /stardust/,
        loaders: ['babel'],
        include: paths.node_modules,
      },
    ],
  },
  externals: {
    anny: 'anny',
    jquery: 'jQuery',
    lodash: '_',
  },
  devTool: 'source-map',
  resolve: {
    root: paths.root,
    modulesDirectories: [
      'node_modules',
      '.',
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
  ],
  // Webpack Dev Server
  // http://webpack.github.io/docs/webpack-dev-server.html#api
  devServer: {
    contentBase: paths.root,
    hot: true,
    historyApiFallback: true,
    quiet: false,                     // log nothing
    noInfo: false,                     // log only warnings and errors
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    stats: require('./webpack-stats'),
  }
};
