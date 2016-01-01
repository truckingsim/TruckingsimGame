var path = require('path');
var webpack = require('webpack');

var packages = require('./package.json');

module.exports = {
    //devtool: 'eval', //devtool: 'eval' for maximum build performance
    entry: {
        app: './resources/assets/js/__init__.js',
        vendors: [
            'react',
            'react-dom',
            'redux',
            'lodash',
            'react-bootstrap',
            'react-router',
            'react-router-bootstrap',
            'moment',
            'classnames'
        ]
    },
    output: {
        path: path.join(__dirname, 'public/js'),
        filename: '[name].min.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            __DEBUG__: JSON.stringify(false)
        }),
        //Only load EN moment locale
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        //Ignore test files
        new webpack.IgnorePlugin(/-test(\.jsx?|)$/, /app$/),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.min.js')
    ],
    resolve: {
        root: path.resolve(__dirname, 'resources/assets/js'),
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel-loader?presets[]=react'],
            include: path.resolve(__dirname, 'resources/assets/js')
        }]
    }
};
