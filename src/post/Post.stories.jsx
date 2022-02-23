import { pack } from "@kickstartds/core/lib/storybook/helpers";
import { Default as PostAsideStory } from "../post-aside/PostAside.stories";
import { Default as PostHeadStory } from "../post-head/PostHead.stories";
import { Post } from "./PostComponent";
import { SamplePost } from "./SamplePost";

const Template = (args) => <SamplePost {...args} />;

export default {
  title: "Blog/Post",
  component: Post,
};

export const Default = Template.bind({});
Default.args = pack({
  aside: PostAsideStory.args,
  head: PostHeadStory.args,
  shareBar: {
    headline: "Share this article",
    headlineLevel: "h3",
    links: [
      {
        icon: "twitter",
        href: "https://twitter.com/intent/tweet?source=webclient&url=[URL]%2F&text=[TEXT]",
        title: "Auf Twitter teilen",
        newTab: true,
      },
      {
        icon: "facebook",
        href: "http://www.facebook.com/sharer.php?u=[URL]",
        title: "Auf Facebook teilen",
        newTab: true,
      },
      {
        icon: "xing",
        href: "https://www.xing.com/app/user?op=share;url=[URL]",
        title: "Auf Xing teilen",
        newTab: true,
      },
      {
        icon: "email",
        href: "mailto:?subject=[SUBJECT]",
        title: "Per E-Mail teilen",
      },
    ],
  },
});
