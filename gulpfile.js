var gulp = require('gulp'),
    gulpLess = require('gulp-less'),
    notify = require('gulp-notify'),
    minifyCss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    path = require('path'),
    autoPrefix = require('gulp-autoprefixer');

gulp.task('default',['watch']);

gulp.task('less',function () {
    return gulp
        .src([
            'public/css/[^(_)]*.less',
            'public/css/[^(_)]**/[^(_)]*.less'
        ])
        .pipe(gulpLess())
        .pipe(autoPrefix('last 2 version','ie8','ie9'))
        .pipe(minifyCss())
        .pipe(gulp.dest('./assets/css/'))
        .pipe(notify({
            message: 'less task completed'
        }));
});

gulp.task('watch',function () {
   gulp.watch(['./public/css/**/*.less'],['less']);
});
