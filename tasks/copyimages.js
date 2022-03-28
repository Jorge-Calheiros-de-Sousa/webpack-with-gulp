const gulp = require("gulp");


function copyImages() {
    return gulp.src("assets/image/*.jpg")
        .pipe(gulp.dest("build/image/"))
}

gulp.task("copyImages", copyImages);

module.exports = copyImages;