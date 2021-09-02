const path = require('path');
const fs = require('fs-extra');
const fg = require("fast-glob");
const { extract } = require('custom-property-extract');

const createTokens = (scssPath) => {
  const dest = scssPath.replace(/(.*\/)_?(.*)-tokens\.scss/, "$1$2-tokens.json");
  const tokens = extract(path.resolve(scssPath), { syntax: 'scss', mode: 'full' });
  return fs.outputJson(dest, tokens, { spaces: 2 });
};

(async () => {
  const [, , scssPath] = process.argv;

  if (scssPath) {
    return createTokens(scssPath);
  }

  const schemaPaths = await fg("src/**/*-tokens.scss");
  return schemaPaths.map(createTokens);
})();
