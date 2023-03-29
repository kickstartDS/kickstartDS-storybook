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
  // decorators: [
  //   (Story) => (
  //     <LinkProvider>
  //       <Story />
  //     </LinkProvider>
  //   ),
  // ],
};

export { Landingpage } from "./Landingpage.story";
export { Integrations } from "./Integrations.story";
export { Sanity } from "./Sanity.story";
export { BlogPost } from "./BlogPost.story";
export { BlogList } from "./BlogList.story";
export { Concierge } from "./Concierge.story";
export { GlossaryEntry } from "./GlossaryEntry.story";
export { Buttons } from "./Buttons.story";
// export { CountUpVariants } from "./CountUpVariants.story";
// export { TeaserVariants } from "./TeaserVariants.story";
