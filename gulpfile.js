"use strict";

// more info:
// https://www.npmjs.com/package/gulp-iconfont
// https://github.com/backflip/gulp-iconfont-css

var config       = require('./config.json');
var gulp         = require('gulp');

var iconfont     = require('gulp-iconfont');
var iconfontCss  = require('gulp-iconfont-css');

// var runTimestamp = Math.round(Date.now()/1000);

gulp.task('default', function(){
  return gulp
    .src([ config.src + '/*.svg'])
      .pipe(iconfontCss({
        fontName: config.fontName,
        path: config.cssTemplate,
        targetPath: config.cssDest,
        fontPath: config.cssFontPath
      }))
    .pipe(iconfont({
      fontName: config.fontName, // required
      //prependUnicode: true, // recommended option
      formats: config.fontFormats, // default, 'woff2' and 'svg' are available
      normalize: true,
      // timestamp: runTimestamp, // recommended to get consistent builds when watching files
    }))
    // .on('glyphs', function(glyphs, options) {
    //   // CSS templating, e.g.
    //   console.log(glyphs, options);
    // })
    .pipe(gulp.dest(config.dest));
});
