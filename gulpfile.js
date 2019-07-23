'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass'); // переводит SASS в CSS
var plumber = require('gulp-plumber');
var concat = require("gulp-concat"); // Объединение файлов - конкатенация
var autoprefixer = require('gulp-autoprefixer'); // Проставлет вендорные префиксы в CSS для поддержки старых браузеров
var imagemin = require('gulp-imagemin'); // Сжатие изображение
var browserSync = require('browser-sync');
var del = require('del');
var cssNano = require('gulp-cssnano');
var rename = require('gulp-rename');

gulp.task('clean', function () {
    return del.sync('dist');
});

gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: 'src'
        }
    });
});

gulp.task('sass', function () {
    return gulp.src('src/sass/**/*.scss')
        .pipe(plumber())
        .pipe(concat('styles.scss'))
        .pipe(sass())
        .pipe(autoprefixer([
            'last 10 versions'
        ], {
            cascade: true
        }))
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('min-css', ['sass'], function () {
    return gulp.src('src/css/styles.css')
        .pipe(cssNano())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('src/css'));
});

gulp.task('watch', ['browser-sync'], function () {
    gulp.watch('src/sass/**/*.{scss,sass}', ['sass']);
    gulp.watch('src/js/**/*.js', browserSync.reload);
    gulp.watch('src/**/*.html', browserSync.reload);
})

gulp.task('build', ['clean', 'min-css'], function () {
    var buildCss = gulp.src([
            'src/css/styles.css',
            'src/css/styles.min.css'
        ])
        .pipe(gulp.dest('dist/css'));

    var buildImage = gulp.src("src/images/*.+(jpg|jpeg|png|gif)")
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            interlaced: true
        }))
        .pipe(gulp.dest("dist/images"))

    var buildJs = gulp.src('src/js/**/*')
        .pipe(gulp.dest('dist/js'));

    var buildHtml = gulp.src('src/*.html')
        .pipe(gulp.dest("dist"));


})