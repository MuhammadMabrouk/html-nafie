const { src, dest } = require("gulp");
const rename = require("gulp-rename");
const connect = require("gulp-connect");

// main js
const srcPath = [
  "src/scripts/**/*.js",
  "src/components/**/*.js",
  "src/pages/**/*.js",
];
const destPath = "dist/scripts";
const watchPath = srcPath;

const jsMain = {
  jsMain: () => {
    return src(srcPath, { base: "./src/" })
      .pipe(
        rename(path => {
          const parentDir = path.dirname.split("\\")[0];
          path.dirname = parentDir === "scripts" ? "" : parentDir;
        })
      )
      .pipe(dest(destPath))
      .pipe(connect.reload());
  },
  watchPath,
};

module.exports = {
  jsMain,
};
