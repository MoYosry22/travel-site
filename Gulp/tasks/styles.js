 var gulp = require('gulp'),
 postcss = require('gulp-postcss'),
 autoprefixer = require('autoprefixer'),
 cssvars = require('postcss-simple-vars'),
 nestedcss = require('postcss-nested'),
 cssimport = require('postcss-import');

gulp.task('styles', function(){
    return	gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssimport,cssvars,nestedcss,autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'))
        
    });