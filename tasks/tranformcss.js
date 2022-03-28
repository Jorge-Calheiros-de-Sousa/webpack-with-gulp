const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const uglifyCss = require("gulp-uglifycss");
const concat = require("gulp-concat");


function transformCss() {
    return gulp.src("assets/sass/index.scss")
        .pipe(sass())
        .pipe(uglifyCss({
            uglifyComments: true
        }))
        .pipe(concat("style.min.css"))
        .pipe(gulp.dest("build/css/"));
}

gulp.task("tranformCss", transformCss);

module.exports = transformCss;