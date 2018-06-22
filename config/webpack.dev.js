const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    main: ["./src/index.js"]
  },
  // mode: "development",
  mode: devMode ? 'development' : 'production',
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "../dist/"),
    publicPath: "/"
  },
  devServer: {
    contentBase: "dist",
    overlay: true
  },
  plugins: [
    new MiniCssExtractPlugin(
      {
        filename: "css/[name].css"
      }
    )
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader"
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.s?[ac]ss$/,
        use: [
          // // devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          // "style-loader", MiniCssExtractPlugin.loader,
          // "css-loader",
          // "postcss-loader",
          // "sass-loader"
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { url: false, sourceMap: true } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      },
      {
        test: /\.html$/,
        use: [
          { 
            loader: "file-loader",
            options: {
              name: "[name].html"
            }
          },
          {
            loader: "extract-loader"
          },
          {
            loader: "html-loader",
            options: {
              attrs: ["img:src"]
            }
          }
        ]
      },
      {
        test: /\.jpg$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  devtool: 'source-map'
};
