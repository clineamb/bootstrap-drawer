// --- bootstrap.offcanvas gulpfile
var VERSION = "0.9.0";

var gulp        = require('gulp'),
    less        = require('gulp-less'),
    uglify      = require('gulp-uglify'),
    rename      = require('gulp-rename'),
    zip         = require('gulp-zip'),
    nunjucks    = require('./gulp-nunjucks.js')
;

gulp.task("build", ['less', 'less.min', 'js', 'js.min', 'example']);

gulp.task('example', function() {
    gulp.src([
        "./dist/js/offcanvas.js",
        "./bower_components/bootstrap/dist/css/bootstrap.min.css",
        "./bower_components/bootstrap/dist/js/bootstrap.min.js"
    ])  
        .pipe(gulp.dest("./example"))
    ;
});

gulp.task("less", function() {
    gulp.src("./less/bootstrap.offcanvas.less")
        .pipe(less({
            paths: ["./less"]
        }))
        .pipe(gulp.dest("./example"))
    ;

    gulp.src("./less/bootstrap.offcanvas.less")
        .pipe(less({
            paths: ["./less"],
            debug: true
        }))
        .pipe(rename({basename: "offcanvas"}))
        .pipe(gulp.dest("./dist/css"))
    ;
});

gulp.task("less.min", function() {
    gulp.src("./less/bootstrap.offcanvas.less")
        .pipe(less({
            paths: ["./less"],
            compress: true
        }))
        .pipe(rename("offcanvas.min.css"))
        .pipe(gulp.dest("./dist/css"))
    ;
});

gulp.task('js', function() {
    gulp.src("./js/*.js", {read:false})  
        .pipe(gulp.dest("./dist/js"))
    ;

    gulp.src("./js/*.js", {read:false})  
        .pipe(gulp.dest("./example"))
    ;
});

gulp.task('js.min', function() {
    gulp.src("./js/*.js")
        .pipe(uglify())
        .pipe(rename({extname: ".min.js"}))
        .pipe(gulp.dest("./dist/js"))
    ;
});

gulp.task('docs', function() {
    gulp.src("./docs-tpls/*.nunjucks")
        .pipe(nunjucks({
            path: "./docs-tpls"
        }))
        .pipe(rename({extname: ".html"}))
        .pipe(gulp.dest("./docs"))
    ;
});

gulp.task('zip', function() {
    // gulp.src(["!./node_modules", "!./bower_components", "./**/*"])
    //     .pipe(zip('bootstrap-offcanvas-'+VERSION+".zip"))
    //     .pipe(gulp.dest("./dist"))
    // ;
});