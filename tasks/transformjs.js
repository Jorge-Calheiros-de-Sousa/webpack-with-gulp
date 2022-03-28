const gulp = require("gulp");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");


function tranformJs() {
    return gulp.src("assets/js/index.js")
        .pipe(uglify())
        .pipe(concat("js.min.js"))
        .pipe(gulp.dest("build/js/"));
}
gulp.task("tranformJs", tranformJs);
module.exports = tranformJs;