import { pack } from "@kickstartds/core/lib/storybook/helpers";
import storytellingStories, {
  Template,
} from "@kickstartds/content/lib/storytelling/storytelling.stories";

export default {
  ...storytellingStories,
  title: "Recipes/CTA",
};

export const Image = Template.bind({});
Image.args = pack({
  image: {
    source: "img/lemon.svg",
    order: {
      desktopImageLast: true,
    },
  },
  box: {
    headline: {
      level: "h3",
      styleAs: "h1",
      content: "Got any questions?",
      subheadline:
        "Autem voluptas quis facere et qui voluptate earum. Dolorum totam animi perferendis.",
    },
    text: "",
    link: {
      label: "Get in touch",
      href: "#",
      variant: "solid",
    },
  },
  full: true,
});

export const BannerBackgroudColor = Template.bind({});
BannerBackgroudColor.args = pack({
  backgroundColor: "#f0fa97",
  image: {
    source: "",
    order: {
      desktopImageLast: true,
    },
  },
  box: {
    headline: {
      content: "Got any questions?",
      subheadline:
        "Autem voluptas quis facere et qui voluptate earum. Dolorum totam animi perferendis.",
    },
    text: "",
    link: {
      label: "Get in touch",
      href: "#",
      variant: "solid",
    },
  },
  full: true,
});

export const BannerLarge = Template.bind({});
BannerLarge.args = pack({
  backgroundColor: "#ffffff",
  image: {
    source: "",
    order: {
      desktopImageLast: true,
    },
  },
  box: {
    headline: {
      level: "h1",
      styleAs: "h1",
      content: "Got any questions?",
      subheadline:
        "Autem voluptas quis facere et qui voluptate earum. Dolorum totam animi perferendis.",
    },
    text: "",
    link: {
      label: "Get in touch",
      href: "#",
      variant: "solid",
      size: "large",
    },
  },
  full: true,
});
BannerLarge.parameters = {
  backgrounds: { default: "dark" },
};

export const BackgroundImage = Template.bind({});
BackgroundImage.args = pack({
  backgroundColor: "#06566A",
  backgroundImage: "img/examples/graphics--bg.svg",
  image: {
    source: "",
    order: {
      desktopImageLast: true,
    },
  },
  box: {
    headline: {
      level: "h1",
      styleAs: "h1",
      content: "Got any questions?",
      subheadline:
        "Autem voluptas quis facere et qui voluptate earum. Dolorum totam animi perferendis.",
    },
    text: "",
    link: {
      label: "Get in touch",
      href: "#",
      variant: "outline-inverted",
      size: "large",
    },
  },
  full: true,
});