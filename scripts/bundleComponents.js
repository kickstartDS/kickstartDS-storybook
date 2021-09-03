const esbuild = require('esbuild');
const fg = require("fast-glob");

// https://github.com/evanw/esbuild/issues/619#issuecomment-751995294
const makeAllPackagesExternalPlugin = {
  name: "make-all-packages-external",
  setup(build) {
    const filter = /^[^.\/]|^\.[^.\/]|^\.\.[^\/]/; // Must not start with "/" or "./" or "../"
    build.onResolve({ filter }, (args) => ({ path: args.path, external: true }));
  },
};


(async () => {
  const entryPoints = await fg("src/**/*Component.jsx");
  esbuild.build({
    entryPoints,
    outdir: "dist/components",
    format: "esm",
    bundle: true,
    inject: ['./utils/react-shim.js'],
    plugins: [makeAllPackagesExternalPlugin],
  })
})();
