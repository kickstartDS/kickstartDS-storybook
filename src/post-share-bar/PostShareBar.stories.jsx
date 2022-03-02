import merge from "deepmerge";
import { pack } from "@kickstartds/core/lib/storybook/helpers";
import PostShareBarStories, {
  Template,
} from "@kickstartds/blog/lib/post-share-bar/post-share-bar.stories";
import tokens from "./post-share-bar-tokens.json";
import schema from "@kickstartds/blog/lib/post-share-bar/post-share-bar.schema.dereffed.json";

export default {
  ...PostShareBarStories,
  title: "Blog/Post Share Bar",
  parameters: {
    cssprops: merge(PostShareBarStories.parameters.cssprops, tokens),
    jsonschema: schema,
  },
};

export const Default = Template.bind({});
Default.args = pack({
  headline: {
    level: "h3",
  },
});
