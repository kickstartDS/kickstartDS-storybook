import { LinkContext } from "@kickstartds/base/lib/link";
import LinkTo from "@storybook/addon-links/react";

const PagesLink = ({ href, ...props }) => (
  <LinkTo kind="pages" story={href} {...props} />
);

const LinkProvider = (props) => (
  <LinkContext.Provider value={PagesLink} {...props} />
);

export default {
  title: "Recipes / Content Sections",
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

export { Centered } from "./Centered.story";
export { AlongHorizontalImage } from "./AlongHorizontalImage.story";

