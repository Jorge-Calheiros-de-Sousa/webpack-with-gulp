const gulp = require("gulp");
const { series, parallel } = gulp;
const transformCss = require("./tasks/tranformcss");
const tranformJs = require("./tasks/transformjs");
const copyImage = require("./tasks/copyimages");
const { servidor, monitorar } = require("./tasks/servidor");
const copyHtml = require("./tasks/copyHtml");
const { solidFonts, brandsFonts, fontAwesome } = require("./tasks/fontawesome");

module.exports.default = series(
    parallel(transformCss, tranformJs, copyImage, copyHtml, parallel(solidFonts, brandsFonts, fontAwesome)),
    servidor, monitorar);


