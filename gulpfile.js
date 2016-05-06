//借鉴学习https://segmentfault.com/a/1190000002580846
//在项目根目录引入gulp和uglify插件
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var rename = require('gulp-rename');
var clean = require('gulp-clean');
//合并压缩js
gulp.task('js', function () {
    return gulp.src('src/*.js')
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
        .pipe(concat('axe.js'))
        .pipe(gulp.dest('dist'))
        .pipe(uglify())
        .pipe(rename('axe.min.js'))
        .pipe(gulp.dest('dist'))
});

// 清理
gulp.task('clean', function () {
    return gulp.src(['dist'], {read: false})
        .pipe(clean());
});

// 预设任务
gulp.task('default', ['clean'], function () {
    gulp.start('js');
});