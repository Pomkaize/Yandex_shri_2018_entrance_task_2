let browserSync = require('browser-sync').create();
let gulp = require('gulp');
let changed = require('gulp-changed');
let pug = require('gulp-pug');
let scss = require('gulp-sass');
let concat = require('gulp-concat');
let plumber = require('gulp-plumber');
let notifier = require('node-notifier');
let order = require("gulp-order");
let rename = require("gulp-rename");

let plumberNotifyConfig = { errorHandler: function(err) {
        console.log(err);
        notifier.notify({
            title: "Gulp error in " + err.plugin,
            sound: false,
            message:  err.toString()
        });
    }};

/* project paths */
let paths = {
        styles: {
            src: ['src/global/styles/*/*.scss', 'src/global/styles/index.scss', 'src/components/*/*/*.scss',],
            tempDir: 'src/global/styles/temp',
            dir: 'build/',
        },
        scripts: {
            src: ['src/global/scripts/vendor/*.js','src/global/scripts/index.js','src/components/*/*/*.js'],
            dir: 'build/'
        },
        index: {
            src: ['src/global/index.pug','src/components/**/*.pug', './config.js'],
            dir: 'build/'
        }
};

/*  styles tasks */
/* yes, combine-scss task is so ugly, but it is required for combine sass, concat for mixins
 `1 work with scss files,
   without it we have to pass all imports (variables, colors....) in each component */
gulp.task('combine-scss', function combineScss() {
   return gulp.src(paths.styles.src)
       .pipe(plumber(plumberNotifyConfig))
       .pipe(rename((path)=>{
           path.extname = ".css";
       }))
       .pipe(concat('styles.css'))
       .pipe(rename((path)=>{
           path.extname = ".scss";
       }))
        .pipe(scss())
        .pipe(gulp.dest(paths.styles.dir));
});


gulp.task('styles', ['combine-scss']);

gulp.task('styles-watch', ['styles'], function (done) {
    browserSync.reload();
    done();
});

/* html tasks */

gulp.task('index', function buildHTML() {
    delete require.cache[require.resolve('./config.js')];
    let locals =  require('./config.js');
    return gulp.src(paths.index.src[0])
        .pipe(plumber(plumberNotifyConfig))
        .pipe(pug({
            self: true,
            locals: locals,
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
        .pipe(plumber(plumberNotifyConfig))
        .pipe(changed(paths.scripts.dir))
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(paths.scripts.dir))
});

gulp.task('scripts-watch', ['scripts'], function (done) {
    browserSync.reload();
    done();
});


/* general watch task */
gulp.task('watch', ['scripts','styles','index'], function () {

    browserSync.init({
        server: {
            baseDir: "./build/"
        }
    });

    gulp.watch(paths.scripts.src, ['scripts-watch']);
    gulp.watch(paths.styles.src, ['styles-watch']);
    gulp.watch(paths.index.src, ['index-watch']);
});