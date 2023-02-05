const { src, dest } = require("gulp");
const change = require("gulp-change");

function editPageContent(content) {
  const pattern = /(<a|<img)(.+)(href="|src=")(.+?)(".+)(data-placeholder="(.+?)")(.*?>)/gm;
  return content.replace(pattern, "$1$2$3https://via.placeholder.com/$7$5$8");
}

// set placeholder images
const setPlaceholderImgs = () => {
  return src("dist/**/*.html")
    .pipe(change(editPageContent))
    .pipe(dest("dist"));
};

module.exports = {
  setPlaceholderImgs,
};
