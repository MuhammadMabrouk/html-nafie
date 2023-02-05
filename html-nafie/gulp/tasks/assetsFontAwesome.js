const { src, dest } = require("gulp");
const changed = require("gulp-changed");
const connect = require("gulp-connect");

// font-awesome fonts
const srcPath = "node_modules/@fortawesome/fontawesome-free/webfonts/*";
const destPath = "dist/assets/webfonts";
const watchPath = srcPath;

const assetsFontAwesome = {
  assetsFontAwesome: () => {
    return src(srcPath)
      .pipe(changed(destPath))
      .pipe(dest(destPath))
      .pipe(connect.reload());
  },
  watchPath,
};

module.exports = {
  assetsFontAwesome,
};
