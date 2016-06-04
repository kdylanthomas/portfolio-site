var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');

gulp.task('default', ['sass', 'watch']);

gulp.task('watch', function() {
	gulp.watch('sass/**/*.scss', ['sass']);
});

gulp.task('sass', function () {
  return gulp
    .src('sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'));
});