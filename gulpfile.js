const gulp = require("gulp");
const { series } = gulp;
const transformCss = require("./tasks/tranformcss");
const tranformJs = require("./tasks/transformjs");
const copyImage = require("./tasks/copyimages");
const { servidor, monitorar } = require("./tasks/servidor");
const copyHtml = require("./tasks/copyHtml");

module.exports.default = series(transformCss, tranformJs, copyImage, copyHtml, servidor, monitorar);


