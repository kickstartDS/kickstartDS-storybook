import type { Meta, StoryObj } from "@storybook/react";
import { unpack } from "@kickstartds/core/lib/storybook";

import { Section } from "../section/SectionComponent";
import { TeaserBox } from "@kickstartds/base/lib/teaser-box";
import { PostTeaser } from "@kickstartds/blog/lib/post-teaser";

import HeaderStories from "../header/Header.stories";
import FooterStories from "../footer/Footer.stories";

import { Default as PostTeaserStory } from "../post-teaser/PostTeaser.stories";
import { Header } from "../header/HeaderComponent";
import { Footer } from "../footer/FooterComponent";
import { ComponentProps } from "react";

const Page = () => (
  <>
    <Header
      {...(unpack(HeaderStories.args!) as ComponentProps<typeof Header>)}
    />
    <Section
      headline={{
        content: "Welcome to the kickstartDS Blog",
        level: "h1",
        subheadline:
          "Here we keep you up to date on releases, updates and background info",
        align: "center",
      }}
      width="wide"
      pattern="3"
      spaceAfter="none"
    />

    <Section spaceBefore="default" width="narrow" mode="list" gutter="large">
      <PostTeaser
        {...(unpack(PostTeaserStory.args) as ComponentProps<typeof PostTeaser>)}
      />
      <PostTeaser
        {...(unpack(PostTeaserStory.args) as ComponentProps<typeof PostTeaser>)}
        meta={{
          author: {
            name: "Jonas Ulrich",
            image: {
              src: "img/author_images_julrich.png",
            },
          },
        }}
      />
      <PostTeaser
        {...(unpack(PostTeaserStory.args) as ComponentProps<typeof PostTeaser>)}
      />
      <PostTeaser
        {...(unpack(PostTeaserStory.args) as ComponentProps<typeof PostTeaser>)}
        meta={{
          author: {
            name: "Jonas Ulrich",
            image: {
              src: "img/author_images_julrich.png",
            },
          },
        }}
      />
    </Section>
    <Section
      background="accent"
      headline={{
        content: "Dig deeper ⛏️",
        level: "h2",
      }}
      spaceAfter="none"
      width="wide"
      className="col-three"
    >
      <TeaserBox
        topic="kickstartDS"
        image="img/blog/kds.svg"
        imageSpacing
        text="Explore kickstartDS, and how it can help your team create consistent interfaces super fast."
        link={{
          variant: "outline",
          size: "small",
          label: "Learn more",
        }}
        ratio="4:3"
      />
      <TeaserBox
        topic="Storybook"
        image="img/blog/storybook.svg"
        imageSpacing
        text="Discover all the different components included with kickstartDS, especially their controls and tokens."
        link={{
          variant: "outline",
          size: "small",
          label: "Explore components",
        }}
        ratio="4:3"
      />
      <TeaserBox
        topic="Follow us"
        image="img/blog/kds-twitter.svg"
        imageSpacing
        text="Follow us on Twitter for news, updates, announcements and general talk around Design Systems."
        link={{
          variant: "outline",
          size: "small",
          label: "Visit profile",
        }}
        ratio="4:3"
      />
    </Section>
    <Footer
      {...(unpack(FooterStories.args!) as ComponentProps<typeof Footer>)}
    />
  </>
);

const meta: Meta<typeof Page> = {
  component: Page,
  title: "Pages/Blog/Blog List",
  parameters: {
    layout: "fullscreen",
    controls: { disabled: true },
  },
};
export default meta;
type Story = StoryObj<typeof Page>;

export const BlogList: Story = {};
