'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass'); // переводит SASS в CSS
var plumber = require('gulp-plumber');
var concat = require("gulp-concat"); // Объединение файлов - конкатенация
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer'); // Проставлет вендорные префиксы в CSS для поддержки старых браузеров
var imagemin = require('gulp-imagemin'); // Сжатие изображение
var server = require('browser-sync').create();


// Копирование файлов HTML в папку dist
gulp.task("html", function () {
    return gulp.src("src/*.html")
        .pipe(gulp.dest("dist"));
});


gulp.task('sass', function () {
    return gulp.src('src/sass/*.scss')
        .pipe(plumber())
        .pipe(concat('styles.scss'))
        .pipe(sass())
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(gulp.dest('dist/css'))
        .pipe(server.stream());
});

// Сжимаем картинки
gulp.task('imgs', function () {
    return gulp.src("src/images/*.+(jpg|jpeg|png|gif)")
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            interlaced: true
        }))
        .pipe(gulp.dest("dist/images"))
});


gulp.task('serve', ['style'], function () {
    server.init({
        server: '.',
        notify: false,
        open: true,
        cors: true,
        ui: false
    });

    gulp.watch('src/sass/**/*.{scss,sass}', ['sass']);
    gulp.watch('*.html').on('change', server.reload);
});