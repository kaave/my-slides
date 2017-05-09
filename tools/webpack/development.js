const
  webpack = require('webpack'),
  BrowserSyncPlugin = require('browser-sync-webpack-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  CopyWebpackPlugin = require('copy-webpack-plugin');

const config = require('./base');

const plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': '\'development\''
  }),
  new webpack.LoaderOptionsPlugin({ debug: true }),
  new webpack.HotModuleReplacementPlugin(),
  ...config.views.map(filename => new HtmlWebpackPlugin({
    title: 'Sample webpack project: Debug',
    inject: false,
    template: `source/${filename}.ejs`,
    filename: `${filename}.html`
  })),
  new CopyWebpackPlugin(
    [{ from: 'assets' }],
    { ignore: ['.DS_Store'] }
  ),
  new BrowserSyncPlugin(
    {
      host: 'localhost',
      port: '3000',
      files: [
        'source/index.ejs',
        'source/views/**/*.ejs'
      ],
      proxy: 'http://localhost:13000'
    },
    {
      reload: false
    }
  )
];
const devtool = 'cheap-module-eval-source-map';

const entry = {};
Object.keys(config.webpack.entry).forEach(key => (entry[key] = config.webpack.entry[key].concat([
  'webpack-dev-server/client?http://localhost:13000',
  'webpack/hot/only-dev-server'
])));

module.exports = Object.assign({}, config.webpack, {
  cache: true,
  entry,
  plugins,
  devtool,
  devServer: {
    publicPath: config.webpack.output.publicPath,
    port: 13000,
    hot: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          'react-hot-loader',
          'babel-loader'
        ]
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      },
      ...config.loaders
    ]
  }
});

