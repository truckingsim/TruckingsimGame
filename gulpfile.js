var elixir = require('laravel-elixir');
var gulp = require('gulp');
var webpack = require('webpack');
var gutil = require('gulp-util');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

gulp.task('js-server', function() {
    var WebpackDevServer = require('webpack-dev-server');

    var config = require('./webpack.config.dev.js');
    var compiler = webpack(config);

    new WebpackDevServer(compiler, {
        publicPath: config.output.publicPath,
        hot: true,
        historyApiFallback: true
    }).listen(3000, 'localhost', function(err) {
        if(err) throw new gutil.PluginError('webpack-dev-server', err);

        gutil.log('[webpack-dev-server]', 'http://localhost:3000/webpack-dev-server/index.html');
    })
});

elixir(function(mix) {
    mix.sass('core.scss')
        .version('css/core.css');
});

elixir(function(mix) {
    mix.task('js-server');
});
