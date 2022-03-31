const gulp = require("gulp");


function solidFonts() {
    return gulp.src("node_modules/@fortawesome/fontawesome-free/js/solid.min.js")
        .pipe(gulp.dest("build/fonts/"))
}

function brandsFonts() {
    return gulp.src("node_modules/@fortawesome/fontawesome-free/js/brands.min.js")
        .pipe(gulp.dest("build/fonts/"))
}

function fontAwesome() {
    return gulp.src("node_modules/@fortawesome/fontawesome-free/js/fontawesome.min.js")
        .pipe(gulp.dest("build/fonts"));
}

module.exports = { solidFonts, brandsFonts, fontAwesome };