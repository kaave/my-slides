const
  webpack = require('webpack'),
  CopyWebpackPlugin = require('copy-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  UglifyJSPlugin = require('uglifyjs-webpack-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require('./base');

const plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': '\'production\''
  }),
  new webpack.LoaderOptionsPlugin({ debug: false }),
  new CopyWebpackPlugin(
    [{ from: 'assets' }],
    { ignore: ['.DS_Store'] }
  ),
  new ExtractTextPlugin('[name].css'),
  new UglifyJSPlugin(),
  ...config.views.map(filename => new HtmlWebpackPlugin({
    title: 'Sample webpack project',
    inject: false,
    minify: {
      html5: true,
      includeAutoGeneratedTags: true,
      collapseWhitespace: true
    },
    template: `source/${filename}.ejs`,
    filename: `${filename}.html`
  })),
  ...config.slides.map(slidename => new HtmlWebpackPlugin({
    title: slidename,
    inject: false,
    minify: {
      html5: true,
      includeAutoGeneratedTags: true,
      collapseWhitespace: true
    },
    template: 'source/views/_slide-template.ejs',
    filename: `${slidename}.html`,
    script: `${slidename}.js`
  }))
];
const devtool = false;

const entry = {};
Object.keys(config.webpack.entry).forEach(key => (entry[key] = config.webpack.entry[key].concat(['babel-polyfill'])));

module.exports = Object.assign({}, config.webpack, {
  cache: false,
  entry,
  plugins,
  devtool,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.s[ac]ss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                minimize: true
              }
            },
            'postcss-loader',
            'sass-loader'
          ]
        })
      },
      ...config.loaders
    ]
  }
});

