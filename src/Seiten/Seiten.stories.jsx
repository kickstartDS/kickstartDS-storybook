import { LinkContext } from "@kickstartds/base/lib/link";
import LinkTo from "@storybook/addon-links/react";

const SeitenLink = ({ href, ...props }) => (
  <LinkTo kind="seiten" story={href} {...props} />
);

const LinkProvider = (props) => (
  <LinkContext.Provider value={SeitenLink} {...props} />
);

export default {
  title: "Seiten",
  parameters: {
    layout: "fullscreen",
    previewTabs: {
      "storybook/docs/panel": {
        hidden: true,
      },
    },
    controls: { disabled: true },
  },
  decorators: [
    (Story) => (
      <LinkProvider>
        <Story />
      </LinkProvider>
    ),
  ],
};

export { Landingpage } from "./Landingpage.story";
