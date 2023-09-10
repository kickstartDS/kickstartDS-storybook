import type { Meta, StoryObj } from "@storybook/react";
import merge from "deepmerge";
import { pack } from "@kickstartds/core/lib/storybook";
import postHeadStories from "@kickstartds/blog/lib/post-head/post-head.stories";
import tokens from "./post-head-tokens.json";
import schema from "@kickstartds/blog/lib/post-head/post-head.schema.dereffed.json";
import { PostHead } from "@kickstartds/blog/lib/post-head";

const meta: Meta<typeof PostHead> = {
  ...postHeadStories,
  title: "Blog/Post Head",
  parameters: {
    cssprops: merge(postHeadStories.parameters.cssprops, tokens),
    jsonschema: schema,
  },
};
export default meta;
type Story = StoryObj<typeof PostHead>;

export const Default: Story = {};
Default.args = pack({
  categories: [
    {
      label: "About kickstartDS",
      link: "#",
    },
    {
      label: "Background",
      link: "#",
    },
  ],
  headline: {
    content: "Why we are creating kickstartDS",
    level: "h1",
    pageHeader: false,
  },
  image: {
    src: "/img/why-kickstart-Design-System.svg",
  },
});
