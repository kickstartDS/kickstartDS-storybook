import { actions } from "@storybook/addon-actions";
import { DocsContainer } from "@storybook/addon-docs";
// @see https://github.com/aFarkas/lazysizes/tree/gh-pages/plugins/attrchange
import "lazysizes/plugins/attrchange/ls.attrchange";
import { unpackDecorator } from "@kickstartds/core/lib/storybook/helpers";

import "@kickstartds/base/lib/global/base.js";
import "@kickstartds/base/lib/global/base.css";
import "../src/index.js";
import "../static/index.css";
import { IconSprite } from "../src/icon-sprite/IconSpriteComponent";
import Providers from "../src/Providers";
import { LinkProvider } from "../docs/LinkProvider";

import { LightBox } from "@kickstartds/base/lib/lightbox";

const myActions = actions("radio");
window.rm.radio.on("*", myActions.radio);

const providerDecorator = (Story, context) => (
  <Providers>
    <Story {...context} />
  </Providers>
);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  html: {
    prettier: {
      tabWidth: 4,
    },
    decorator: providerDecorator,
  },
  options: {
    storySort(a, b) {
      // welcome page to top!
      if (a[0].includes("welcome")) {
        return -2;
      }

      if (a[0].includes("design-token")) {
        return -1;
      }

      if (a[0].includes("custom")) {
        return 4;
      }

      if (a[0].includes("pages")) {
        return 10;
      }

      // alphabetically
      return a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true });
    },
  },
  designToken: {
    disable: true,
  },
  docs: {
    container: (props) => (
      <LinkProvider>
        <Providers>
          <IconSprite />
          <DocsContainer {...props} />
        </Providers>
      </LinkProvider>
    ),
  },
};

export const decorators = [
  unpackDecorator,
  providerDecorator,
  (Story) => (
    <>
      <IconSprite />
      <Story />
      <LightBox />
    </>
  ),
];
