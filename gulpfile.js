// --- bootstrap.offcanvas gulpfile

var gulp    = require('gulp'),
    less    = require('gulp-less'),
    uglify  = require('gulp-uglify'),
    rename  = require('gulp-rename')
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