'use strict';
 
const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const sassGlob = require('gulp-sass-glob');
const	spritesmith = require('gulp.spritesmith-multi');
const	del = require('del');
const merge = require('merge-stream')

sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sassGlob())
    .pipe(sourcemaps.init())
    .pipe(sass(
      // {
      //   errLogToConsole: true,
      //   outputStyle: 'compressed' // nested, expanded, compact, or compressed.
      // }
    ).on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('autoprefixer', () => {
  const autoprefixer = require('autoprefixer')
  const postcss = require('gulp-postcss')
  const sourcemaps = require('gulp-sourcemaps')
 
  return gulp.src('./dist/css/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dist/css/'))
})

// Clean Sprite
gulp.task('clean-sprite', function() {
	return del('./dist/img/sprite');
});

// 자동 스프라이트
gulp.task('auto-sprite', function() {
	var opts = {
		spritesmith: function (options, sprite, icons){
			options.imgPath =  `../img/sprite/${options.imgName}`;
			options.cssName = `_${sprite}-sprite.scss`;
			options.cssTemplate = null;
			options.cssSpritesheetName = sprite;
			options.padding = 10;
			options.cssVarMap =  function(sp) {
				sp.name = `${sprite}-${sp.name}`;
			};
 
			return options;
		}
	};
	var spriteData = gulp.src('./src/img-sprite/**/*.png').pipe(spritesmith(opts)).on('error', function (err) {
		console.log(err)
    });
	
	var imgStream = spriteData.img.pipe(gulp.dest('./dist/img/sprite'));
	var cssStream = spriteData.css.pipe(gulp.dest('./src/scss/vendors'));
 
	return merge(imgStream, cssStream);
});

// 스프라이트 and SASS
gulp.task('sprite-and-sass', gulp.series('clean-sprite', 'auto-sprite', 'sass'));

gulp.task('watch:watch', function(){
  gulp.watch('./src/scss/**/*.scss', gulp.series('sass', 'autoprefixer'));
  gulp.watch('./src/img-sprites/**/*', gulp.series('sprite-and-sass'));
});

gulp.task('default', gulp.series('sass', 'sprite-and-sass', 'autoprefixer', 'watch:watch'));