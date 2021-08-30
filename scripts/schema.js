const path = require("path");
const fs = require("fs-extra");
const fg = require("fast-glob");
const { dereference } = require("./schemaParser");

const processSchema = async (schemaPath) => {
  const dirname = path.dirname(schemaPath);
  const basename = path.basename(schemaPath, ".json");
  const dereffed = await dereference(schemaPath);
  return fs.outputJson(`${dirname}/${basename}.dereffed.json`, dereffed, {
    spaces: 2,
  });
};

(async () => {
  const [, , schemaPath] = process.argv;

  if (schemaPath) {
    return processSchema(schemaPath);
  }

  const schemaPaths = await fg("src/**/*.schema.json");
  return schemaPaths.map(processSchema);
})();
