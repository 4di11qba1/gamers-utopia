const path = require('path');

module.exports = {
  mode: 'development', // or 'production'
  entry: './gamers-utopia/frontend/src/index.js',
  output: {
    path: path.resolve(__dirname, './gamers-utopia/frontend/static/frontend'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
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
};
