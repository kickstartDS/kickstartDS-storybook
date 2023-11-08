import { PropsWithChildren } from "react";
import { actions } from "@storybook/addon-actions";
import { Preview } from "@storybook/react";
import { DocsContainer, DocsContainerProps } from "@storybook/addon-docs";
import { Decorator } from "@storybook/react";
import { defaultDecorateStory } from "@storybook/preview-api";
// @see https://github.com/aFarkas/lazysizes/tree/gh-pages/plugins/attrchange
import "lazysizes/plugins/attrchange/ls.attrchange";
import { unpackDecorator } from "@kickstartds/core/lib/storybook";

import "@kickstartds/base/lib/global/base.js";
import "@kickstartds/base/lib/global/base.css";
import "../src/index.js";
import "../static/index.css";
import { IconSprite } from "../src/icon-sprite/IconSpriteComponent";
import Providers from "../src/Providers";
import { LinkProvider } from "../docs/LinkProvider";

const myActions = actions("radio");
window._ks.radio.on("*", myActions.radio);

const providerDecorator: Decorator = (Story, context) => (
  <Providers>{Story(context)}</Providers>
);

const preview: Preview = {
  parameters: {
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
      decorator: (Story, context) =>
        defaultDecorateStory(Story, [unpackDecorator, providerDecorator])(
          context
        ),
    },
    options: {
      storySort: {
        order: ["Welcome", "Design Token", "*", "Custom", "Recipes", "Pages"],
        method: "alphabetical",
      },
    },
    designToken: {
      disable: true,
    },
    docs: {
      container: (props: PropsWithChildren<DocsContainerProps>) => (
        <LinkProvider>
          <Providers>
            <IconSprite />
            <DocsContainer {...props} />
          </Providers>
        </LinkProvider>
      ),
    },
  },
  decorators: [
    unpackDecorator,
    providerDecorator,
    (Story) => (
      <>
        <IconSprite />
        <Story />
      </>
    ),
  ],
};

export default preview;
