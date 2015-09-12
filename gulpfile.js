// --- bootstrap.offcanvas gulpfile
var gulp        = require('gulp'),
    less        = require('gulp-less'),
    uglify      = require('gulp-uglify'),
    rename      = require('gulp-rename'),
    markdown    = require('gulp-markdown'),
    through2    = require('through2'),
    fs          = require('fs')
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

gulp.task('docs.less', function() {
    gulp.src("./less/drawer-docs.less")
        .pipe(less({compress: true}))
        .pipe(gulp.dest("./example"))
    ;
});

gulp.task('docs.md', function() {
    gulp.src("./docs/*.md")
        .pipe(markdown())
        .pipe(gulp.dest("./docs/html"))
});

gulp.task('docs', ['docs.less', 'docs.md'], function() {
    var header = fs.readFileSync("./docs/_header.htm")
    ,   footer = fs.readFileSync("./docs/_footer.htm")
    ;

    gulp.src("./docs/html/*.html")
        .pipe(through2.obj(function(file, enc, cb){

            if (file.isNull()) {
              // return empty file
              cb(null);
            }

            if (file.isStream()) {
              return callback(new gutil.PluginError(PLUGIN_NAME, 'No stream support.'));
            }

            file.contents = Buffer.concat([
                header, file.contents, footer
            ]);

            cb(null, file);
        }))
        .pipe(gulp.dest("./"))
    ;
});