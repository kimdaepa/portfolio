'user strict';

const gulp = require('gulp');
const del = require('del');
const htmlhint = require("gulp-htmlhint");
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const jslint = require('gulp-jslint');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

//----------------------------------------
// clear compile file
//----------------------------------------
gulp.task('clean', function() {
    return del(['src/public/css/']).then( function(paths) {
        console.log('Deleted files and folders:\n', paths.join('\n'));
    });
});

//----------------------------------------
// sass compile task
//----------------------------------------
gulp.task('scss', function () {
    console.log('\n =========== SCSS compfile =========== \n');
    return gulp.src('src/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('src/public/css/'))
        .pipe(reload({ stream: true }));
});

//----------------------------------------
// markup task (csslint/htmlhint/jslint)
//----------------------------------------
gulp.task('html', function() {
    console.log('\n =========== HTML HINT compfile =========== \n');
    return gulp.src('src/public/**/*.html')
        .pipe(htmlhint('htmlhintrc.json'))
        .pipe(htmlhint.reporter('htmlhint-stylish'));
});

//----------------------------------------
// jslint
//----------------------------------------
gulp.task('jslint', function () {
    return gulp.src(['src/js/**/*.js'])
    .pipe(jslint({
        node: true,
        es6: true,
        white: true
    }))
    .pipe(jslint.reporter('default', true));
});

// Reload all Browsers
gulp.task('bs-reload', function () {
    browserSync.reload();
});

//----------------------------------------
// brower-sync web server
//----------------------------------------
gulp.task('server', function () {
  console.log('\n =========== brower-sync End : Ctrl + C =========== \n');
  browserSync.init({
    server:{
     baseDir: "src/public",
     directory: true
    },
    browser: "chrome"
 });
});

gulp.task('default', ['scss', 'server'], function() {
    gulp.watch('src/scss/**/*.scss', ['scss']);
    gulp.watch("src/public/*.html", ['bs-reload']);
});
