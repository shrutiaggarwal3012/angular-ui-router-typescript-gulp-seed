/**
 * Created by shruti.aggarwal on 23-08-2015.
 */
var gulp = require('gulp'),
    tsc = require('gulp-typescript'),
    tslint = require('gulp-tslint'),
    del = require('del'),
    Config = require('./gulpfile.config'),
    GulpSequence = require('gulp-sequence');

var config = new Config();

const testReporter = function (output, file, options) {
    // file is a reference to the vinyl File object
    console.log("Found " + output.length + " errors in " + file.path);
    // options is a reference to the reporter options, e.g. options.emitError
};

gulp.task('lint-ts', function () {
    return gulp.src(config.TS_FILES).pipe(tslint())
        .pipe(tslint.report(testReporter));
});

gulp.task('compile-ts', function () {
    var tsResult =
        gulp
            .src(config.TS_FILES)
            .pipe(tsc({outDir: config.JS_ROOT_PATH, module: 'amd'}))

    return tsResult.pipe(gulp.dest(config.JS_ROOT_PATH));
});

gulp.task('copy-html', function () {
    gulp.src('./ts/**/*.html')
        .pipe(gulp.dest('./js/'));
});

gulp.task('clean', function (cb) {
    var typeScriptGenFiles = [
        config.JS_ROOT_PATH,
        config.TS_ROOT_PATH + '**/*.js',
        config.TS_ROOT_PATH + '**/*.js.map'
    ];
    // delete the files
    del(typeScriptGenFiles, cb);
    del('./build');
    del('./js');
});

gulp.task('production', function() {
    gulp.src([ './js/**/*', './bower_components/**/*',
        './assets/**/*', './WEB-INF/*', './index.jsp' ], {base: '.'})
        .pipe(gulp.dest('./build'));
});

/*gulp.task('build', function() {
 gulp.src('./js/!**', './assets')
 .pipe(gulp.dest('./build'));
 });*/

gulp.task('watch', function () {
    gulp.watch(config.TS_FILES,['lint-ts']);
    gulp.watch(config.TS_FILES,['compile-ts']);
    gulp.watch('./ts/**/*.html',['copy-html']);
});
gulp.task('default', GulpSequence('watch', 'clean', 'lint-ts', 'copy-html', 'compile-ts'));
gulp.task('build', GulpSequence('clean', 'copy-html', 'compile-ts', 'production'));
