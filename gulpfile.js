'use strict';
/********************** Require plugin ***************************/
var gulp = require('gulp'),
    gulpIf = require('gulp-if'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    cssmin = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    browserify = require('gulp-browserify'),
    stringify = require('stringify'),
    uglify = require('gulp-uglify'),
    ngAnnotate = require('gulp-ng-annotate'),
    shell = require('gulp-shell'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber'),

    /******************* Paths for files *********************/
    paths = require('./gulp.config.js');


/*********************** Gulp Error Handaling **************************/
var onError = function(err) {
    notify.onError({
        title: "Gulp",
        subtitle: "Failure!",
        message: "Error: <%= error.message %>"
    })(err);
    this.emit('end');
};

/*********************** Task for compiling app sass **************************/
gulp.task('sass', function() {
    var config = {};
    return gulp.src(paths.sass.src)
        .pipe(plumber({
            errorHandler: onError
        }))
        .pipe(sass(config))
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(paths.outputClientDir + paths.sass.dest))
        .pipe(notify({
            message: 'Sass Task Completed'
        }));
});

/*********************** Task for compiling library css **************************/
gulp.task('vendorCss', function() {
    return gulp.src(paths.vendorCss.src)
        .pipe(cssmin())
        .pipe(concat(paths.vendorCss.output))
        .pipe(gulp.dest(paths.outputClientDir + paths.vendorCss.dest));
});

/*********************** Task for compiling js **************************/
gulp.task('js', function() {
    return gulp.src(paths.js.src, {
            read: false
        })
        .pipe(plumber({
            errorHandler: onError
        }))
        .pipe(ngAnnotate())
        .pipe(browserify({
            transform: stringify({
                extensions: ['.html', '.tpl'],
                minify: true
            })
        }))
        .pipe(gulpIf(paths.env !== 'development', uglify()))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(paths.outputClientDir + paths.js.dest))
        .pipe(notify({
            message: 'JS Task Completed'
        }));
});

/*********************** Task for compiling library js **************************/
gulp.task('vendorJs', function() {
    return gulp.src(paths.vendorJs.src)
        .pipe(uglify())
        .pipe(concat(paths.vendorJs.output))
        .pipe(gulp.dest(paths.outputClientDir + paths.vendorJs.dest));
});

/*********************** Task for copy Index.html **************************/
gulp.task('copyIndex', function() {
    return gulp.src(paths.indexHtml.src)
        .pipe(gulp.dest(paths.outputClientDir));
});

/*********************** Task for copying fonts **************************/
gulp.task('fonts', function() {
    return gulp.src(paths.fonts.src)
        .pipe(gulp.dest(paths.outputClientDir + paths.fonts.dest));
});

/*********************** Task for copying images **************************/
gulp.task('images', function() {
    return gulp.src(paths.images.src)
        .pipe(gulp.dest(paths.outputClientDir + paths.images.dest));
});

/*********************** Task for building documentation **************************/
gulp.task('docs', shell.task([
    'node_modules/jsdoc/jsdoc.js ' +
    '-c node_modules/angular-jsdoc/common/conf.json ' + // config file
    '-t node_modules/angular-jsdoc/angular-template ' + // template file
    '-d ./docs ' + // output directory
    './README.md ' + // to include README.md as index contents
    '-r ./app/scripts'
]));

/*********************** Task for watching **************************/
gulp.task('watch', function() {
    gulp.watch(paths.sass.watch, ['sass']);
    gulp.watch(paths.indexHtml.watch, ['copyIndex']);
    gulp.watch([paths.js.watch, paths.template.watch], ['js']);
    gulp.watch(paths.images.watch, ['images']);
});

/*********************** Task for watching js for docs **************************/
gulp.task('docsWatch', function() {
    gulp.watch(paths.js.watch, ['docs']);
});

/*********************** Task for development **************************/
gulp.task('build', ['fonts', 'copyIndex', 'images', 'vendorCss', 'sass', 'vendorJs', 'js', 'docs']);
gulp.task('default', ['build', 'watch']);
