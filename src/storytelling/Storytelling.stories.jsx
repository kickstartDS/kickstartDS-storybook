import { pack } from "@kickstartds/core/lib/storybook/helpers";
import storytellingStories, {
  Template,
} from "@kickstartds/content/lib/storytelling/storytelling.stories";

export default {
  ...storytellingStories,
};

export const Image = Template.bind({});
Image.args = pack({
  image: {
    source: "img/examples/toolbox.svg",
    order: {
      desktopImageLast: true,
    },
  },
  box: {
    headline: {
      level: "h2",
      content: "Great components",
      subheadline:
        "Make the most out of your frontends by unifying their core utilizing component and design tokens",
    },
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    link: {
      label: "Request a guided demo",
      href: "#",
      variant: "solid",
    },
  },
  full: false,
});

export const LargeScreenshot = Template.bind({});
LargeScreenshot.args = pack({
  backgroundColor: "#E6EEF0",
  image: {
    source: "img/examples/sanity.png",
  },
  box: {
    headline: {
      level: "h2",
      content: "Lorem Ipsum",
      subheadline:
        "Sed diam nonumy eirmod tempor invidunt",
    },
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    link: {
      label: "Request a guided demo",
      href: "#",
      variant: "outline",
    },
  },
  full: true,
});
LargeScreenshot.parameters = {
  backgrounds: { default: "dark" },
};
