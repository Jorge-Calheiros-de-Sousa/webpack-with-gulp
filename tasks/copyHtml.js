const gulp = require("gulp");


function copyHtml() {
    return gulp.src("assets/pages/index.html")
        .pipe(gulp.dest("build/pages/"));
}
gulp.task("copyHtml", copyHtml);

module.exports = copyHtml;