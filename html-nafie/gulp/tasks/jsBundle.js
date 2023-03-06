const { src, dest } = require("gulp");
const rollup = require("rollup");
const rollupBabel = require("rollup-plugin-babel");
const commonjs = require("@rollup/plugin-commonjs");
const { nodeResolve } = require("@rollup/plugin-node-resolve");
const terser = require("gulp-terser");
const connect = require("gulp-connect");

// source and destination paths
const srcPath = "dist/scripts/bundle.min.js";
const destPath = "dist/scripts/";
const watchPath = [
  "src/scripts/**/*.js",
  "src/components/**/*.js",
  "src/pages/**/*.js",
];

const jsBundle = {
  jsBundle: async () => {
    const bundle = await rollup.rollup({
      input: "src/scripts/main.js",
      plugins: [
        nodeResolve(),
        commonjs(),
        rollupBabel({
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: ["last 2 versions", "IE >= 11"],
                },
              },
            ],
          ],
          babelrc: false,
          exclude: "node_modules/**",
          runtimeHelpers: true,
        }),
      ],
    });

    await bundle.write({
      file: "dist/scripts/bundle.min.js",
      format: "iife",
      name: "MyApp",
      sourcemap: true,
    });

    return src(srcPath)
      .pipe(terser())
      .pipe(dest(destPath))
      .pipe(connect.reload());
  },
  watchPath,
};

module.exports = {
  jsBundle,
};
