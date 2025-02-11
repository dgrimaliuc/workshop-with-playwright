module.exports = {
  presets: [["@babel/preset-env"], { modules: false }],
  plugins: ["@babel/transform-runtime", ["module-extension", { mjs: "js" }]],
  sourceMaps: false,
  retainLines: false,
  minified: true,
};
