import { pack } from "@kickstartds/core/lib/storybook/helpers";
import teaserBoxStories, {Template} from "@kickstartds/base/lib/teaser-box/teaser-box.stories";

export default teaserBoxStories;

export const Klickbar = Template.bind({});
Klickbar.args = pack({
  ratio: "16:9",
  topic: "Lorem Ipsum",
  text:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ispum dolor distinctio minima unde voluptatum aut. Lorem ipsum dolor sit amet.",
    link: {
      variant: "solid",
      label: "Mehr erfahren",
      hidden: true,
    },
});

export const MitButton = Template.bind({});
MitButton.args = pack({
  ...Klickbar.args,
  link: {
    variant: "solid",
    label: "mehr erfahren",
    hidden: false,
  },
});

export const Dark = Template.bind({});
Dark.args = pack({
  ...Klickbar.args,
  link: {
    variant: "solid-inverted",
    label: "mehr erfahren",
    hidden: false,
  },
  darkStyle: true,
});
