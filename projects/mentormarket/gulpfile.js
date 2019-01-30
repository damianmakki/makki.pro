var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');
var livereload = require('gulp-livereload');

var fromRoot = require('path').join.bind(null, './');

gulp.task('buildCSS', function () {

  var src = gulp.src(fromRoot('assets/sass/main.scss'));
  var dest = gulp.dest(fromRoot('assets/css'));

  return src.pipe(plumber())
  .pipe(sass())
  .pipe(rename('style.css'))
  .pipe(minifycss())
  .pipe(dest);

});

gulp.task('buildCSSdev', ['buildCSS'], function () {
  livereload.changed();
});


gulp.task('default', function () {
  gulp.watch(fromRoot('assets/sass/**/*.scss'), ['buildCSSdev']);
});