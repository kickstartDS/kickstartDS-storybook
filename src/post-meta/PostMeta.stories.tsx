import type { Meta, StoryObj } from "@storybook/react";
import merge from "deepmerge";
import postMetaStories from "@kickstartds/blog/lib/post-meta/post-meta.stories";
import tokens from "./post-meta-tokens.json";
import schema from "@kickstartds/blog/lib/post-meta/post-meta.schema.dereffed.json";
import { PostMeta } from "@kickstartds/blog/lib/post-meta";

const meta: Meta<typeof PostMeta> = {
  ...postMetaStories,
  title: "Blog/Post Meta",
  parameters: {
    cssprops: merge(postMetaStories.parameters.cssprops, tokens),
    jsonschema: schema,
  },
};
export default meta;
type Story = StoryObj<typeof PostMeta>;

export const Default: Story = {};
