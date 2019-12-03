const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const browserSync = require('browser-sync').create();

function pugg() {
    return gulp.src('./pugs/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('./'))
}

// compile scss to css
function style() {
    // location scss files
    return gulp.src('./scss/**/*.scss')
    //  pass to sass compiler
    .pipe(sass().on('error', sass.logError))
    // destination css file
    .pipe(gulp.dest('./css'))
    // stream sync all browsers
    //.pipe(browserSync.stream())
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
   
    gulp.watch('./scss/**/*.scss', style)
    gulp.watch('./*.html').on('change', browserSync.reload)
    gulp.watch('./css/*.css').on('change', browserSync.reload)
    gulp.watch('./pugs/**/*.pug', pugg)
    gulp.watch('./JS/*.js').on('change', browserSync.reload)
    //gulp.watch('./pugs/**/*.pug').on('change', browserSync.reload)
}

exports.style = style;
exports.watch = watch;
exports.pugg = pugg;
