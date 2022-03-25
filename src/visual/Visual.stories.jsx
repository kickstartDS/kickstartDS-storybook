import merge from "deepmerge";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook/helpers";
import visualStories, {
  Template,
} from "@kickstartds/content/lib/visual/visual.stories";
import tokens from "./visual-tokens.json";
import schema from "./visual.schema.dereffed.json";

const { defaultArgs: args, argTypes } = getArgsShared(schema);

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
  height: "fullImage",
  box: {
    background: "light",
    link: {
      buttons: [
        {
          variant: "solid",
        },
        {
          label: ""
        },
        {
          label: ""
        },
      ],
    },
  },
});

export const BoxDark = Template.bind({});
BoxDark.args = pack({
  backgroundColor: "transparent",
  height: "fullImage",
  box: {
    link: {
      buttons: [
        {
          variant: "solid-inverted",
        },
        {
          variant: "outline-inverted",
        },
        {
          label: "",
        },
      ],
    },
  },
});

export const VideoWithLargeHeadline = Template.bind({});
VideoWithLargeHeadline.args = pack({
  backgroundColor: "#f6f6f6",
  inbox: false,
  height: "fullScreen",
  skipButton: true,
  media: {
    mode: "video",
    video: {
      srcMobile: "video/2077981.mp4",
      srcTablet: "video/2077981.mp4",
      srcDesktop: "video/2077981.mp4",
    },
  },
  box: {
    headline: {
      content: "Hic maxime sed eos non. Consequatur ut qui amet.",
      subheadline:"Hic maxime sed eos non. Consequatur ut qui amet.",
      level: "h1",
      styleAs: "h1",
    },
    horizontal: "center",
    vertical: "top",
    background: "transparent",
    text: "",
    link: {
      enabled: false,
      variant: "outline",
    },
  },
});

export const VideoWithOverlay = Template.bind({});
VideoWithOverlay.args = pack({
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
    link: {
      buttons: [
        {
          variant: "outline",
        },
        {
          label: "",
        },
        {
          label: "",
        },
      ],
    },
  },
});
