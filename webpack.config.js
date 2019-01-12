const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, './src/dist'),
    filename: 'app.bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
      // {
      //   test: /\.(png|jp(e*)g|svg)$/,  
      //   use: [{
      //     loader: 'url-loader',
      //     options: {
      //       limit: 8000, // Convert images < 8kb to base64 strings
      //       name: 'images/[hash]-[name].[ext]'
      //     }
      //   }]
      // }
    ],
  },

  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'src/index.html',
        to: 'index.html',
      },
    ]),
  ],

  devServer: {
    contentBase: path.join(__dirname, 'src'),
  },

  mode: 'development',
};
