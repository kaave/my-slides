const
  path = require('path'),
  globby = require('globby'),
  webpack = require('webpack');

const slides = globby.sync(['./source/slides/*', '!./source/slides/common'])
  .map(slidePath => slidePath.replace(/\.\/source\/slides\//, ''));
const entry = {
  app: [
    './source/styles/app.scss',
    './source/scripts/app.js'
  ]
};

slides.forEach(slideName => (entry[slideName] = [`./source/slides/${slideName}/index.jsx`]));

module.exports = {
  webpack: {
    entry,
    output: {
      path: path.join(__dirname, '../../docs'),
      filename: '[name].js',
      publicPath: '/'
    },
    resolve: {
      extensions: ['.jsx', '.js']
    }
  },
  views: [
    'index',
    ...globby.sync('./source/views/*.ejs')
      .map(filePath => filePath.replace(/\.\/source\//, ''))
      .map(filePath => filePath.replace(/\.ejs$/, ''))
  ],
  slides,
  loaders: [
    {
      test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'application/font-woff'
        }
      }
    },
    {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'application/octet-stream'
        }
      }
    },
    {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      use: 'file-loader'
    },
    {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'image/svg+xml'
        }
      }
    },
    {
      test: /\.png$/,
      use: {
        loader: 'url-loader',
        options: {
          mimetype: 'image/png'
        }
      }
    },
    {
      test: /\.jpg$/,
      use: {
        loader: 'url-loader',
        options: {
          mimetype: 'image/jpg'
        }
      }
    },
    {
      test: /\.code$/,
      use: 'raw-loader'
    },
    {
      test: /\.ejs$/,
      use: 'ejs-compiled-loader'
    }
  ]
};

