const path = require('path');
const { merge } = require('webpack-merge');
const commonConfiguration = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(commonConfiguration, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../build'), // Ensure the build directory is correct
    filename: 'bundle.[contenthash].js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    // Add other plugins if needed
  ],
  // Add other configurations if needed
});