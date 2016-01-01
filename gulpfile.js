// Node Modules
var gulp = require('gulp');
var sass = require('gulp-sass');
var webpack = require('webpack');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');

// Local variables
var sassPath = './resources/assets/sass/**/*.scss';

// Gulp grouped tasks
gulp.task('default', ['js-server', 'sass-watch']);
gulp.task('build', ['js-build', 'sass']);

// Gulp single tasks
gulp.task('sass', function() {
    gulp.src(sassPath)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public/css'));
});

gulp.task('js-build', function(cb) {
    webpack(require('./webpack.config.prod.js'), function(err, stats) {
        if(err) throw new gutil.PluginError('webpack', err);
        gutil.log('[webpack]', stats.toString({}));
        cb();
    });
});

// Gulp Watchers
gulp.task('sass-watch', ['sass'], function() {
    gulp.watch(sassPath, ['sass']);
});

// js server
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
