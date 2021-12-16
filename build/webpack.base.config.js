/*
 * @Author: liyingda
 * @Date: 2021-12-16 10:12:43
 * @LastEditors: liyingda
 * @LastEditTime: 2021-12-16 15:46:50
 */
 /** 
 * 公共配置 
 * */

const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const resolve = file => path.resolve(__dirname, file)

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  mode: isProd ? 'production' : 'development',
  output: {
    path: resolve('../dist/'), // 打包文件的输出目录
    publicPath: '/dist/', // 请求打包资源的请求前缀/dist
    filename: '[name].[chunkhash].js'
  },
  resolve: {
    alias: {
      // 路径别名，@指向src
      '@': resolve('../src/')
    },
    // 可以省略的扩展名
    // 当省略扩展名时，按照从前往后的顺序依次解析 
    extensions: ['.js', '.vue', '.json']
  },
  devtool: isProd ? 'source-map' : 'eval-cheap-module-source-map',
  module: {
    rules: [
      // 处理图片资源
      {
        test: /\.(png|jpg|gif)$/i,
        use: [{
          loader:'url-loader',
          options: {
            limit: 8192
          }
        }]
      },
      // 处理字体资源
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      // 处理.vue资源
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // 处理css资源，它会应用到普通的.css文件，以及vue中的style
      { 
        test: /\.css$/,
        use: ['vue-style-loader','css-loader']
      },
      // CSS 预处理器，参考：https://vue-loader.vuejs.org/zh/guide/pre-processors.html
      // 例如处理 scss 资源
      { 
        test: /\.scss$/,
        use: [ 'vue-style-loader', 'css-loader', 'sass-loader' ] 
      },
    ]
  },
  plugins: [ 
    new VueLoaderPlugin(), 
    new FriendlyErrorsWebpackPlugin()
  ]
}