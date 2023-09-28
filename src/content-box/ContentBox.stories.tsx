import type { Meta, StoryObj } from "@storybook/react";
import merge from "deepmerge";
import { pack } from "@kickstartds/core/lib/storybook";
import contentBoxStories from "@kickstartds/base/lib/content-box/content-box.stories";
import tokens from "./content-box-tokens.json";
import schema from "@kickstartds/base/lib/content-box/content-box.schema.dereffed.json";
import { ContentBox } from "@kickstartds/base/lib/content-box";

const meta: Meta<typeof ContentBox> = {
  ...contentBoxStories,
  title: "Base/Content Box",
  parameters: {
    cssprops: merge(contentBoxStories.parameters.cssprops, tokens),
    jsonschema: schema,
  },
};
export default meta;
type Story = StoryObj<typeof ContentBox>;

export const Image: Story = {
  args: pack({
    ratio: "16:9",
    topic: "Lorem Ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ispum dolor distinctio minima unde voluptatum aut. Lorem ipsum dolor sit amet.",
  }),
};

export const ImageWithButton: Story = {
  args: pack({
    ...Image.args,
    link: {
      enabled: true,
      variant: "solid",
      href: "#",
      label: "Learn more",
    },
  }),
};

export const Icon: Story = {
  args: pack({
    ...Image.args,
    link: {
      enabled: false,
    },
    ratio: "none",
    alignement: "center",
    image: "img/icons/tokens.svg",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  }),
};
