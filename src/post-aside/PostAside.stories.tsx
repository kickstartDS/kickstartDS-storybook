import type { Meta, StoryObj } from "@storybook/react";
import merge from "deepmerge";
import { pack } from "@kickstartds/core/lib/storybook";
import postAsideStories from "@kickstartds/blog/lib/post-aside/post-aside.stories";
import tokens from "./post-aside-tokens.json";
import schema from "@kickstartds/blog/lib/post-aside/post-aside.schema.dereffed.json";
import { PostAside } from "@kickstartds/blog/lib/post-aside";

const meta: Meta<typeof PostAside> = {
  ...postAsideStories,
  title: "Blog/Post Aside",
  parameters: {
    cssprops: merge(postAsideStories.parameters.cssprops, tokens),
    jsonschema: schema,
  },
};
export default meta;
type Story = StoryObj<typeof PostAside>;

export const Default: Story = {};
Default.args = pack({
  author: {
    // headline: "Published by",
    image: {
      src: "/img/blog/web_profile_images.png",
      width: "250",
      height: "250",
    },
    title: "Daniel Ley",
    links: [
      {
        icon: "twitter",
        label: "@DLey_de",
        href: "https://twitter.com/DLey_de",
      },
      {
        icon: "email",
        label: "daniel.ley@kickstartds.com",
        href: "mailto:daniel.ley@kickstartds.com",
      },
    ],
    copy: "Co-Founder + UX Strategist with heart & soul",
  },
  meta: {
    author: null,
    items: [
      {
        icon: "date",
        text: "10.02.2022",
      },
      {
        icon: "time",
        text: "5 min read",
      },
    ],
  },
  shareBar: {
    headline: {
      content: "Share this article",
      level: "p",
      spaceAfter: "none",
    },
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
