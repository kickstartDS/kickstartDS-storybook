import { unpack } from "@kickstartds/core/lib/storybook/helpers";

import {
  TextMedia,
  ContentBox,
  Section,
} from "@kickstartds/base";
import {
  Quote,
  LogoTiles,
  Storytelling,
} from "@kickstartds/content";

import HeaderStories from "../header/Header.stories";
import FooterStories from "../footer/Footer.stories";

import { Header } from "../header/HeaderComponent";
import { Footer } from "../footer/FooterComponent";

export default {
  title: "Sanity",
};

const Page = () => (
  <>
    <Header {...unpack(HeaderStories.args)}  />
    <Section
      mode="list"
      width="wide"
      spaceBefore="small"
      spaceAfter="small"
      gutter="none"
      pattern="graphics"
    >
      <Storytelling
        full
        box={{
          headline: {
            content: "Lorem Ipsum dolor",
            level: "h1",
            styleAs: "h1",
            subheadline: "kickstart DS is the foundation for your design system with reusable components and tools",
          },
          link: {
            label: "lorem ipsum",
          },
        }}
        image={{
          source: "img/integration/backend/sanity.png",
          order: {
            desktopImageLast: true,
          },
        }}
      />
    </Section>

    <Section
      width="narrow"
      align="center"
      spaceBefore="none"
      headline={{
        content: "Backend integration with kickstartDS",
        level: "h2",
        styleAs: "h1",
        align: "center",
      }}
    >
      <TextMedia
        className="text-media--highlight"
        text={`
Component properties encode decisions, **rooted in reality**, pre-solving everyday problems for you Component properties encode decisions,.

Directly engage with components through **Storybooks** rich interface.
      `}
      />
    </Section>


    <Section
      width="wide"
      spaceBefore="default"
      ks-inverted="true"
      gutter="large"
      headline={{
        content: "Why kickstartDS works so well with sanity",
        align: "center",
      }}
      variant="head"
    >
      <ContentBox
        image="img/design-system_framework_agnostic.svg"
        topic="Rely on any framework you want"
        text="Built for maximum performance. The kickstartDS components runtime, design token system and CSS framework is as lightweight as you need it to be."
      />
      <ContentBox
        image="img/design-system_UX-candy.svg"
        topic="Quality user experience"
        text="kickstartDS comes accessibility baked in and provides support for W3C’s [WCAG 2.1 spec](http://example.com/). We make sure all our components support touch screens, keyboard navigation, screen readers, and more."
      />
      <ContentBox
        image="img/design-system_performant.svg"
        topic="Best in class performance"
        text="kickstartDS comes in two themes and allows you to choose globally or locally [per component](http://example.com/) which theme you want to utilize."
      />
      <ContentBox
        image="img/design-system_A11Y_accessibility.svg"
        topic="Accessible by default"
        text="kickstartDS comes in two themes and allows you to choose globally or locally [per component](http://example.com/) which theme you want to utilize."
      />
      <ContentBox
        image="img/design-system_framework_agnostic.svg"
        topic="Rely on any framework you want"
        text="Built for maximum performance. The kickstartDS components runtime, design token system and CSS framework is as lightweight as you need it to be."
      />
      <ContentBox
        image="img/design-system_UX-candy.svg"
        topic="Quality user experience"
        text="kickstartDS comes accessibility baked in and provides support for W3C’s [WCAG 2.1 spec](http://example.com/). We make sure all our components support touch screens, keyboard navigation, screen readers, and more."
      />
    </Section>

    <Section
      headline={{
        content: "How you can easily create a page with kickstartDS",
        align: "center",
      }}
      width="max"
      gutter="large"
      ks-inverted="true"
      background="accent"
      variant="body"
      className="progress"
    >
      <ContentBox
        image="img/design-system_performant.svg"
        topic="Best in class performance"
        text="kickstartDS comes in two themes and allows you to choose globally or locally [per component](http://example.com/) which theme you want to utilize."
      />
      <ContentBox
        image="img/design-system_A11Y_accessibility.svg"
        topic="Accessible by default"
        text="kickstartDS comes in two themes and allows you to choose globally or locally [per component](http://example.com/) which theme you want to utilize."
      />
      <ContentBox
        image="img/design-system_framework_agnostic.svg"
        topic="Rely on any framework you want"
        text="Built for maximum performance. The kickstartDS components runtime, design token system and CSS framework is as lightweight as you need it to be."
      />
      <ContentBox
        image="img/design-system_UX-candy.svg"
        topic="Quality user experience"
        text="kickstartDS comes accessibility baked in and provides support for W3C’s [WCAG 2.1 spec](http://example.com/). We make sure all our components support."
      />
    </Section>

    <Section
      gutter="default"
      mode="list"
      headline={{
        align: "center",
        content: "What our customers say",
        level: "h2",
        pageHeader: false,
        spaceAfter: "none",
      }}
      pattern="3"
      spaceAfter="none"
      variant="head"
      width="narrow"
    >
      <Quote
        byline="CEO"
        image="/img/blog/web_profile_images.png"
        source="Daniel Ley, Co-Founder + UX Strategist with heart & soul"
        text={`More than 20 years ago I started creating user interfaces and web style guides, corporate design manuals and in the past years the first digital Design Systems.`}
      />
    </Section>
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
      }}
    >
      <Storytelling
        backgroundColor="#eceff3"
        image={{
          order: {
            desktopImageLast: true,
            mobileImageLast: true,
          },
          source: "img/contact.svg",
        }}
        box={{
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
    <Section
      width="wide"
      headline={{
        align: "center",
        content:
          "Leverage rich integrations with modern web technology, refocus on what really matters!",
        subheadline:
          "Out-of-the-box kickstartDS let's you connect your interfaces to:",
        level: "h2",
        pageHeader: false,
        spaceAfter: "none",
      }}
    >
      <LogoTiles
        logos={[
          {
            alt: "Shopify",
            src: "/logos/logo_contentful.svg",
          },
          {
            alt: "Contentful",
            src: "/logos/logo_gatsby.svg",
          },
          {
            alt: "Gatsby",
            src: "/logos/logo_netlify.svg",
          },
          {
            alt: "Bigcommerce",
            src: "/logos/logo_nextjs.svg",
          },
          {
            alt: "Gatsby",
            src: "/logos/logo_react.svg",
          },
          {
            alt: "Bigcommerce",
            src: "/logos/logo_wordpress.svg",
          },
          {
            alt: "Shopify",
            src: "/logos/logo_contentful.svg",
          },
          {
            alt: "Contentful",
            src: "/logos/logo_gatsby.svg",
          },
          {
            alt: "Gatsby",
            src: "/logos/logo_netlify.svg",
          },
          {
            alt: "Bigcommerce",
            src: "/logos/logo_nextjs.svg",
          },
        ]}
      />
    </Section>
    <Footer {...unpack(FooterStories.args)} />
  </>
);

const Template = (args) => <Page {...args} />;
export const Sanity = Template.bind({});
