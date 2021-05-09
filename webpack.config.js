/* eslint-disable indent */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv').config({
  path: path.resolve(__dirname, '.env'),
});

const distPath = path.resolve(__dirname, 'build');
const entryPath = path.resolve(__dirname, 'src/core');

const getDevOptions = argv =>
  argv.mode !== 'production'
    ? {
        devtool: 'eval-source-map',
        devServer: {
          contentBase: distPath,
          historyApiFallback: true,
          port: 8000,
        },
      }
    : {};

const getBaseOptions = () => ({
  mode: 'development',
  entry: entryPath,
  output: {
    filename: 'bundle.js',
    path: distPath,
    publicPath: '/',
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: [
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-transform-runtime',
              ],
            },
          },
        ],
      },
      {
        test:/\.(png|svg|jpg|jpeg|gif|ico)$/,
        use: {
          loader: "file-loader",
          options: {
              name: "[name].[ext]",
              outputPath: "imgs"
          }
      }

      },
      {
        test: /\.module\.css$/i,
        use: [
          {
            loader: 'style-loader',
            options: {
              esModule: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: { localIdentName: '[name]__[local]___[hash:base64:5]' },
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        exclude: /\.module\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.ttf$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/core/index.html',
      favicon: 'src/assets/icons/favicon.ico',
      icon:'src/assets/icons/logo-2-1.png'
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.parsed),
    }),
  ],
});

const config = (_, argv) => ({ ...getBaseOptions(), ...getDevOptions(argv) });

module.exports = config;
