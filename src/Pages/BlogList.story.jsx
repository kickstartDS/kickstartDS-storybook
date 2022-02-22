import { unpack } from "@kickstartds/core/lib/storybook/helpers";
import { PostTeaser } from "../post-teaser/PostTeaserComponent";
import { Default as PostTeaserStory } from "../post-teaser/PostTeaser.stories";

import { Section, TeaserBox } from "@kickstartds/base";

import { Header } from "../header/HeaderComponent";
import { Footer } from "../footer/FooterComponent";
import FooterStories from "../footer/Footer.stories";

export default {
  title: "Blog List",
};

const Page = () => (
  <>
    <Header />
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
      <PostTeaser {...unpack(PostTeaserStory.args)} />
      <PostTeaser {...unpack(PostTeaserStory.args)} />
      <PostTeaser {...unpack(PostTeaserStory.args)} />
      <PostTeaser {...unpack(PostTeaserStory.args)} />
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
      />
    </Section>
    <Footer {...FooterStories.args} />
  </>
);

const Template = (args) => <Page {...args} />;
export const BlogList = Template.bind({});
