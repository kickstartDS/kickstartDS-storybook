import { pack, getArgsShared } from "@kickstartds/core/lib/storybook/helpers";
import storytellingStories, {
  Template,
} from "@kickstartds/content/lib/storytelling/storytelling.stories";
import schema from "./storytelling.schema.dereffed.json";

const { defaultArgs: args, argTypes } = getArgsShared(schema);

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
    link: [
      {
        label: "Request a guided demo",
        href: "#",
        variant: "solid",
      },
      {
        label: "",
      },
      {
        label: "",
      },
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
    link: [
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
      {
        label: "",
      },
    ],
  },
  full: true,
});
