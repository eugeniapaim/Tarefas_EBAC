const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const watch = require('gulp-watch')
const imagemin = require('gulp-imagemin')
const uglify = require('gulp-uglify')

function compilaSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('./build/styles'));
}

function comprimeImagem() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))
}

function comprimeJs() {
    return gulp.src('./source/script/calculadora.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/script'))
}

exports.watch = function() {
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(compilaSass))
}
exports.sass = compilaSass;
exports.imagemin = comprimeImagem;
exports.uglify = comprimeJs;
