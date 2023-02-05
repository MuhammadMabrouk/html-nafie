const { src, dest } = require("gulp");
const cached = require("gulp-cached");
const dependents = require("gulp-dependents");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const connect = require("gulp-connect");

// css libraries
const srcPath = "src/styles/libraries.scss";
const destPath = "dist/styles";
const watchPath = srcPath;

const cssLibraries = {
  cssLibraries: () => {
    return src(srcPath)
      .pipe(cached("cssLibrariesCache"))
      .pipe(dependents())
      .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
      .pipe(cleanCSS({ compatibility: "ie10" }))
      .pipe(rename("libraries.min.css"))
      .pipe(dest(destPath))
      .pipe(connect.reload());
  },
  watchPath,
};

module.exports = {
  cssLibraries,
};
