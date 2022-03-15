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
} from "@kickstartds/content";
import FooterStories from "../footer/Footer.stories";

export default {
  title: "Landingpage",
};

import { Header } from "../header/HeaderComponent";
import { Footer } from "../footer/FooterComponent";

const Page = () => (
  <>
    <Header />
    <Section width="full" spaceBefore="none" spaceAfter="small">
      <Visual
        className="c-visual--deko"
        box={{
          background: "transparent",
          enabled: true,
          headline: {
            content:
              "kickstartDS is a comprehensive component and pattern library",
            level: "h1",
            subheadline: "The frontend first framework!",
            switchOrder: true,
          },
          horizontal: "left",
          indent: true,
          link: {
            className: "c-button--main",
            enabled: true,
            fillAnimation: false,
            href: "https://example.com",
            iconAfter: true,
            iconAnimation: false,
            iconBefore: false,
            icon: {
              icon: "chevron-right",
            },
            label: "Request a guided demo",
            newTab: false,
            size: "medium",
            variant: "solid",
          },
          text: `We **enable** web development **teams to create** consistent and brand compliant web **frontends** super **efficiently.** With a **built-in Design System** to serve all your digital touch points. Easy like squeeeeezing a lemon.`,
          vertical: "center",
        }}
        height="default"
        media={{
          image: {
            indent: "none",
            srcDesktop: "img/banner/bg-hero-lemon-desktop.svg",
            srcMobile: "img/lemon.svg",
            srcTablet: "img/lemon.svg",
          },
          mode: "image",
        }}
      />
    </Section>
    <Section
      background="dark"
      headline={{
        align: "center",
        content: "kickstartDS' full flexibility in numbers",
        subheadline:
          "The foundation to scale your design system across all your platforms and website",
        level: "h2",
        pageHeader: false,
        spaceAfter: "none",
      }}
      className="l-section--outer-width-wide"
      variant="highlight"
      pattern="2"
      width="default"
      spaceAfter="small"
      spaceBefore="small"
    >
      <CountUp
        graphic="components"
        icon={[]}
        link={[]}
        text={`
Use our components as **solid building blocks**, adapt and improve them as needed. From tokens to full customization.

Benefit from **15+ years of frontend experience!**
      `}
        to={33}
        topic="Components"
      />
      <CountUp
        graphic="properties"
        icon={[]}
        link={[]}
        text={`
Component properties encode decisions, **rooted in reality**, pre-solving everyday problems for you.

Directly engage with components through **Storybooks** rich interface.
      `}
        to={580}
        topic="Properties"
      />
      <CountUp
        graphic="tokens"
        icon={[]}
        link={[]}
        text={`
Of course we have **design tokens** – colors, fonts, sizes and iconography.

Additionally, **component tokens** provide a solid base layer of defaults for you to mutate.
`}
        to={793}
        topic="Tokens"
      />
    </Section>
    <Section
      width="wide"
      background="accent"
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
    <Section
      gutter="large"
      headline={{
        align: "center",
        content: "Frontend first approach",
        subheadline:
          "... a holistic view of components; unifying content creators, developers, designers and stakeholders under one roof",
        level: "h2",
        pageHeader: false,
        spaceAfter: "none",
      }}
      spaceAfter="default"
      spaceBefore="default"
      width="default"
      background="dark"
      pattern="1"
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
    </Section>
    <Section
      headline={{
        align: "center",
        content: "What our customers say",
        level: "h2",
        styleAs: "h2",
        align: "left",
        pageHeader: false,
        spaceAfter: "none",
      }}
      mode="list"
      className="l-section--outer-width-wide" /* Background Weite */
      variant="highlight"
      pattern="1"
      width="wide" /* Content Weite */
      background="dark"
      spaceAfter="default"
      spaceBefore="default"
    >
      <QuotesSlider
        slides={[
          {
            source: "Max Mustermann, ABC GmbH",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            byline: "CEO",
          },
          {
            source: "Max Mustermann, ABC GmbH",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
          },
          {
            source: "Max Mustermann, ABC GmbH",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
          },
        ]}
      />
    </Section>
    <Section background="default" spaceAfter="small" spaceBefore="small">
      <Quote
        image="https://picsum.photos/seed/kdsquote/300/300"
        source="Max Mustermann, ABC GmbH"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
      />
    </Section>

    <Section
      gutter="default"
      headline={{
        align: "left",
        content:
          "Just ask us what kickstartDS can do for you, specifically ...",
        subheadline:
          "kickstartDS comes accessibility baked in and provides support",
        level: "h2",
        pageHeader: false,
        spaceAfter: "none",
      }}
      pattern="2"
      spaceAfter="default"
      spaceBefore="default"
      width="default"
      background="default"
    >
      <TeaserBox
        topic="Lorem Ipsum"
        link={{
          label: "Get in touch",
        }}
        text="kickstartDS makes it easy to implement and use [its packages](http://example.com/) across any framework or no framework at all. We accomplish this by using standardized web platform APIs and [Web Components](http://example.com/)."
      />
      <TeaserBox
        topic="Accessibility baked in"
        link={{
          label: "Get in touch",
        }}
        text="kickstartDS comes accessibility baked in and provides support for W3C’s [WCAG 2.1 spec](http://example.com/). We make sure all our components support touch screens, keyboard navigation, screen readers, and more."
      />
    </Section>
    <Section
      gutter="default"
      headline={{
        align: "left",
        content:
          "Just ask us what kickstartDS can do for you, specifically ...",
        subheadline:
          "kickstartDS comes accessibility baked in and provides support",
        level: "h2",
        pageHeader: false,
        spaceAfter: "none",
      }}
      pattern="2"
      spaceAfter="default"
      spaceBefore="default"
      width="default"
      background="default"
      className="col-three"
    >
      <TeaserBox
        image="img/icons/Headline.svg"
        topic="Lorem Ipsum"
        text="kickstartDS makes it easy to implement and use [its packages](http://example.com/) across any framework or no framework at all."
      />
      <TeaserBox
        image="img/icons/Quote.svg"
        topic="Accessibility baked in"
        text="kickstartDS comes accessibility baked in and provides support for W3C’s [WCAG 2.1 spec](http://example.com/). We make sure all our components."
      />
      <TeaserBox
        image="img/icons/Slider.svg"
        topic="Powerful theming tools"
        text="kickstartDS comes in two themes and allows you to choose globally or locally [per component](http://example.com/) which theme you want to utilize."
      />
    </Section>

    <Section
      background="dark"
      pattern="2"
      gutter="default"
      mode="list"
      headline={{
        align: "center",
        content: "What kickstartDS can do for you?",
        level: "h2",
        pageHeader: false,
        spaceAfter: "none",
      }}
      className="l-section--outer-width-wide"
      variant="highlight"
      spaceAfter="default"
      spaceBefore="default"
      width="narrow"
    >
      <Quote
        byline="CEO"
        image="/img/blog/web_profile_images.png"
        source="Daniel Ley, Co-Founder + UX Strategist with heart & soul"
        text={`More than 20 years ago I started creating user interfaces and web style guides, corporate design manuals and in the past years the first digital Design Systems.

After working in a large tech corporation for a long time I very well know todays problems in gaining and maintaining consistency in UIs.`}
      />
      <Quote
        byline="CEO"
        image="/img/blog/web_profile_images.png"
        source="Daniel Ley, Co-Founder + UX Strategist with heart & soul"
        text={`More than 20 years ago I started creating user interfaces and web style guides, corporate design manuals and in the past years the first digital Design Systems.

After working in a large tech corporation for a long time I very well know todays problems in gaining and maintaining consistency in UIs.`}
      />
    </Section>
    <Section
      headline={{
        content: "Get in contact!",
        subheadline:
          "We would love to hear from you! Every bit and piece of feedback is welcome as we want to learn from you, get to know you better, to evolve kickstartDS to meet your needs.",
        align: "center",
      }}
      width="wide"
    >
      <Button variant="outline" label="WhatsApp us!" />
      <Button variant="outline" label="Join our Discord community!" />
      <Button variant="outline" label="Follow us in Twitter!" />
    </Section>
    <Footer {...FooterStories.args} />
  </>
);

const Template = (args) => <Page {...args} />;
export const Landingpage = Template.bind({});
