const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, './app'),
};

module.exports = {
  entry: {
    app: [path.join(paths.SRC, 'index.jsx')],
  },
  output: {
    path: paths.DIST,
    publicPath: '/',
  },
  devServer: {
    port: 8080
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './app/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
  ],
  module: {
    rules: [
      {
        test: /.jsx$/, 
        exclude: /node_modules/,
        use: { 
          loader: 'babel-loader', 
          options: { 
            presets: [
              '@babel/preset-react',
              '@babel/preset-env'
            ] 
          } 
        } 
      },
      { 
        test: /.js$/, 
        exclude: /node_modules/, 
        use: { 
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env'
            ] 
          } 
        } 
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ]
  },
};
