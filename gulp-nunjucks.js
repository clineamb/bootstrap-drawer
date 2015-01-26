"use strict";

var nunjucks = require('nunjucks')
,   through  = require('through2')
,   gutil    = require('gulp-util')
,   path     = require('path')
;

module.exports = function(options) {
    var stream;

    stream = through.obj(function(file, enc, callback) {
        var template;

        if(file.isNull() || file.isStream()) {
            // do nothing
            return callback(null, file);
        }

        template  = path.join(options.path, file.relative);

        if(file.isBuffer()) {
            nunjucks.render(template, function(err, html) {
                file.contents = new Buffer(html);
                return callback(null, file);
            });
        }
    });

    return stream;
};
