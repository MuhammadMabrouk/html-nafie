const { src, dest } = require("gulp");
const fileInclude = require("gulp-file-include");
const rename = require("gulp-rename");
const i18n = require("gulp-html-i18n");
const beautify = require("gulp-jsbeautifier");
const connect = require("gulp-connect");

// html files
const srcPath = "src/pages/**/*.html";
const destPath = "dist";
const watchPath = [
  srcPath,
  "src/schema/*.html",
  "src/components/**/*.html",
  "src/assets/i18n/**/*.json",
];

const htmlFiles = {
  htmlFiles: () => {
    return src(srcPath)
      .pipe(fileInclude({ basepath: "src" }))
      .pipe(rename({ dirname: "" }))
      .pipe(
        i18n({
          langDir: "./src/assets/i18n",
          filenameI18n: true,
        })
      )
      .pipe(beautify({ indent_size: 2 }))
      .pipe(dest(destPath))
      .pipe(connect.reload());
  },
  watchPath,
};

module.exports = {
  htmlFiles,
};
