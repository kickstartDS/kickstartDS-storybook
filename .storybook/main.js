const path = require("path");

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
    // "@kickstartds/storybook-addon-jsonschema",
    "storybook-design-token",
  ],
  staticDirs: ["../static"],
  async webpackFinal(config, { configType }) {
    const babelRuleIndex = config.module.rules.findIndex((rule) =>
      rule?.use?.some((u) => u?.loader.includes("babel-loader"))
    );

    config.module.rules[babelRuleIndex].exclude =
      /node_modules\/(?!(@kickstartds\/|photoswipe))|core-js/;

    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "sass-loader",
          options: {
            sassOptions: {
              includePaths: [path.resolve(__dirname, "../node_modules")],
            },
          },
        },
      ],
      include: path.resolve(__dirname, "../src"),
    });

    config.resolve.mainFields = ["browser", "module", "main"];

    return config;
  },
};
