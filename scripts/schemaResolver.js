const fs = require("fs-extra");
const glob = require("fast-glob");

const rmUrlRegExp =
  /^http:\/\/frontend\.ruhmesmeile\.com\/([a-z-_]+)\/([a-z-_]+)\/([a-z-_/]+)\.(?:schema|definitions)\.json$/;

const rmResolver = {
  canRead: /^http:\/\/frontend\.ruhmesmeile\.com/i,
  async read(file) {
    const [, module, , name] = rmUrlRegExp.exec(file.url);
    const [resolvedPath] = await glob(
      `node_modules/@kickstartds/${module}/lib/**/${name}.(schema|definitions).json`
    );
    return fs.readJSON(resolvedPath);
  },
};

const kdsUrlRegExp =
  /^http:\/\/schema\.kickstartds\.com\/([a-z-_]+)\/([a-z-_/]+)\.(?:schema|definitions)\.json$/i;

const kdsResolver = {
  canRead: kdsUrlRegExp,
  async read(file) {
    const [, module, name] = kdsUrlRegExp.exec(file.url);
    const [resolvedPath] = await glob(
      `node_modules/@kickstartds/${module}/lib/${name}/${name}.(schema|definitions).json`
    );
    return fs.readJSON(resolvedPath);
  },
};

const kickstartdsUrlRegExp =
  /^http:\/\/kickstartds\.com\/([a-z-_]+)\.(?:schema|definitions)\.json$/;

const kickstartdsResolver = {
  canRead: /^http:\/\/kickstartds\.com/i,
  async read(file) {
    const [, name] = kickstartdsUrlRegExp.exec(file.url);
    const [resolvedPath] = await glob(
      `src/**/${name}/${name}.(schema|definitions).json`
    );
    return fs.readJSON(resolvedPath);
  },
};

module.exports = { rmResolver, kdsResolver, kickstartdsResolver };
