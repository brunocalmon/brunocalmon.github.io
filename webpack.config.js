const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/main.ts',  // Your main entry file for TypeScript
  output: {
    filename: 'scripts.min.js',  // Output JS file as scripts.min.js
    path: path.resolve(__dirname, 'js'),  // Output to js folder, not ts folder
  },
  module: {
    rules: [
      {
        test: /\.ts$/,  // TypeScript files
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,  // For .scss and .sass files
        use: [
          MiniCssExtractPlugin.loader,  // Extract CSS into a separate file
          'css-loader',  // Loads CSS files
          'sass-loader',  // Compiles SCSS to CSS
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,  // Handle image files
        type: 'asset/resource',  // Use asset modules (Webpack 5+)
        generator: {
          filename: '../images/[name][ext][query]',  // Output to images/ folder
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.scss'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../css/styles.css',  // Output CSS file in css folder
    }),
  ],
};
