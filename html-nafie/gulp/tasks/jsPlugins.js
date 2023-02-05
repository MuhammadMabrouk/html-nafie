const { src, dest } = require("gulp");
const fs = require("fs");
const concat = require("gulp-concat");
const terser = require("gulp-terser");
const connect = require("gulp-connect");

// js plugins
const plugins = JSON.parse(fs.readFileSync("src/scripts/jsPlugins.json"));
const srcPath = Object.values(plugins);
const destPath = "dist/scripts";
const watchPath = "src/scripts/jsPlugins.json";

const jsPlugins = {
  jsPlugins: () => {
    return src(srcPath)
      .pipe(concat("plugins.min.js"))
      .pipe(terser())
      .pipe(dest(destPath))
      .pipe(connect.reload());
  },
  watchPath,
};

module.exports = {
  jsPlugins,
};
