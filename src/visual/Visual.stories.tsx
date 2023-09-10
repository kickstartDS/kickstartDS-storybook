import type { Meta, StoryObj } from "@storybook/react";
import merge from "deepmerge";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";
import visualStories from "@kickstartds/content/lib/visual/visual.stories";
import tokens from "./visual-tokens.json";
import schema from "./visual.schema.dereffed.json";
import { Visual } from "@kickstartds/content/lib/visual";
import { JSONSchema7 } from "json-schema";

const { args, argTypes } = getArgsShared(schema as JSONSchema7);
for (const prop in args) {
  if (prop.startsWith("box.link.")) {
    delete args[prop];
    delete argTypes[prop];
  }
}

const meta: Meta<typeof Visual> = {
  ...visualStories,
  component: Visual,
  args,
  argTypes,
  parameters: {
    cssprops: merge(visualStories.parameters.cssprops, tokens),
    jsonschema: schema,
  },
};
export default meta;
type Story = StoryObj<typeof Visual>;

export const BoxRight: Story = {};
BoxRight.args = pack({
  backgroundColor: "transparent",
  media: {
    mode: "image",
    image: {
      srcMobile:
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      srcTablet:
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      srcDesktop:
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  },
  box: {
    background: "solid",
    headline: {
      spaceAfter: "small",
      level: "h2",
    },
    links: [
      {
        inverted: "false",
        variant: "solid",
      },
      {
        label: "Lorem Ipsum",
        variant: "outline",
      },
    ],
  },
});

export const BoxCenter: Story = {};
BoxCenter.args = pack({
  backgroundColor: "transparent",
  media: {
    mode: "image",
    image: {
      srcMobile:
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      srcTablet:
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      srcDesktop:
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  },
  box: {
    background: "solid",
    horizontal: "center",
    headline: {
      spaceAfter: "small",
      level: "h2",
    },
    links: [
      {
        inverted: "false",
        variant: "solid",
      },
      {
        label: "Lorem Ipsum",
        variant: "outline",
      },
    ],
  },
});

export const BoxInverted: Story = {};
BoxInverted.args = pack({
  backgroundColor: "transparent",
  media: {
    mode: "image",
    image: {
      srcMobile:
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      srcTablet:
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      srcDesktop:
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  },
  box: {
    headline: {
      spaceAfter: "small",
      level: "h2",
    },
    inverted: true,
    links: [
      {
        variant: "solid",
      },
      {
        label: "Lorem Ipsum",
        variant: "outline",
      },
    ],
  },
});

export const BoxTransparent: Story = {};
BoxTransparent.args = pack({
  backgroundColor: "transparent",
  media: {
    mode: "image",
    image: {
      srcMobile:
        "https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1154&q=80",
      srcTablet:
        "https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1154&q=80",
      srcDesktop:
        "https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1154&q=80",
    },
  },
  box: {
    headline: {
      spaceAfter: "small",
      level: "h2",
    },
    background: "transparent",
    links: [
      {
        variant: "solid",
      },
      {
        label: "Lorem Ipsum",
        variant: "outline",
      },
    ],
  },
});

export const FullScreen: Story = {};
FullScreen.args = pack({
  height: "fullScreen",
  backgroundColor: "transparent",
  media: {
    mode: "image",
    image: {
      srcMobile:
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      srcTablet:
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      srcDesktop:
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  },
  box: {
    headline: {
      spaceAfter: "small",
      level: "h2",
    },
    background: "solid",
    inverted: true,
    links: [
      {
        variant: "solid",
      },
      {
        label: "Lorem Ipsum",
        variant: "outline",
      },
    ],
  },
});

export const Video: Story = {};
Video.args = pack({
  backgroundColor: "transparent",
  media: {
    mode: "video",
    video: {
      srcMobile: "video/9305773.mp4",
      srcTablet: "video/9305773.mp4",
      srcDesktop: "video/9305773.mp4",
    },
  },
  box: {
    headline: {
      spaceAfter: "small",
      level: "h2",
    },
    background: "light",
    links: [
      {
        inverted: "false",
        variant: "solid",
      },
      {
        label: "Lorem Ipsum",
        variant: "outline",
      },
    ],
  },
});

export const Overlay: Story = {};
Overlay.args = pack({
  backgroundColor: "transparent",
  inbox: true,
  overlay: true,
  media: {
    mode: "video",
    video: {
      srcMobile: "video/9305773.mp4",
      srcTablet: "video/9305773.mp4",
      srcDesktop: "video/9305773.mp4",
    },
  },
  box: {
    headline: {
      content: "Hic maxime sed eos non consequatur ut qui.",
      level: "h1",
      styleAs: "h1",
      spaceAfter: "small",
    },
    horizontal: "left",
    vertical: "center",
    background: "transparent",
    text: "Hic maxime sed eos non. Consequatur ut qui amet accusantium nesciunt.",
    links: [
      {
        variant: "solid",
        inverted: "false",
      },
      {
        label: "Lorem Ipsum",
        variant: "outline",
      },
    ],
  },
});

export const SkipButton: Story = {};
SkipButton.args = pack({
  backgroundColor: "transparent",
  skipButton: true,
  media: {
    mode: "image",
    image: {
      srcMobile:
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      srcTablet:
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      srcDesktop:
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  },
  box: {
    headline: {
      spaceAfter: "small",
      level: "h2",
    },
    background: "light",
    links: [
      {
        variant: "solid",
      },
      {
        label: "Lorem Ipsum",
        variant: "outline",
      },
    ],
  },
});

export const InboxMobile: Story = {};
InboxMobile.args = pack({
  backgroundColor: "transparent",
  inbox: true,
  media: {
    mode: "image",
    image: {
      srcMobile:
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      srcTablet:
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      srcDesktop:
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  },
  box: {
    headline: {
      spaceAfter: "small",
      level: "h2",
    },
    background: "light",
    links: [
      {
        inverted: "false",
        variant: "solid",
      },
      {
        label: "Lorem Ipsum",
        variant: "outline",
      },
    ],
  },
});
