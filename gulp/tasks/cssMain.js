const { src, dest } = require("gulp");
const cached = require("gulp-cached");
const dependents = require("gulp-dependents");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const beautify = require("gulp-jsbeautifier");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const mergeStream = require("merge-stream");
const connect = require("gulp-connect");

// main css
const srcPath = [
  "src/styles/**/*.scss",
  "!src/styles/_font-awesome.scss",
  "!src/styles/libraries.scss"
];
const destPath = "dist/styles";
const watchPath = srcPath;

// common steps between development & production
function CommonSteps(mode) {
  return src(srcPath)
    .pipe(cached(`mainCss_${mode}_cache`))
    .pipe(dependents())
    .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
    .pipe(autoprefixer("last 2 versions"));
}

const cssMain = {
  cssMain: () => {
    // development version
    const dev_mainCss = new CommonSteps("dev")
      .pipe(beautify({ indent_size: 2 }))
      .pipe(rename("main.css"));

    // production version
    const prod_mainCss = new CommonSteps("prod")
      .pipe(cleanCSS({ compatibility: "ie10" }))
      .pipe(rename("main.min.css"));

    return mergeStream(dev_mainCss, prod_mainCss)
      .pipe(dest(destPath))
      .pipe(connect.reload());
  },
  watchPath,
};

module.exports = {
  cssMain,
};
