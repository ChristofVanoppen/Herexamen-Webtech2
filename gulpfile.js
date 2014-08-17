var gulp = require('gulp'),
minifyCSS = require('gulp-minify-css');

gulp.task('minify-css', function() {
  // place code for your default task here
  gulp.src('./public/css/*.css')
 .pipe(minifyCSS()) 
 .pipe(gulp.dest('./build/css/'))
});
gulp.task('default', ['minify-css']);