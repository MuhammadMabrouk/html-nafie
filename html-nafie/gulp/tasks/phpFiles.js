const { src, dest } = require("gulp");
const changed = require("gulp-changed");
const connect = require("gulp-connect");

// php files
const phpFiles = () => {
  const srcPath = "src/*.php";
  const destPath = "dist";

  return src(srcPath)
    .pipe(changed(destPath))
    .pipe(dest(destPath))
    .pipe(connect.reload());
};

module.exports = {
  phpFiles,
};
