import merge from "deepmerge";
import { pack } from "@kickstartds/core/lib/storybook/helpers";
import PostTeaserStories, {
  Template,
} from "@kickstartds/blog/lib/post-teaser/post-teaser.stories";
import tokens from "./post-teaser-tokens.json";
import schema from "@kickstartds/blog/lib/post-teaser/post-teaser.schema.dereffed.json";

export default {
  ...PostTeaserStories,
  title: "Blog/Post Teaser",
  parameters: {
    cssprops: merge(PostTeaserStories.parameters.cssprops, tokens),
    jsonschema: schema,
  },
  args: {},
};

export const Default = Template.bind({});
Default.args = pack({
  image: {
    src: "img/blog/Blog-Post01-5.webp",
  },
  title: "Why we are creating kickstartDS",
  body: `
#tldr: We want to support you to create one library of components,
patterns and tokens to be used in any frontend you need to give your
digital touch points a consistent interface...
  `,
  link: {
    href: "#",
    label: "Read more"
  },
  categories: [{ label: "About kickstartDS", link: "#" }, { label: "Background", link: "#" }],
  meta: {
    author: {
      name: "Daniel Ley",
      image: {
        src: "img/blog/web_profile_images-teaser.png",
      },
    },
    items: [
      {
        icon: "date",
        text: "29.03.2021",
      },
      {
        icon: "time",
        text: "5 min read",
      },
    ],
  },
});
