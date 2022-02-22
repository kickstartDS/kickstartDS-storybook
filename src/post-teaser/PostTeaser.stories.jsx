import { pack } from "@kickstartds/core/lib/storybook/helpers";
import { PostTeaser } from "./PostTeaserComponent";

const Template = (args) => <PostTeaser {...args} />;

export default {
  title: "Blog/Post Teaser",
  component: PostTeaser,
};

export const Default = Template.bind({});
Default.args = pack({
  headline: "Why we are creating kickstartDS",
  content: `
#tldr: We want to support you to create one library of components,
patterns and tokens to be used in any frontend you need to give your
digital touch points a consistent interface...
  `,
  tags: ["About kickstartDS", "Background"],
  meta: {
    avatar: {
      src: "img/blog/web_profile_images-teaser.png",
    },
    author: "Daniel Ley",
    date: "2021-03-29",
    readingTime: "5 min read",
  },
});
