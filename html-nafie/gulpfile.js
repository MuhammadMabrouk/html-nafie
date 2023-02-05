// parallel() to run them at concurrency
// watch() to watches changes to files and executes the task when a change occurs
const { parallel, watch } = require("gulp");

// plugin for webserver & LiveReload
const connect = require("gulp-connect");

// tasks
const { htmlFiles }         = require("./gulp/tasks/htmlFiles");
const { cssMain }           = require("./gulp/tasks/cssMain");
const { cssLibraries }      = require("./gulp/tasks/cssLibraries");
const { jsMain }            = require("./gulp/tasks/jsMain");
const { jsPlugins }         = require("./gulp/tasks/jsPlugins");
const { assetsFiles }       = require("./gulp/tasks/assetsFiles");
const { assetsImages }      = require("./gulp/tasks/assetsImages");
const { assetsFontAwesome } = require("./gulp/tasks/assetsFontAwesome");
const { assetsNpm }         = require("./gulp/tasks/assetsNpm");
const { phpFiles }          = require("./gulp/tasks/phpFiles");
const { cleanup }           = require("./gulp/tasks/cleanup");
const { zipper }            = require("./gulp/tasks/zipper");
const { build }             = require("./gulp/tasks/build");
const { themeforest_build } = require("./gulp/tasks/build");

// utils functions
const { watchTasks } = require("./gulp/utils/watchTasks");

// watcher task
const watcher = (cb) => {
  connect.server({
    root: "./dist/",
    livereload: true,
  });

  // html task
  watchTasks(htmlFiles);

  // main css task
  watchTasks(cssMain);

  // css libraries task
  watchTasks(cssLibraries);

  // main js task
  watchTasks(jsMain);

  // js plugins task
  watchTasks(jsPlugins);

  // assets files task
  watchTasks(assetsFiles);

  // assets images task
  watchTasks(assetsImages);

  // assets font-awesome task
  watchTasks(assetsFontAwesome);

  // assets npm task
  watchTasks(assetsNpm);

  // php files task
  watch("src/*.php", phpFiles);

  cb();
};

// export public tasks to be run by the gulp command
module.exports = {
  htmlFiles: htmlFiles.htmlFiles,
  cssMain: cssMain.cssMain,
  cssLibraries: cssLibraries.cssLibraries,
  jsMain: jsMain.jsMain,
  jsPlugins: jsPlugins.jsPlugins,
  assetsImages: assetsImages.assetsImages,
  assetsFiles: assetsFiles.assetsFiles,
  assetsNpm: assetsNpm.assetsNpm,
  assetsFontAwesome: assetsFontAwesome.assetsFontAwesome,
  phpFiles,
  cleanup,
  zipper,
  build,
  themeforest_build,

  // default task
  default: parallel(watcher),
};
