import type { Meta, StoryObj } from "@storybook/react";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";
import storytellingStories from "@kickstartds/content/lib/storytelling/storytelling.stories";
import schema from "./storytelling.schema.dereffed.json";
import { Storytelling } from "@kickstartds/content/lib/storytelling";
import { JSONSchema7 } from "json-schema";

const { args, argTypes } = getArgsShared(schema as JSONSchema7);

for (const prop in args) {
  if (prop.startsWith("box.link.")) {
    delete args[prop];
    delete argTypes[prop];
  }
}

const meta: Meta<typeof Storytelling> = {
  ...storytellingStories,
  args,
  argTypes,
  parameters: {
    jsonschema: schema,
  },
};
export default meta;
type Story = StoryObj<typeof Storytelling>;

export const Image: Story = {};
Image.args = pack({
  image: {
    source: "img/recipes/toolbox.svg",
    order: {
      desktopImageLast: true,
    },
  },
  box: {
    headline: {
      level: "h2",
      content: "Great components",
      subheadline: "Sed diam nonumy eirmod tempor invidunt",
    },
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    links: [
      {
        label: "Request a guided demo",
        href: "#",
        variant: "solid",
      },
    ],
  },
});

export const MultipleButtons: Story = {};
MultipleButtons.args = pack({
  image: {
    source: "img/recipes/toolbox.svg",
    order: {
      desktopImageLast: true,
    },
  },
  box: {
    headline: {
      level: "h2",
      content: "Great components",
      subheadline: "At vero eos et accusam et justo duo dolores",
    },
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
    links: [
      {
        label: "Request a guided demo",
        href: "#",
        variant: "solid",
      },
      {
        label: "Learn more",
        href: "#",
        variant: "outline",
      },
    ],
  },
  full: false,
});

export const ImageFirst: Story = {};
ImageFirst.args = pack({
  image: {
    source: "img/recipes/toolbox.svg",
    order: {
      desktopImageLast: false,
    },
  },
  box: {
    headline: {
      level: "h2",
      content: "Great components",
      subheadline: "Sed diam nonumy eirmod tempor invidunt",
    },
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    links: [
      {
        label: "Request a guided demo",
        href: "#",
        variant: "solid",
      },
    ],
  },
});

export const CenteredText: Story = {};
CenteredText.args = pack({
  image: {
    source: "img/recipes/toolbox.svg",
    order: {
      desktopImageLast: true,
    },
  },
  box: {
    textAlign: "center",
    headline: {
      level: "h2",
      content: "Great components",
      subheadline: "Sed diam nonumy eirmod tempor invidunt",
    },
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    links: [
      {
        label: "Request a guided demo",
        href: "#",
        variant: "solid",
      },
    ],
  },
});

export const OnlyCenteredText: Story = {};
OnlyCenteredText.args = pack({
  image: {
    source: null,
  },
  box: {
    textAlign: "center",
    headline: {
      level: "h2",
      content: "Great components",
      subheadline: "Sed diam nonumy eirmod tempor invidunt",
    },
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    links: [
      {
        label: "Request a guided demo",
        href: "#",
        variant: "solid",
      },
    ],
  },
});

export const BackgroundColor: Story = {};
BackgroundColor.args = pack({
  backgroundColor: "#eceff3",
  image: {
    source: "img/recipes/toolbox.svg",
    order: {
      desktopImageLast: true,
    },
  },
  box: {
    headline: {
      level: "h2",
      content: "Great components",
      subheadline: "Sed diam nonumy eirmod tempor invidunt",
    },
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    links: [
      {
        label: "Request a guided demo",
        href: "#",
        variant: "solid",
      },
    ],
  },
});

export const BackgroundImage: Story = {};
BackgroundImage.args = pack({
  inverted: true,
  backgroundColor: "#06566A",
  backgroundImage: "img/recipes/background-pattern-dark.svg",
  image: {
    source: "img/recipes/toolbox-dark.svg",
    order: {
      desktopImageLast: true,
    },
  },
  box: {
    headline: {
      level: "h2",
      content: "Great components",
      subheadline: "Sed diam nonumy eirmod tempor invidunt",
    },
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    links: [
      {
        label: "Request a guided demo",
        href: "#",
        variant: "solid",
      },
    ],
  },
});

export const ImageFull: Story = {};
ImageFull.args = pack({
  backgroundColor: "#ffffff",
  image: {
    source: "img/recipes/storytelling-full.png",
    order: {
      desktopImageLast: true,
    },
  },
  box: {
    headline: {
      level: "h2",
      content: "Lorem Ipsum",
      subheadline: "Sed diam nonumy eirmod tempor invidunt",
    },
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    links: [
      {
        label: "Request a guided demo",
        href: "#",
      },
    ],
  },
  full: true,
});
ImageFull.parameters = {
  backgrounds: { default: "dark" },
};

export const TextTop: Story = {};
TextTop.args = pack({
  image: {
    source:
      "https://images.unsplash.com/photo-1554672408-730436b60dde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80",
    order: {
      desktopImageLast: true,
    },
  },
  box: {
    vAlign: "top",
    headline: {
      level: "h2",
      content: "Lorem Ipsum",
      subheadline: "Sed diam nonumy eirmod tempor invidunt",
    },
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
    links: [
      {
        label: "Request a guided demo",
        href: "#",
      },
    ],
  },
});

export const TextBottom: Story = {};
TextBottom.args = pack({
  image: {
    source:
      "https://images.unsplash.com/photo-1554672408-730436b60dde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80",
    order: {
      desktopImageLast: true,
    },
  },
  box: {
    vAlign: "bottom",
    headline: {
      level: "h2",
      content: "Lorem Ipsum",
      subheadline: "Sed diam nonumy eirmod tempor invidunt",
    },
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
    links: [
      {
        label: "Request a guided demo",
        href: "#",
      },
    ],
  },
});
