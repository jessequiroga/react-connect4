require('dotenv').config();

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const APP_DIR = path.resolve(__dirname,'src/app');
const BUILD_DIR = path.resolve(__dirname,'src/public');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname +'/src/public/index.html',
  filename: 'index.html',
  inject: 'body'
});

// plugin to define global constants
const DefinePluginConfig = new webpack.DefinePlugin({  
  API_KEY: JSON.stringify(process.env.API_KEY),
  API_ENV: JSON.stringify(process.env.APP_ENV)
});
const DashboardPluginConfig = new DashboardPlugin();
const isTest = process.env.API_KEY === 'test';
const isProd = process.env.API_KEY === 'prod';

function setDevTool() {  
    if (isTest) {
      return 'inline-source-map';
    } else if (isProd) {
      return 'source-map';
    } else {
      return 'eval-source-map';
    }
}

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'js/bundle.js'
  },
  module: {
    rules: [
      { test: /\.(sass|scss)$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        include : APP_DIR,
        exclude: /node_modules/,
        use: "babel-loader"
      }, 
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader'
      }
    ]
  },
  devtool: setDevTool(),
  plugins: [
    HtmlWebpackPluginConfig, DefinePluginConfig, DashboardPluginConfig
  ],
  devServer: {
    contentBase: BUILD_DIR,
    port: 4444
  }
}

if(isProd) {  // plugins to use in a production environment
    config.plugins.push(
        new UglifyJSPlugin()  // minify the chunk
    );
};

module.exports = config;