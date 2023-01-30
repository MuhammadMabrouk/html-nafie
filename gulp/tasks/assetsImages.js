const { src, dest } = require("gulp");
const changed = require("gulp-changed");
const image = require("gulp-image");
const connect = require("gulp-connect");

// images files
const srcPath = "src/assets/images/**/*.*";
const destPath = "dist/assets/images";
const watchPath = srcPath;

const assetsImages = {
  assetsImages: () => {
    return src(srcPath)
      .pipe(changed(destPath))
      .pipe(image())
      .pipe(dest(destPath))
      .pipe(connect.reload());
  },
  watchPath,
};

module.exports = {
  assetsImages,
};
