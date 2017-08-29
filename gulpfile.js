var gulp         = require('gulp'),
    gutil        = require('gulp-util'),
    less         = require('gulp-less'),
    jshint       = require('gulp-jshint'),
    sourcemaps   = require('gulp-sourcemaps'),
    fileinclude  = require('gulp-file-include'),
    connect      = require('gulp-connect'),
    plumber      = require('gulp-plumber'),
    colors       = require('colors');

// Gulp Less Task 
gulp.task('less', function() {
    gulp.src(['./less/**/*.less'])
        .pipe(less())
        .pipe(gulp.dest('./css'))
        .pipe(connect.reload());
})

// Gulp Fileinclude Task 
gulp.task('fileinclude', function() {
    gulp.src(['./templates/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./'))
    .pipe(connect.reload());
});

gulp.task('jshint', function() {
    return gulp.src('js/main.js')
      .pipe(plumber(function (error){
            gutil.beep();
            gutil.log(gutil.colors.red('error in ' + error.fileName + '\n' + 'line - ' + error.lineNumber));
            this.emit('end');
        }))
      .pipe(jshint())
      .pipe(jshint.reporter('default'));
});

//Server
gulp.task('server', function() {
  connect.server({
    livereload: true,
    port: 80
  });
});

// Gulp watch 
gulp.task('watch', function(){
  gulp.watch('./templates/**/*.html', ['fileinclude']);
  gulp.watch('./less/**/*.less', ['less']);
  gulp.watch('js/main.js', ['jshint']);
});

gulp.task('default', ['fileinclude', 'less', 'jshint', 'server', 'watch']);

gulp.task('prototype', ['fileinclude', 'less']);