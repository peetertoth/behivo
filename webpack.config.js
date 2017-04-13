var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    main: path.join(__dirname, 'app/vue/main.js')
  },
  output: {
    path: path.join(__dirname, 'app/static'),
    filename: '[name].js'
  },
  stats: {
    warnings: false
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
        loader: 'file-loader',
        query: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
    // rules: [
    //   {
    //     test: /\.(vue)$/,
    //     loader: 'vue-loader'
    //   },
    //   {
    //     test: /\.(js)$/,
    //     loader: 'babel-loader',
    //     exclude: /node_modules/
    //   },
    //   {
    //     test: /\.(png|jpe?g|gif|svg)$/,
    //     loader: 'file-loader',
    //     options: {
    //       name: '[name].[ext]?[hash]'
    //     }
    //   },
    //   {
    //     test: /\.(scss)$/,
    //     loaders: ['style-loader', 'css-loader', 'sass-loader']
    //   }
    // ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
};

module.exports.plugins = [
  new (require('./webpack.stdlib.js'))
];

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]);
}
