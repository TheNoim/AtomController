/**
 * Created by nilsbergmann on 25/10/2016.
 */
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var clean = require('gulp-clean');
var vulcanize = require('gulp-vulcanize');
var gulpSequence = require('gulp-sequence');

gulp.task('default', gulpSequence('clean','minify','copy-nodejs', 'main', 'package'));

gulp.task('minify', function() {
    gulp.src('src/*.html')
        .pipe(vulcanize({
            abspath: '',
            excludes: [],
            inlineScripts: true,
            inlineCss: true
        }))
        .pipe(htmlmin({collapseWhitespace: true,minifyCSS: true, removeComments: true}))
        .pipe(gulp.dest('www/'))
});

gulp.task('copy-nodejs', function () {
    gulp.src('src/nodejs/*').pipe(gulp.dest('www/nodejs/'));
});

gulp.task('clean', function () {
    return gulp.src('www/', {read: false})
        .pipe(clean());
});

gulp.task('main', function () {
    gulp.src('src/main.js').pipe(gulp.dest('www/'));
});

gulp.task('package', function () {
    gulp.src('src/package.json').pipe(gulp.dest('www/'));
});