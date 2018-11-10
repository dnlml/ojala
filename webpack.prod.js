const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const miniCss = new MiniCssExtractPlugin({
  filename: '[name].css',
  chunkFilename: '[id].css',
  chunks: 'all',
});

const copyFiles = new CopyWebpackPlugin([
  { from: 'src/**.html', to: '[name].html' },
  { from: 'src/assets/images', to: 'assets/images' },
]);

// const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: './src/scripts/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.scss$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              options: {},
            },
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['src/style/**.scss'],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    copyFiles,
    miniCss,
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
};
