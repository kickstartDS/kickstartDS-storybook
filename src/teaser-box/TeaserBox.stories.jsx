import { pack } from "@kickstartds/core/lib/storybook/helpers";
import teaserBoxStories, {
  Template,
} from "@kickstartds/base/lib/teaser-box/teaser-box.stories";
import schema from "@kickstartds/base/lib/teaser-box/teaser-box.schema.dereffed.json";

export default {
  ...teaserBoxStories,
  parameters: {
    jsonschema: schema,
  },
};

export const LinkedWithoutButton = Template.bind({});
LinkedWithoutButton.args = pack({
  ratio: "16:9",
  topic: "Lorem Ipsum",
  text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ispum dolor distinctio minima unde voluptatum aut. Lorem ipsum dolor sit amet.",
  link: {
    variant: "solid",
    label: "learn more",
    hidden: true,
  },
});

export const LinkedWithButton = Template.bind({});
LinkedWithButton.args = pack({
  ...LinkedWithoutButton.args,
  link: {
    variant: "solid",
    label: "learn more",
    hidden: false,
    iconAfter: true,
    icon: {
      icon: "chevron-right",
    },
  },
});

export const DarkStyle = Template.bind({});
DarkStyle.args = pack({
  ...LinkedWithoutButton.args,
  link: {
    variant: "outline-inverted",
    label: "learn more",
    hidden: false,
    iconAfter: true,
    icon: {
      icon: "chevron-right",
    },
  },
  darkStyle: true,
});

export const ImageSpacing = Template.bind({});
ImageSpacing.args = pack({
  ...LinkedWithoutButton.args,
  imageSpacing: true,
  image: "img/blog/storybook-dark.svg",
  darkStyle: true,
  link: {
    variant: "clear-inverted",
    label: "learn more",
    hidden: false,
    iconAfter: true,
    icon: {
      icon: "chevron-right",
    },
  },
});
