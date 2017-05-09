var gulp = require('gulp');
var rename = require("gulp-rename");
var cssmin = require('gulp-cssmin');
var sass = require('gulp-sass');

gulp.task('sass', function(){
  gulp.src("src/gravitons.scss")
    .pipe(sass())
    .pipe(rename("gravitons.css"))
    .pipe(gulp.dest('dist'));

    gulp.src("src/gravitons.scss")
      .pipe(sass())
      .pipe(cssmin())
      .pipe(rename("gravitons.min.css"))
      .pipe(gulp.dest('dist'));
})


gulp.task('default', ['sass']);
