import {
  TextMedia,
  Headline,
  ContentBox,
  TeaserBox,
  Divider,
  Section,
} from "@kickstartds/base";
import { Button } from "@kickstartds/base/lib/button";
import {
  Visual,
  CollapsibleBox,
  Contact,
  Quote,
  QuotesSlider,
  LogoTiles,
  CountUp,
  Storytelling,
} from "@kickstartds/content";
import FooterStories from "../footer/Footer.stories";

export default {
  title: "Sanity",
};

import { Header } from "../header/HeaderComponent";
import { Footer } from "../footer/FooterComponent";
import { Cta } from "../cta/CtaComponent";

const Page = () => (
  <>
    <Header />
    <Section
      mode="list"
      width="wide"
      spaceBefore="default"
      spaceAfter="default"
      gutter="none"
    >
      <Storytelling
        full
        box={{
          link: {
            label: "read more",
          },
          headline: {
            content: "Lorem Ipsum dolor",
            level: "h1",
            styleAs: "h2",
            subheadline: "kickstart DS is the foundation for your design system with reusable components and tools",
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
      mode="list"
      width="narrow"
      spaceBefore="default"
      gutter="none"
      headline={{
        content: "Why kickstartDS works so well with sanity",
        align: "center",
      }}
      background="dark"
      variant="head"
    >
      <TextMedia
        className="text-media--highlight"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut."
      />
    </Section>
    <Section
      background="dark-accent"
      variant="body"
      gutter="large"
      width="default"
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
      background="dark"
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
      variant="head"
      className="l-section--outer-width-wide"
      headline={{
        align: "center",
        content: "What our customers say",
        level: "h2",
        pageHeader: false,
        spaceAfter: "none",
      }}
      spaceAfter="none"
      width="narrow"
    >
    </Section>
    <Section
      gutter="default"
      mode="list"
      variant="head"
      spaceBefore="small"
      spaceAfter="small"
      width="narrow"
      pattern="3"
    >
      <Quote
        byline="CEO"
        image="/img/blog/web_profile_images.png"
        source="Daniel Ley, Co-Founder + UX Strategist with heart & soul"
        text={`More than 20 years ago I started creating user interfaces and web style guides, corporate design manuals and in the past years the first digital Design Systems.`}
      />
    </Section>
    <Section
      width="narrow"
      spaceAfter="small"
    >
      <Cta
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
    <Footer {...FooterStories.args} />
  </>
);

const Template = (args) => <Page {...args} />;
export const Sanity = Template.bind({});
