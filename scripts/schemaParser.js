const $RefParser = require("json-schema-ref-parser");
const merge = require("json-schema-merge-allof");
const { rmResolver, kdsResolver } = require("./schemaResolver");

const parse = (schemaPath) =>
  new $RefParser().dereference(schemaPath, {
    resolve: {
      rm: {
        order: 1,
        ...rmResolver,
      },
      kds: {
        order: 2,
        ...kdsResolver,
      },
    },
  });

const dereference = async (schemaPath) => {
  const schema = await parse(schemaPath);
  return merge(schema, { ignoreAdditionalProperties: true });
};

module.exports = { dereference };
