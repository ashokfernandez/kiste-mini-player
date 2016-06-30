var path = require('path')
var webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['', '.scss', '.css', '.js', '.json'],
    modulesDirectories: [
      'node_modules',
      path.resolve(__dirname, './node_modules')
    ]
  },
  plugins: [
    new ExtractTextPlugin('bundle.css', { allChunks: true }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    }, {
      test: /(\.scss|\.css)$/,
      loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass')
    }]
  }
}

// // Production settings avaliable here
// // https://github.com/gajus/react-css-modules

// const path = require('path')
// const webpack = require('webpack')
// const autoprefixer = require('autoprefixer')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')

// module.exports = {
//   context: __dirname,
//   devtool: 'inline-source-map',
//   entry: [
//     'webpack-hot-middleware/client',
//     './src/index.js'
//   ],
//   output: {
//     path: path.join(__dirname, 'build'),
//     filename: 'bundle.js',
//     publicPath: '/static/'
//   },
//   resolve: {
//     extensions: ['', '.scss', '.css', '.js', '.json'],
//     modulesDirectories: [
//       'node_modules',
//       path.resolve(__dirname, './node_modules')
//     ]
//   },
//   module: {
//     loaders: [
//       {
//         test: /(\.js|\.jsx)$/,
//         // exclude: /(node_modules)/,
//         loaders: ['react-hot', 'babel'],
//         // query: { presets: ['es2015', 'stage-0', 'react'] }
//       }, {
//         test: /(\.scss|\.css)$/,
//         loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass')
//       }
//     ]
//   },
//   postcss: [autoprefixer],
//   // sassLoader: {
//     // data: '@import "' + path.resolve(__dirname, 'app/theme/_config.scss') + '";'
//   // },
//   plugins: [
//     new ExtractTextPlugin('bundle.css', { allChunks: true }),
//     new webpack.NoErrorsPlugin(),
//     new webpack.DefinePlugin({
//       'process.env.NODE_ENV': JSON.stringify('development')
//     }),
//     new webpack.HotModuleReplacementPlugin()
//   ]
// }

