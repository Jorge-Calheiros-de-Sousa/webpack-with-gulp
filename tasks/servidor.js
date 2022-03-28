const webserver = require("gulp-webserver");
const watch = require("gulp-watch");
const gulp = require("gulp");
const { series } = gulp;

function servidor() {
    return gulp.src("build/")
        .pipe(webserver({
            port: 8000,
            livereload: true,
            directoryListing: true,
            open: true,
            fallback: "pages/index.html"
        }));
};

function monitorar(calllback) {
    watch("pages/*.html", () => series("copyHtml")());
    watch("assets/js/*.js", () => series("tranformJs")());
    watch("assets/sass/*.scss", () => series("tranformCss")());
    watch("assets/image/*.jpg", () => series("copyImages")());

    return calllback();
}

module.exports = { servidor, monitorar };