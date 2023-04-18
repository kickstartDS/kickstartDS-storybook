import { LinkContext } from "@kickstartds/base/lib/link";
import LinkTo from "@storybook/addon-links/react";

const PagesLink = ({ href, ...props }) => (
  <LinkTo kind="pages" story={href} {...props} />
);

const LinkProvider = (props) => (
  <LinkContext.Provider value={PagesLink} {...props} />
);

export default {
  title: "Pages/Entries",
  parameters: {
    layout: "fullscreen",
    previewTabs: {
      "storybook/docs/panel": {
        hidden: true,
      },
    },
    controls: { disabled: true },
  },
};


export { GlossaryEntry } from "./GlossaryEntry.story";
export { ShowcaseEntry } from "./ShowcaseEntry.story";
export { AppearanceEntry } from "./AppearanceEntry.story";
