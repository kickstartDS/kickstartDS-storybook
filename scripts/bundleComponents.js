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

const sharedConfig = {
  format: "esm",
  bundle: true,
  plugins: [makeAllPackagesExternalPlugin],
};


(async () => {
  const entryPoints = await fg("src/**/*Component.jsx");
  await Promise.all([
    esbuild.build({
      entryPoints,
      outdir: "dist/components",
      inject: ['./utils/react-shim.js'],
      ...sharedConfig,
    }),
    esbuild.build({
      entryPoints: ["src/zendesk/zendesk.js"],
      outdir: "dist",
      ...sharedConfig,
    })
  ]);
})();
