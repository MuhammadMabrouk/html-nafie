const { src, dest } = require("gulp");
const zip = require("gulp-zip");
const fs = require("fs");
const packageJson = JSON.parse(fs.readFileSync("./package.json"));

// template zipper
const zipper = () => {
  return src("dist/**/*.*")
    .pipe(zip(`${packageJson.name}.zip`))
    .pipe(dest("dist"));
};

module.exports = {
  zipper,
};
