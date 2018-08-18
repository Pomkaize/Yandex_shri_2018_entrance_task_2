let gulp = require('gulp');
let changed = require('gulp-changed');
let pug = require('gulp-pug');
let scss = require('gulp-ruby-sass');
let concat = require('gulp-concat');
let rename = require('gulp-rename');
let browserSync = require('browser-sync').create();

/* project paths */
let paths = {
        styles: {
            src: ['src/global/styles/temp/index.scss', 'src/components/*/*.scss'],
            tempDir: 'src/global/styles/temp',
            dir: 'build/',
        },
        scripts: {
            src: ['src/global/scripts/index.js','src/components/*/*.js'],
            dir: 'build/'
        },
        index: {
            src: ['src/global/index.pug','src/components/*/*.pug'],
            dir: 'build/'
        }
};

/*  styles tasks */

/* yes, combine-scss task is so ugly, but it is required for combine sass, concat don't work with sass files,
   without it we have to pass all imports (variables, colors....) in each component */
gulp.task('combine-scss', function combineScss() {
    gulp.src(paths.styles.src)
        .pipe(changed(paths.styles.dir))
        .pipe(rename((path)=>{
            path.extname = ".css";
        }))
        .pipe(concat('styles.css'))
        .pipe(rename((path)=>{
            path.extname = ".scss";
        }))
        .pipe(gulp.dest(paths.styles.tempDir));

    return scss(paths.styles.tempDir + '/styles.scss')
           .pipe(gulp.dest(paths.styles.dir))
});


gulp.task('styles', ['combine-scss']);

gulp.task('styles-watch', ['styles'], function (done) {
    browserSync.reload();
    done();
});

/* html tasks */

gulp.task('index', function buildHTML() {
    return gulp.src(paths.index.src[0])
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest(paths.index.dir))
});

gulp.task('index-watch', ['index'], function (done) {
    browserSync.reload();
    done();
});

/* scripts tasks */
gulp.task('scripts', function scripts() {
    return gulp.src(paths.scripts.src)
        .pipe(changed(paths.scripts.dir))
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(paths.scripts.dir))
});

gulp.task('scripts-watch', ['scripts'], function (done) {
    browserSync.reload();
    done();
});


gulp.task('watch', ['scripts','styles','index'], function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./build/"
        }
    });
    gulp.watch(paths.scripts.src, ['scripts-watch']);
    gulp.watch(paths.styles.src, ['styles-watch']);
    gulp.watch(paths.index.src, ['index-watch']);
});