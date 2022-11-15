module.exports = {
  stories: [
    "../docs/**/*.story.mdx",
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@kickstartds/storybook-addon-component-tokens",
    "@whitespace/storybook-addon-html",
    "@kickstartds/storybook-addon-jsonschema",
    "storybook-design-token"
  ],
  staticDirs: ["../static"],
};
