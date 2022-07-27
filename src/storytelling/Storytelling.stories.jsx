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
      }
    ],
  },
});

export const MultipleButtons = Template.bind({});
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
      subheadline:
        "At vero eos et accusam et justo duo dolores",
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

export const ImageFirst = Template.bind({});
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
      }
    ],
  },
});

export const CenteredText = Template.bind({});
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
      }
    ],
  },
});

export const OnlyCenteredText = Template.bind({});
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
      }
    ],
  },
});

export const BackgroundColor = Template.bind({});
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
      }
    ],
  },
});

export const BackgroundImage = Template.bind({});
BackgroundImage.args = pack({
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
      }
    ],
  },
});

export const ImageFull = Template.bind({});
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

export const TextTop = Template.bind({});
TextTop.args = pack({
  image: {
    source: "https://images.unsplash.com/photo-1554672408-730436b60dde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80",
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

export const TextBottom = Template.bind({});
TextBottom.args = pack({
  image: {
    source: "https://images.unsplash.com/photo-1554672408-730436b60dde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80",
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




