/* eslint-disable no-undef */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlReplaceWebpackPlugin = require('html-replace-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssPresetEnv = require('postcss-preset-env');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const sortMediaQueries = require('postcss-sort-media-queries');
const TerserPlugin = require('terser-webpack-plugin');

// source maps для dev
const devtool = process.argv.includes('--mode=development') ? 'eval-cheap-module-source-map' : false;
// определение разных окружений
const target = process.argv.includes('--mode=development') ? 'web' : 'browserslist';

module.exports = (env) => ({
  entry: {
    main: path.resolve(__dirname, 'src/js/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: env.prod ? './js/[name].[contenthash].js' : './js/[name].js',
    clean: true,
  },
  devServer: {
    open: true,
    hot: true,
    compress: true,
  },
  devtool,
  target,
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          // транспиляция JS кода в старый синтаксис
          options: {
            presets: ['@babel/preset-env', 'minify'],
          },
        },
      },
      {
        test: /\.(css|scss)$/i,
        use: [
          env.prod ? MiniCssExtractPlugin.loader : 'style-loader', // внедрение стилей в DOM (файл main.css дял prod)
          'css-loader', // css -> common js
          {
            // обработка css
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  postcssPresetEnv,
                  {
                    // настройка префиксов
                    autoprefixer: {
                      flexbox: true,
                      overrideBrowserslist: ['last 4 versions'],
                    },
                  },
                  // перенос медиа-запросов в конец файла css
                  sortMediaQueries,
                ],
              },
            },
          },
          'sass-loader', // sass -> css
        ],
      },
      {
        test: /\.(?:|png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/img/[name].[contenthash:8][ext]',
        },
        use: env.dev
          ? []
          : [
              {
                loader: ImageMinimizerPlugin.loader,
                options: {
                  minimizer: [
                    {
                      // оптимизация png
                      implementation: ImageMinimizerPlugin.imageminMinify,
                      options: {
                        plugins: [['imagemin-pngquant', { quality: [0.6, 0.8] }]],
                      },
                    },
                    {
                      // оптимизация svg
                      implementation: ImageMinimizerPlugin.svgoMinify,
                      options: {
                        encodeOptions: {
                          multipass: true,
                          plugins: ['preset-default'],
                        },
                      },
                    },
                  ],
                },
              },
            ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // создание HTML файла
      filename: 'index.html',
      title: 'Форма оплаты',
      favicon: path.resolve(__dirname, 'src/assets/img/favicon.png'),
      minify: env.dev
        ? {}
        : {
            removeAttributeQuotes: true,
            collapseWhitespace: true,
          },
    }),
    new HtmlReplaceWebpackPlugin([
      {
        pattern: '<html>',
        replacement: '<html lang="ru">',
      },
    ]),
    new MiniCssExtractPlugin({
      filename: 'css/main.[contenthash].css', // создание css файла для prod
    }),
  ],
  optimization: {
    minimizer: env.dev
      ? []
      : [
          new CssMinimizerPlugin({
            minimizerOptions: {
              preset: [
                'default',
                {
                  // удаление комментариев из css файла
                  discardComments: { removeAll: true },
                },
              ],
            },
          }),
          new TerserPlugin({
            terserOptions: {
              // переименование переменных для уменьшения размера кода
              mangle: {
                toplevel: true,
              },
              format: {
                // удаление всех комментариев в js output
                comments: false,
              },
              compress: {
                // удаление выражений console
                drop_console: true,
              },
            },
          }),
        ],
  },
});
/* eslint-enable */
