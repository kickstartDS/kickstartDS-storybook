import { LinkContext } from "@kickstartds/base/lib/link";
import LinkTo from "@storybook/addon-links/react";

const PagesLink = ({ href, ...props }) => (
  <LinkTo kind="pages" story={href} {...props} />
);

const LinkProvider = (props) => (
  <LinkContext.Provider value={PagesLink} {...props} />
);

export default {
  title: "Pages",
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
export { TeaserVariants } from "./TeaserVariants.story";
export { CountUpVariants } from "./CountUpVariants.story";
export { BlogEntry } from "./BlogEntry.story";
