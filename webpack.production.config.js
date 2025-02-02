var path = require('path')
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, './src/js/App.jsx'),
    // 将 第三方依赖 单独打包
    vendor: [
      'react', 
      'react-dom', 
      'react-redux', 
      'react-router', 
      'redux', 
      'es6-promise', 
      'whatwg-fetch', 
      'immutable'
    ]
  },
  output: {
    path: __dirname + "/build",
    filename: "[name].[hash].js",
    publicPath: '/'
  },

  resolve:{
      extensions:['', '.js','.jsx']
  },

  module: {
    loaders: [
        { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel' },
        { test: /\.less$/, exclude: /node_modules/, loader: ExtractTextPlugin.extract('style', 'css!postcss!less') },
        { test: /\.css$/, exclude: /node_modules/, loader: ExtractTextPlugin.extract('style', 'css!postcss') },
        { test:/\.(png|gif|jpg|jpeg|bmp)$/i, loader:'url-loader?limit=5000&name=img/[name].[ext]' },
        { test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/i, loader:'url-loader?limit=5000&name=fonts/[name].[ext]'}
    ]
  },
  postcss: [
    require('autoprefixer')
  ],

  plugins: [
    // webpack 内置的 banner-plugin
    new webpack.BannerPlugin("Copyright by wangfupeng1988@github.com."),

    // html 模板插件
    new HtmlWebpackPlugin({
        template: __dirname + '/index.html'
    }),

    // 定义为生产环境，编译 React 时压缩到最小
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),

   
    
    // 分离CSS和JS文件
    new ExtractTextPlugin('[name].[hash].css'), 
    
    // 提供公共代码
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: '[name].[hash].js'
    })

   
  ]
}