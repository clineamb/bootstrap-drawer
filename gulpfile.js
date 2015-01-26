// --- bootstrap.offcanvas gulpfile
var VERSION = "0.9.0";

var gulp    = require('gulp'),
    less    = require('gulp-less'),
    uglify  = require('gulp-uglify'),
    rename  = require('gulp-rename')
;

gulp.task("build", ['less', 'less.min', 'js', 'js.min', 'example']);

gulp.task('example', function() {
    gulp.src([
        "./dist/js/drawer.js",
        "./bower_components/bootstrap/dist/css/bootstrap.min.css",
        "./bower_components/bootstrap/dist/js/bootstrap.min.js"
    ])  
        .pipe(gulp.dest("./example"))
    ;
});

gulp.task("less", function() {
    gulp.src("./less/bootstrap-drawer.less")
        .pipe(less({
            paths: ["./less"]
        }))
        .pipe(gulp.dest("./example"))
    ;

    gulp.src("./less/bootstrap-drawer.less")
        .pipe(less({
            paths: ["./less"],
            debug: true
        }))
        .pipe(gulp.dest("./dist/css"))
    ;
});

gulp.task("less.min", function() {
    gulp.src("./less/bootstrap-drawer.less")
        .pipe(less({
            paths: ["./less"],
            compress: true
        }))
        .pipe(rename("bootstrap-drawer.min.css"))
        .pipe(gulp.dest("./dist/css"))
    ;
});

gulp.task('js', function() {
    gulp.src("./js/*.js")  
        .pipe(gulp.dest("./dist/js"))
    ;

    gulp.src("./js/*.js")  
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