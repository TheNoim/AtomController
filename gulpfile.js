/**
 * Created by nilsbergmann on 25/10/2016.
 */
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var clean = require('gulp-clean');
var vulcanize = require('gulp-vulcanize');
var gulpSequence = require('gulp-sequence');

gulp.task('default', gulpSequence('clean','minify','copy-nodejs'));

gulp.task('minify', function() {
    gulp.src('src/*.html')
        .pipe(vulcanize({
            abspath: '',
            excludes: [],
            inlineScripts: true,
            inlineCss: true
        }))
        .pipe(htmlmin({collapseWhitespace: true,minifyCSS: true, removeComments: true}))
        .pipe(gulp.dest('build/'))
});

gulp.task('copy-nodejs', function () {
    gulp.src('src/nodejs/*').pipe(gulp.dest('build/nodejs/'));
});

gulp.task('clean', function () {
    return gulp.src('build/', {read: false})
        .pipe(clean());
});