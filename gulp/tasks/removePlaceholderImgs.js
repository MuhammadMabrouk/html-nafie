const { src, dest } = require("gulp");
const change = require("gulp-change");

function editPageContent(content) {
  const pattern = /(<a|<img)(.+)(\sdata-placeholder=".+?")(.*?>)/gm;
  return content.replace(pattern, "$1$2$4");
}

// remove placeholder images
const removePlaceholderImgs = () => {
  return src("dist/**/*.html")
    .pipe(change(editPageContent))
    .pipe(dest("dist"));
};

module.exports = {
  removePlaceholderImgs,
};
