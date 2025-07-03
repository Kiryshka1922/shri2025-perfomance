import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import ImageMinimizerPlugin from 'image-minimizer-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
  mode: 'production',
  entry: './src/App.jsx',
  output: {
    filename: '[name].[contenthash].js',
    path: resolve(__dirname, 'dist'),
    clean: true,
    assetModuleFilename: 'assets/[hash][ext][query]'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  'autoprefixer',
                  'cssnano'
                ]
              }
            }
          }
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: true
    }),
    new MiniCssExtractPlugin({
      filename: 'css/styles.[contenthash].min.css',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "src/assets",
          to: "assets",
          filter: async (resourcePath) => {
            return !/\.(jpe?g|png|gif|svg)$/i.test(resourcePath);
          },
        }
      ],
    }),
    new ImageMinimizerPlugin({
      minimizer: {
        implementation: ImageMinimizerPlugin.sharpMinify,
        options: {
          encodeOptions: {
            jpeg: { quality: 80 },
            png: { quality: 80 },
            webp: { lossless: false, quality: 80 },
          },
        },
      },
      generator: [
        {
          preset: 'webp',
          implementation: ImageMinimizerPlugin.sharpGenerate,
          options: {
            encodeOptions: {
              webp: {
                quality: 80,
              },
            },
          },
        },
      ],
    }),
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      minSize: 10000,
      maxSize: 500000,
      minChunks: 2,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: '~',
      cacheGroups: {
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
          name: 'react',
          chunks: 'all',
          priority: 20,
          enforce: true
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          priority: 10,
          reuseExistingChunk: true
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        },
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    },
  }
};