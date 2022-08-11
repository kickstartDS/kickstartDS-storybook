const path = require('path');
const StyleDictionary = require("style-dictionary");
const { config } = require("@kickstartds/style-dictionary");

module.exports = StyleDictionary.extend(config).extend({
  source: [
    "tokens/**/*.json",
    path.join(path.dirname(require.resolve('@kickstartds/core/package.json')), 'source/design-tokens/icons/*.svg')
  ],
  platforms: {
    css: {
      buildPath: 'src/'
    },
    scss: {
      buildPath: 'src/'
    },
    html: {
      buildPath: 'src/'
    },
    jsx: {
      buildPath: '.storybook/'
    },
    storybook: {
      buildPath: '.storybook/'
    },
    js: {
      transforms: ["attribute/cti", "name/cti/pascal", "size/rem", "color/css"],
      buildPath: ".storybook/",
      files: [
        {
          destination: "tokens.js",
          format: "javascript/es6",
        },
      ],
    },
  },
});
