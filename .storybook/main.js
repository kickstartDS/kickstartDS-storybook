module.exports = {
  stories: [
    "../docs/**/*.story.mdx",
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-essentials",
    "@kickstartds/storybook-addon-component-tokens",
    "@whitespace/storybook-addon-html",
    "@kickstartds/storybook-addon-jsonschema",
    "storybook-design-token"
  ],
  staticDirs: ["../static"],
  async webpackFinal(config, { configType }) {
    const babelRuleIndex = config.module.rules.findIndex((rule) =>
      rule?.use?.some((u) => u?.loader.includes("babel-loader"))
    );

    config.module.rules[babelRuleIndex].exclude =
      /node_modules\/(?!(@kickstartds\/))/;

    return config;
  },
};
