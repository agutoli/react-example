var webpack = require('webpack'),
    path = require('path');

module.exports = {
    debug: true,
    entry: {
        main: './main.jsx'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundler.js'
    },
    module: {
        loaders: [
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel', // 'babel-loader' is also a legal name to reference
            query: {
              presets: ['es2015', 'react']
            }
          }
        ]
    }
};
