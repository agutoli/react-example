const webpack = require('webpack'),
      path = require('path'),
      I18nPlugin = require('i18n-webpack-plugin');

const LANGUAGES = [
    'en-US',
    'es-MX',
    'pt-BR',
];

const distFolder = path.join(__dirname, 'dist');

const config = {
    devtool: 'source-map',
    debug: true,
    entry: {
        main: './main.js'
    },
    devServer: {
        port: 8080,
        historyApiFallback: true
    },
    module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
              presets: ['react', 'es2015', 'stage-1'],
              plugins: [__dirname + '/babelRelayPlugin']
            }
          }
        ]
    },
    // Including React and ReactDOM together produces WARNING in webpack
    // https://github.com/facebook/react/issues/4566
    resolve: {
        alias: {
            react: path.resolve(__dirname, './node_modules/react'),
            React: path.resolve(__dirname, './node_modules/react')
        },
        fallback: path.resolve(__dirname, './node_modules')
    },
    resolveLoader: {
        fallback: path.resolve(__dirname, './node_modules')
    },
};

const bundles = LANGUAGES.map((language) => {
    const languageContent = require(`./languages/${ language }.json`);

    return Object.assign(
        {},
        config, {
        output: {
            path: distFolder,
            filename: `${ language }.[name].js`
        },
        name: language,
        plugins: [
            new I18nPlugin(languageContent)
        ]
    });
});

module.exports = bundles;
