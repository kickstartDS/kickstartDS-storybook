import merge from "deepmerge";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook/helpers";
import visualStories, {
  Template,
} from "@kickstartds/content/lib/visual/visual.stories";
import tokens from "./visual-tokens.json";
import schema from "./visual.schema.dereffed.json";

const { defaultArgs: args, argTypes } = getArgsShared(schema);
for (const prop in args) {
  if (prop.startsWith("box.link.")) {
    delete args[prop];
    delete argTypes[prop];
  }
}

export default {
  ...visualStories,
  args,
  argTypes,
  parameters: {
    cssprops: merge(visualStories.parameters.cssprops, tokens),
    jsonschema: schema,
  },
};

export const BoxLight = Template.bind({});
BoxLight.args = pack({
  backgroundColor: "transparent",
  media: {
    mode: "image",
    image: {
      srcMobile: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      srcTablet: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      srcDesktop: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  },
  box: {
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

export const BoxCenter = Template.bind({});
BoxCenter.args = pack({
  backgroundColor: "transparent",
  media: {
    mode: "image",
    image: {
      srcMobile: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      srcTablet: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      srcDesktop: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  },
  box: {
    background: "light",
    horizontal: "center",
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

export const BoxDark = Template.bind({});
BoxDark.args = pack({
  backgroundColor: "transparent",
  media: {
    mode: "image",
    image: {
      srcMobile: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      srcTablet: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      srcDesktop: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  },
  box: {
    links: [
      {
        variant: "solid-inverted",
      },
      {
        label: "Lorem Ipsum",
        variant: "outline-inverted",
      },
    ],
  },
});

export const BoxTransparent = Template.bind({});
BoxTransparent.args = pack({
  backgroundColor: "transparent",
  media: {
    mode: "image",
    image: {
      srcMobile: "https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1154&q=80",
      srcTablet: "https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1154&q=80",
      srcDesktop: "https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1154&q=80",
    },
  },
  box: {
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

export const FullScreen = Template.bind({});
FullScreen.args = pack({
  height: "fullScreen",
  backgroundColor: "transparent",
  media: {
    mode: "image",
    image: {
      srcMobile: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      srcTablet: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      srcDesktop: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  },
  box: {
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


export const Video = Template.bind({});
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

export const Overlay = Template.bind({});
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
    },
    horizontal: "left",
    vertical: "center",
    background: "transparent",
    text: "Hic maxime sed eos non. Consequatur ut qui amet accusantium nesciunt.",
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

export const SkipButton = Template.bind({});
SkipButton.args = pack({
  backgroundColor: "transparent",
  skipButton: true,
  media: {
    mode: "image",
    image: {
      srcMobile: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      srcTablet: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      srcDesktop: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  },
  box: {
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

export const InboxMobile = Template.bind({});
InboxMobile.args = pack({
  backgroundColor: "transparent",
  inbox: true,
  media: {
    mode: "image",
    image: {
      srcMobile: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      srcTablet: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      srcDesktop: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  },
  box: {
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
