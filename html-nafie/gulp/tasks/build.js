const { parallel, series } = require("gulp");

// tasks
const { htmlFiles }             = require("./htmlFiles");
const { cssMain }               = require("./cssMain");
const { cssLibraries }          = require("./cssLibraries");
const { jsMain }                = require("./jsMain");
const { jsPlugins }             = require("./jsPlugins");
const { assetsFiles }           = require("./assetsFiles");
const { assetsImages }          = require("./assetsImages");
const { assetsFontAwesome }     = require("./assetsFontAwesome");
const { assetsNpm }             = require("./assetsNpm");
const { phpFiles }              = require("./phpFiles");
const { removePlaceholderImgs } = require("./removePlaceholderImgs");
const { deleteUnlicensedImgs }  = require("./deleteUnlicensedImgs");
const { setPlaceholderImgs }    = require("./setPlaceholderImgs");
const { cleanup }               = require("./cleanup");
const { zipper }                = require("./zipper");

// common tasks
const commonTasks = parallel(
  htmlFiles.htmlFiles,
  cssMain.cssMain,
  cssLibraries.cssLibraries,
  jsMain.jsMain,
  jsPlugins.jsPlugins,
  assetsFiles.assetsFiles,
  assetsImages.assetsImages,
  assetsFontAwesome.assetsFontAwesome,
  assetsNpm.assetsNpm,
  phpFiles
);

// build all files to dist folder
const build = series(
  cleanup,
  commonTasks,
  removePlaceholderImgs,
  zipper
);

// build all files for themeforest to dist folder
const themeforest_build = series(
  cleanup,
  commonTasks,
  deleteUnlicensedImgs,
  setPlaceholderImgs,
  zipper
);

module.exports = {
  build,
  themeforest_build,
};
