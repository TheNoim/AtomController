/**
 * Created by nilsbergmann on 25/10/2016.
 */
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var clean = require('gulp-clean');
var vulcanize = require('gulp-vulcanize');

gulp.task('default', ['clean','minify-inline']);

gulp.task('minify-inline', function() {
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

gulp.task('clean', function () {
    return gulp.src('build/', {read: false})
        .pipe(clean());
});