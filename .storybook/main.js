module.exports = {
  "stories": [
    "../docs/**/*.story.mdx",
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@kickstartds/storybook-addon-component-tokens",
    "@whitespace/storybook-addon-html"
  ]
}
