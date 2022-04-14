import { pack, getArgsShared } from "@kickstartds/core/lib/storybook/helpers";
import storytellingStories, {
  Template,
} from "@kickstartds/content/lib/storytelling/storytelling.stories";
import schema from "./storytelling.schema.dereffed.json";

const { defaultArgs: args, argTypes } = getArgsShared(schema);

for (const prop in args) {
  if (prop.startsWith("box.link.")) {
    delete args[prop];
    delete argTypes[prop];
  }
}

export default {
  ...storytellingStories,
  args,
  argTypes,
  parameters: {
    jsonschema: schema,
  },
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
    links: [
      {
        label: "Request a guided demo",
        href: "#",
        variant: "solid",
      }
    ],
  },
  full: true,
});

export const ButtonGroup = Template.bind({});
ButtonGroup.args = pack({
  image: {
    source: "img/lemon.svg",
  },
  box: {
    headline: {
      level: "h2",
      content: "Great components",
      subheadline:
        "Make the most out of your frontends by unifying their core utilizing component and design tokens",
    },
    text: "kickstart DS is the foundation for your design system with reusable components and tools, guided by clear standards, that can be assembled together to build digital products: fast, flexible, responsive, accessible, xxx, yyy, zzz and the best of all: you can plug it onto every digital touch point you own.",
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
      subheadline: "Sed diam nonumy eirmod tempor invidunt",
    },
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    links: [
      {
        label: "Request a guided demo",
        href: "#",
        variant: "outline",
      },
    ],
  },
  full: true,
});
LargeScreenshot.parameters = {
  backgrounds: { default: "dark" },
};
