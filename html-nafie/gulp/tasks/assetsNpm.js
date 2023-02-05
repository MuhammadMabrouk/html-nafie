const { src, dest } = require("gulp");
const fs = require("fs");
const mergeStream = require("merge-stream");
const connect = require("gulp-connect");

// npm assets
const assetsPaths = JSON.parse(fs.readFileSync("src/assets/npmAssets.json"));
const stylesSrcPath = Object.values(assetsPaths.styles);
const scriptsSrcPath = Object.values(assetsPaths.scripts);
const stylesDestPath = "dist/styles";
const scriptsDestPath = "dist/scripts";
const watchPath = "src/assets/npmAssets.json";

const assetsNpm = {
  assetsNpm: async () => {
    const assets = [];

    // styles assets
    stylesSrcPath.length &&
      assets.push(src(stylesSrcPath).pipe(dest(stylesDestPath)));

    // scripts assets
    scriptsSrcPath.length &&
      assets.push(src(scriptsSrcPath).pipe(dest(scriptsDestPath)));

    return mergeStream(...assets).pipe(connect.reload());
  },
  watchPath,
};

module.exports = {
  assetsNpm,
};
