// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function(cb) {
  gulp
    .src([
      './scss/main.scss',
      './scss/site/site.scss'
    ])
    .pipe(sass({
      style: 'compressed',
      errLogToConsole: false,
      onError: function(err) {
          return notify().write(err);
      }
    }))
    .pipe(gulp.dest('./dist/css/'));
  cb();
});

gulp.task(
  'default',
  gulp.series('sass', function(cb) {
    gulp.watch('./scss/**/*.scss', { ignoreInitial: false }, gulp.series('sass'));
    cb();
  })
);