const paths = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // Where webpack looks to start building the bundle
  entry: [paths.src + '/index.js'],

  // Determine how modules within project are treated
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.(svg|png|jpe?g|gif|pdf)$/i,
        use: {
          loader: 'file-loader',
          options: {
            esModule: false,
            name: '[name].[hash].[ext]',
            outputPath: 'assets/images',
          },
        },
      },
    ],
  },

  // Customize the webpack build process
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),

    // Generates an HTML file from a template
    new HtmlWebpackPlugin({
      filename: 'index.html', // output file
      template: paths.src + '/index.html', // template file
      favicon: false,
    }),
  ],
}