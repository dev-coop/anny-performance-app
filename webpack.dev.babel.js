import paths from './paths';
import webpack from 'webpack';

/**
 * This config builds in memory and serves the app.
 * @type {{}}
 */
export default {
  entry: [
    'webpack/hot/only-dev-server',
    paths.entry,
  ],
  output: {
    path: paths.root,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel', 'eslint'],
        exclude: paths.node_modules,
      },
    ]
  },
  externals: {
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
  ],
  // Webpack Dev Server
  // http://webpack.github.io/docs/webpack-dev-server.html#api
  devServer: {
    contentBase: paths.root,
    // Enable special support for Hot Module Replacement
    // Page is no longer updated, but a "webpackHotUpdate" message is send to the content
    // Use "webpack/hot/dev-server" as additional module in your entry point
    // Note: this does _not_ add the `HotModuleReplacementPlugin` like the CLI option does.
    hot: true,

    // Set this as true if you want to access dev server from arbitrary url.
    // This is handy if you are using a html5 router.
    historyApiFallback: true,

    // webpack-dev-middleware options
    quiet: false,                    // log nothing
    noInfo: false,                   // log only warnings and errors
    lazy: true,
    filename: "bundle.js",
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    stats: require('./webpack-stats'),
  }
};
