import merge from "deepmerge";
import { pack } from "@kickstartds/core/lib/storybook/helpers";
import PostHeadStories, {
  Template,
} from "@kickstartds/blog/lib/post-head/post-head.stories";
import tokens from "./post-head-tokens.json";
import schema from "@kickstartds/blog/lib/post-head/post-head.schema.dereffed.json";

export default {
  ...PostHeadStories,
  title: "Blog/Post Head",
  parameters: {
    cssprops: merge(PostHeadStories.parameters.cssprops, tokens),
    jsonschema: schema,
  },
  args: {}
};

export const Default = Template.bind({});
Default.args = pack({
  categories: [
    {
      label: "About kickstartDS",
    },
    {
      label: "Background",
    },
  ],
  headline: {
    content: "Why we are creating kickstartDS",
    level: "h1",
    pageHeader: false,
    spaceAfter: "none",
  },
  image: {
    src: "/img/why-kickstart-Design-System.svg",
  },
});
