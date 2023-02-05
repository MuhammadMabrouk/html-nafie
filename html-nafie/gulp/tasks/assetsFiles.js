const { src, dest } = require("gulp");
const changed = require("gulp-changed");
const connect = require("gulp-connect");

// assets files
const srcPath = [
  "src/assets/**/*",
  "!src/assets/images{,/**}",
  "!src/assets/i18n{,/**}",
  "!src/assets/npmAssets.json",
];
const destPath = "dist/assets";
const watchPath = srcPath;

const assetsFiles = {
  assetsFiles: () => {
    return src(srcPath, { allowEmpty: true })
      .pipe(changed(destPath))
      .pipe(dest(destPath))
      .pipe(connect.reload());
  },
  watchPath,
};

module.exports = {
  assetsFiles,
};
