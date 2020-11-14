'use strict'

const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.vue$/, use: 'vue-loader' },
      {
        test: /\.css$/, use: [
          process.env.NODE_ENV !== 'production'
          ? 'vue-style-loader'
          : MiniCssExtractPlugin.loader,
          'css-loader',
        ]
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          process.env.NODE_ENV !== 'production'
          ? 'vue-style-loader'
          : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader', // translates CSS into CommonJS
            options: {
              esModule: false
            }
          },
          {
            loader: "sass-loader", // compiles Sass to CSS, using Node Sass by default
            options: {
              additionalData: `
                @import "~style/commons/_variables.scss";
                @import "~style/commons/_mixins.scss";
              `,
            },
          },
        ],
      },
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    hot: true,
  },
  resolve: {
    alias: {
      style: path.join(__dirname, 'style')
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    // ... Vue Loader plugin omitted
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    new StyleLintPlugin({
      files: ['**/*.{vue,htm,html,css,sss,less,scss,sass}'],
    })
  ]
};
