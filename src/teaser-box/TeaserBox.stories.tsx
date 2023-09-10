import type { Meta, StoryObj } from "@storybook/react";
import { pack } from "@kickstartds/core/lib/storybook";
import teaserBoxStories from "@kickstartds/base/lib/teaser-box/teaser-box.stories";
import schema from "@kickstartds/base/lib/teaser-box/teaser-box.schema.dereffed.json";
import { TeaserBox } from "@kickstartds/base/lib/teaser-box";

const meta: Meta<typeof TeaserBox> = {
  ...teaserBoxStories,
  component: TeaserBox,
  parameters: {
    jsonschema: schema,
  },
};
export default meta;
type Story = StoryObj<typeof TeaserBox>;

export const LinkedWithoutButton: Story = {};
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

export const LinkedWithButton: Story = {};
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

export const DarkStyle: Story = {};
DarkStyle.args = pack({
  ...LinkedWithoutButton.args,
  link: {
    variant: "outline",
    label: "learn more",
    hidden: false,
    iconAfter: true,
    icon: {
      icon: "chevron-right",
    },
  },
  inverted: true,
});

export const ImageSpacing: Story = {};
ImageSpacing.args = pack({
  ...LinkedWithoutButton.args,
  imageSpacing: true,
  image: "img/blog/storybook-dark.svg",
  inverted: true,
  link: {
    variant: "clear",
    label: "learn more",
    hidden: false,
    iconAfter: true,
    icon: {
      icon: "chevron-right",
    },
  },
});
