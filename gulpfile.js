var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

var src = {
    all_scss: 'scss/**/*.scss',
    scss: 'scss/main.scss',
    css: 'css',
    maps: 'css',
    html: '*.html'
};

var lib_paths = [
    'node_modules/bootstrap/scss'
];

// Browser sync
gulp.task('watch', ['sass'], function() {

    browserSync.init({
        browser: "google chrome",
        server: "./"
    });

    gulp.watch(src.all_scss, ['sass']);
    gulp.watch(src.css + '/*.css').on('change', reload);
    gulp.watch(src.html).on('change', reload);
});

// Compile sass into CSS
gulp.task('sass', function() {
    return gulp.src(src.scss)
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: lib_paths
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write(src.maps))
        .pipe(gulp.dest(src.css))
        .pipe(reload({ stream: true }));
});

gulp.task('default', ['sass', 'watch']);
gulp.task('styles', ['sass']);