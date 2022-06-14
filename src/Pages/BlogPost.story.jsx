import { unpack } from "@kickstartds/core/lib/storybook/helpers";
import { Section } from "@kickstartds/base/lib/section";
import { TeaserBox } from "@kickstartds/base/lib/teaser-box";
import { Button } from "@kickstartds/base/lib/button";
import { Storytelling } from "@kickstartds/content/lib/storytelling";
import { Contact } from "@kickstartds/content/lib/contact";
import { TextField } from "@kickstartds/form/lib/text-field";

import { Header } from "../header/HeaderComponent";
import HeaderStories from "../header/Header.stories";
import { SamplePost } from "../post/SamplePost";
import { Default as PostAsideStory } from "../post-aside/PostAside.stories";
import { Default as PostHeadStory } from "../post-head/PostHead.stories";
import { Footer } from "../footer/FooterComponent";
import FooterStories from "../footer/Footer.stories";
import { Subscription } from "../subscription/SubscriptionComponent";
import { RichText } from "@kickstartds/base";

export default {
  title: "Blog Post",
};

const Page = () => (
  <>
    <Header {...unpack(HeaderStories.args)} />
    <SamplePost
      aside={unpack(PostAsideStory.args)}
      head={unpack(PostHeadStory.args)}
    />
    <Section
      width="full"
      mode="list"
      spaceBefore="default"
      spaceAfter="small"
      className="l-section-style--highlight l-section--outer-width-narrow"
      gutter="large"
      headline={{
        content: "Get to know us",
        align: "center",
        spaceAfter: "small",
      }}
    >
      <Storytelling
        backgroundColor="#eceff3"
        image={{
          hAlign: "left",
          order: {
            desktopImageLast: true,
            mobileImageLast: true,
          },
          source: "img/contact.svg",
        }}
        box={{
          hAlign: "right",
          headline: {
            content: "Find out if kickstartDS suits your project",
            level: "h2",
          },
          text: "Get in contact with our team",
          link: {
            label: "Talk to us now",
            variant: "solid",
            size: "default",
            iconAfter: true,
            icon: {
              icon: "chevron-right",
            },
          },
        }}
      />
    </Section>
    <Section width="narrow" spaceBefore="small">
      <Contact
        image={{
          src: "/img/blog/web_profile_images.png",
          width: "250",
          height: "250",
        }}
        title="Daniel Ley"
        subtitle="Co-Founder + UX Strategist with heart & soul"
        links={[
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
        ]}
        copy={`More than 20 years ago I started creating user interfaces and web style guides, corporate design manuals and in the past years the first digital Design Systems.

After working in a large tech corporation for a long time I very well know todays problems in gaining and maintaining consistency in UIs.`}
      />
    </Section>

    <Section
      background="accent"
      spaceAfter="small"
      spaceBefore="default"
      className="col-three"
      width="wide"
      headline={{
        content: "Dig deeper ⛏️",
        align: "center",
        spaceAfter: "small",
      }}
    >
      <TeaserBox
        topic="Back to blog"
        text="Have a look through our blog posts about all aspects kickstartDS, technical or not."
        image="/img/blog/back-to-blog.svg"
        imageSpacing
        link={{
          label: "Read more",
          variant: "outline",
          size: "small",
        }}
      />
      <TeaserBox
        topic="kickstartDS"
        text="Explore kickstartDS, and how it can help yout team create consistent interfaces super fast."
        image="/img/blog/kds.svg"
        imageSpacing
        link={{
          label: "Learn more",
          variant: "outline",
          size: "small",
        }}
      />
      <TeaserBox
        topic="Storybook"
        text="Discover all the different components included with kickstartDS, especially their controls and tokens."
        image="/img/blog/storybook.svg"
        imageSpacing
        link={{
          label: "Explore components",
          variant: "outline",
          size: "small",
        }}
      />
    </Section>
    <Section
      spaceBefore="none"
      spaceAfter="none"
      width="slim"
      background="accent"
      headline={{
        content: "Subscribe to our newsletter",
        level: "h3",
        styleAs: "h3",
        align: "center",
        subheadline: "Stay up to date",
        spaceAfter: "small",
      }}
    >
      <Subscription />
    </Section>
    <Footer {...unpack(FooterStories.args)} />
  </>
);

const Template = (args) => <Page {...args} />;
export const BlogPost = Template.bind({});
