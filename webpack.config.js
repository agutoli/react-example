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
        app: './App.js'
    },
    resolve: {
        alias: {
            react: path.resolve('./node_modules/react')
        }
    },
    devServer: {
        port: 8080,
        historyApiFallback: true,
        stats: 'errors-only',
        proxy: {
          "/schema/data": "http://localhost:5000"
        },
    },
    module: {
        loaders: [
          { test: /\.css$/, loader: "style-loader!css-loader" },
          {
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
          },
          {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: 'babel',
              query: {
                presets: ['react', 'es2015', 'stage-1'],
                plugins: [__dirname + '/babelRelayPlugin']
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
