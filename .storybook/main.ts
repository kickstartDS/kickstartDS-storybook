import { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../docs/**/*.mdx",
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@kickstartds/storybook-addon-component-tokens",
    "@whitespace/storybook-addon-html",
    // "@kickstartds/storybook-addon-jsonschema",
    {
      name: "storybook-design-token",
      options: {
        designTokenGlob: ".storybook/*.{css,svg}",
      },
    },
  ],
  staticDirs: ["../static"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: true,
  },
};

export default config;
