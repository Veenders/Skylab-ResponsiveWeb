const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    entry: ['./index.js'],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname + "/dist"),
        publicPath: ''
    },
    module:{
      rules:[
        {
          test:/\.scss$/,
          use:[
            { loader: MiniCssExtractPlugin.loader, 
              options: {
                publicPath: '../'
              } 
            },
            "css-loader",
            "sass-loader"
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader'
          ]
        },
        {
          test: /\.(html)$/,
          use: {
            loader: 'html-loader',
            options: {
              attrs: ['img:src']
            }
          }
        }
      ]
    },
    devServer: {
      contentBase: './dist',
      port: 3000,
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "./index.html"
      }),
      new HtmlWebpackPlugin({
        filename: "about.html",
        template: "./about.html"
      }),
      new HtmlWebpackPlugin({
        filename: "contact.html",
        template: "./contact.html"
      }),
      new MiniCssExtractPlugin({
        filename: "css/[name].css",
        chunkFilename: "[id].css"
      })
    ]
}