import type { Meta, StoryObj } from "@storybook/react";
import merge from "deepmerge";
import { pack } from "@kickstartds/core/lib/storybook";
import postShareBarStories from "@kickstartds/blog/lib/post-share-bar/post-share-bar.stories";
import tokens from "./post-share-bar-tokens.json";
import schema from "@kickstartds/blog/lib/post-share-bar/post-share-bar.schema.dereffed.json";
import { PostShareBar } from "@kickstartds/blog/lib/post-share-bar";

const meta: Meta<typeof PostShareBar> = {
  ...postShareBarStories,
  title: "Blog/Post Share Bar",
  parameters: {
    cssprops: merge(postShareBarStories.parameters.cssprops, tokens),
    jsonschema: schema,
  },
};
export default meta;
type Story = StoryObj<typeof PostShareBar>;

export const Default: Story = {
  args: pack({
    headline: {
      level: "h3",
    },
  }),
};
