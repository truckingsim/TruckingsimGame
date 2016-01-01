var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'source-map', //devtool: 'eval' for maximum build performance
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './resources/assets/js/__init__.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: 'http://localhost:3000/js/'
    },
    plugins: [
        new webpack.DefinePlugin({
            __DEBUG__: JSON.stringify(true)
        }),
        //Only load EN moment locale
        //new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en|es/),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        //Ignore test files
        new webpack.IgnorePlugin(/-test(\.jsx?|)$/, /app$/),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        root: path.resolve(__dirname, 'resources/assets/js'),
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['react-hot-loader', 'babel-loader?presets[]=react'],
            include: path.resolve(__dirname, 'resources/assets/js')
        }],
        noParse: [
            /\/sinon.js/
        ]
    }
};
