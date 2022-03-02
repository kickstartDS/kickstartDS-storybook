import merge from "deepmerge";
import PostMetaStories, {
  Template,
} from "@kickstartds/blog/lib/post-meta/post-meta.stories";
import tokens from "./post-meta-tokens.json";
import schema from "@kickstartds/blog/lib/post-meta/post-meta.schema.dereffed.json";

export default {
  ...PostMetaStories,
  title: "Blog/Post Meta",
  parameters: {
    cssprops: merge(PostMetaStories.parameters.cssprops, tokens),
    jsonschema: schema,
  },
};

export const Default = Template.bind({});
