const { src } = require("gulp");
const change = require("gulp-change");
const del = require("del");

// get all images from all files
const imgsPaths = [];
function getImgsPaths(content) {
  const pattern = /(<a|<img)(.+)(href=|src=)('|")(.+?)(".+)(data-placeholder="(.+?)")(.*?>)/gm;

  content.match(pattern)?.forEach(item => {
    imgsPaths.push(item.replace(pattern, "dist/$5"));
  });
}

// delete unlicensed images
const deleteUnlicensedImgs = () => {
  return src("dist/**/*.html")
    .pipe(change(getImgsPaths))
    .on("end", () => del([...new Set(imgsPaths)]));
};

module.exports = {
  deleteUnlicensedImgs,
};
