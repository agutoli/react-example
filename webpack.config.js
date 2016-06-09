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
            loader: 'babel',
            query: {
              presets: ['react', 'es2015']
            }
          }
        ]
    }
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
