const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, './src/dist'),
    filename: 'app.bundle.js',
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
