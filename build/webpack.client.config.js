/*
 * @Author: liyingda
 * @Date: 2021-12-16 10:12:57
 * @LastEditors: liyingda
 * @LastEditTime: 2021-12-16 11:25:16
 */
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

module.exports = merge(baseConfig, {
  entry: {
    // 相对于打包所处的路径
    app: './src/entry-client.js'
  },
  module: {
    rules: [{
      // es6转es5
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          cacheDirectory: true,
          plugins: ['@babel/plugin-transform-runtime']
        }
      }
    }]
  },
  //重要信息：这将webpack运行时分离到一个引导chunk中，
	//以便可以在之后正确注入异步chunk。
  optimization: {
    splitChunks: {
      name: "mainfest",
      minChunks: Infinity
    }
  },
  plugins: [
    //此插件在输出目录中生成 `vue-ssr-client-manifest.json`。
		new VueSSRClientPlugin()
  ]
})