/**
 * Created by nilsbergmann on 25/10/2016.
 */
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var clean = require('gulp-clean');
var vulcanize = require('gulp-vulcanize');
var gulpSequence = require('gulp-sequence');
var jeditor = require("gulp-json-editor");

gulp.task('default', gulpSequence('clean','minify','copy-scripts', 'main', 'package'));

gulp.task('minify', function() {
    gulp.src('src/**/*.html')
        .pipe(vulcanize({
            abspath: '',
            excludes: [],
            inlineScripts: true,
            inlineCss: true
        }))
        .pipe(htmlmin({collapseWhitespace: true,minifyCSS: true, removeComments: true, minifyJS: true, collapseBooleanAttributes: true}))
        .pipe(gulp.dest('www/'))
});

gulp.task('copy-scripts', function () {
    gulp.src('src/**/*.js').pipe(gulp.dest('www/'));
});

gulp.task('clean', function () {
    return gulp.src('www/', {read: false})
        .pipe(clean());
});

gulp.task('main', function () {
    gulp.src('src/main.js').pipe(gulp.dest('www/'));
});

gulp.task('package', function () {
    gulp.src('./package.json')
        .pipe(jeditor(function(json) {
            json.build = undefined;
            return json;
        }))
        .pipe(gulp.dest('www/'));
});