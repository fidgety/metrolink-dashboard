const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const env = process.env.WEBPACK_ENV;

var host = '0.0.0.0';
var port = '9004';

const config = {
    entry: './client/app/index.js',
    devtool: 'source-map',
    output: {
        path: __dirname + '/client/public/bundles',
        filename: 'bundle.js',
        publicPath: __dirname + '/client/public/bundles'
    },
    module: {
        loaders: [{
            test: /client.*\.js?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015', 'stage-2']
            }
        },
        {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract(
                    // activate source maps via loader query
                    'css?sourceMap!' +
                    'sass?sourceMap&' +
                    'includePaths[]=' +
                    './client/app/sass-globals')
        },
        {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }]
    },
    plugins: [
        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV': JSON.stringify('production')
        // }),
        new ExtractTextPlugin('./styles.css')
    ],
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        dns: 'empty'
    }
};


if (env !== 'production') {
    new WebpackDevServer(webpack(config), {
        contentBase: './client/public',
        historyApiFallback: true,
        hot: true,
        debug: true
    }).listen(port, host, function (err, result) {
        if (err) {
            console.log(err);
        }
    });
    console.log('-------------------------');
    console.log('Local web server runs at http://' + host + ':' + port);
    console.log('-------------------------');
}

module.exports = config;
