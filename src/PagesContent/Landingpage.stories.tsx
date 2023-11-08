import type { Meta, StoryObj } from "@storybook/react";
import { unpack } from "@kickstartds/core/lib/storybook";

import { ContentBox } from "@kickstartds/base/lib/content-box";
import { Section } from "../section/SectionComponent";
import { TeaserBox } from "@kickstartds/base/lib/teaser-box";
import { Button } from "@kickstartds/base/lib/button";

import { Visual } from "@kickstartds/content/lib/visual";
import { Quote } from "@kickstartds/content/lib/quote";
import { QuotesSlider } from "@kickstartds/content/lib/quotes-slider";
import { LogoTiles } from "@kickstartds/content/lib/logo-tiles";
import { CountUp } from "@kickstartds/content/lib/count-up";
import { Storytelling } from "@kickstartds/content/lib/storytelling";

import HeaderStories from "../header/Header.stories";
import FooterStories from "../footer/Footer.stories";

import { Header } from "../header/HeaderComponent";
import { Footer } from "../footer/FooterComponent";
import { ComponentProps } from "react";

const Page = () => (
  <>
    <Header
      {...(unpack(HeaderStories.args!) as ComponentProps<typeof Header>)}
    />
    <Section width="full" spaceBefore="none" spaceAfter="small">
      <Visual
        className="contain-image"
        box={{
          background: "transparent",
          enabled: true,
          headline: {
            content:
              "kickstartDS is the Open Source starter kit for Design Systems",
            level: "h1",
            styleAs: "h1",
            subheadline: "Democratizing Design Systems",
            switchOrder: true,
          },
          horizontal: "left",
          indent: true,
          link: {
            deko: true,
            highlighted: true,
            enabled: true,
            fillAnimation: false,
            href: "#",
            iconAnimation: false,
            icon: {
              icon: "chevron-right",
            },
            label: "Request a guided demo",
            newTab: false,
            size: "medium",
            variant: "solid",
          },
          text: `
A low-code framework, UI develeopment toolkit and comprehensive component library enabling digital teams to create consistent and brand compliant web frontends super efficiently. Easy like squeeeeezing a lemon`.trim(),
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
      ks-inverted="true"
      width="full"
      spaceAfter="none"
      spaceBefore="none"
      variant="highlight"
      className="l-section--outer-width-wide"
    >
      <Storytelling
        box={{
          headline: {
            content: "Meet our Design System Concierge",
            subheadline: "Your AI-powered Design System assistant!",
          },
          text: "Our Design System Concierge can help by providing expert guidance and pointing you towards the right resources, whether it's implementation guides, architecture documents, adoption strategies, or other content.",
          links: [
            {
              label: "Try it, it's free",
            },
            {
              label: "Upvote on ProductHunt",
              variant: "outline",
            },
          ],
        }}
        image={{
          source: "img/concierge/concierge-desk.svg",
          hAlign: "center",
        }}
      />
    </Section>
    {/* <Section
      ks-inverted="true"
      headline={{
        align: "center",
        content: "How does it work",
        subheadline:
          "Setup a Design System and put it into action in just 5 steps",
        level: "h2",
        
        spaceAfter: "small",
      }}
      width="full"
      spaceAfter="default"
      variant="highlight"
      spaceBefore="small"
      className="l-section--outer-width-max"
    >
      <Steps />
    </Section> */}

    <Section
      width="wide"
      headline={{
        align: "center",
        content:
          "Leverage rich integrations with modern web technology, refocus on what really matters!",
        subheadline:
          "Out-of-the-box kickstartDS let's you connect your interfaces to:",
        level: "h2",
        spaceAfter: "minimum",
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
      ks-inverted="true"
      headline={{
        align: "center",
        content: "kickstartDS' full flexibility in numbers",
        subheadline:
          "The foundation to scale your design system across all your platforms and website",
        level: "h2",
      }}
      className="l-section--outer-width-wide additional-spacing"
      variant="highlight"
      pattern="2"
      width="default"
      spaceAfter="small"
      spaceBefore="small"
    >
      <CountUp
        graphic="components"
        text={`
Use our components as **solid building blocks**, adapt and improve them as needed. From tokens to full customization.

Benefit from **15+ years of frontend experience!**
      `}
        to={33}
        topic="Components"
      />
      <CountUp
        graphic="properties"
        text={`
Component properties encode decisions, **rooted in reality**, pre-solving everyday problems for you.

Directly engage with components through **Storybooks** rich interface.
      `}
        to={580}
        topic="Properties"
      />
      <CountUp
        graphic="tokens"
        text={`
Of course we have **design tokens** – colors, fonts, sizes and iconography.

Additionally, **component tokens** provide a solid base layer of defaults for you to mutate.
`}
        to={793}
        topic="Tokens"
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
      }}
      spaceAfter="default"
      spaceBefore="default"
      width="default"
      ks-inverted="true"
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
      mode="list"
      width="full"
      spaceBefore="default"
      gutter="none"
      headline={{
        content: "Easy peasy lemon squeezy",
        subheadline: "5 reasons why you should start with kickstartDS today!",
        align: "center",
        level: "h2",
        styleAs: "h1",
        spaceAfter: "small",
      }}
    >
      <Storytelling
        box={{
          link: {
            label: "read more",
          },
          headline: {
            content: "Lorem Ipsum dolor",
          },
          text: "kickstart DS is the foundation for your design system with reusable components and tools, guided by clear standards, that can be assembled together to build digital products.",
        }}
        image={{
          source: "img/landingpage/design-system-great_components.jpeg",
          order: {
            desktopImageLast: false,
          },
        }}
      />
      <Storytelling
        backgroundColor="var(--ks-background-color-accent)"
        full
        box={{
          link: {
            label: "read more",
          },
          headline: {
            content: "Flexible + easy design application",
            subheadline: "One common ground for developers and designers",
          },
          text: `kickstart DS is the foundation for your design system with reusable components and tools, guided by clear standards, that can be assembled together to build digital products.
          
kickstart DS is the foundation for your design system with reusable components and tools, guided by clear standards, that can be assembled together to build digital products.`.trim(),
        }}
        image={{
          source: "img/landingpage/storybook.webp",
          order: {
            desktopImageLast: true,
          },
        }}
      />
      <Storytelling
        backgroundColor="var(--ks-background-color-default)"
        ks-inverted="true"
        box={{
          link: {
            label: "read more",
          },
          headline: {
            content: "Lorem Ipsum dolor",
          },
          text: "kickstart DS is the foundation for your design system with reusable components and tools, guided by clear standards, that can be assembled together to build digital products.",
        }}
        image={{
          source: "img/landingpage/backend.png",
          order: {
            desktopImageLast: false,
          },
        }}
      />
    </Section>
    <Section
      headline={{
        content: "What our customers say",
        level: "h2",
        styleAs: "h2",
        align: "left",
      }}
      mode="list"
      className="l-section--outer-width-wide" /* Background Weite */
      variant="highlight"
      pattern="1"
      width="wide" /* Content Weite */
      ks-inverted="true"
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
      }}
      pattern="2"
      spaceAfter="default"
      spaceBefore="default"
      width="default"
      background="default"
    >
      {/* @ts-expect-error */}
      <TeaserBox
        image="https://kickstartds.com/static/b75932664b811513543d5af322c2e4ee/headless_design_system_for_developer.svg"
        inverted
        topic="... as a developer?"
        link={{
          label: "Get in touch",
        }}
        text="kickstartDS makes it easy to implement and use [its packages](http://example.com/) across any framework or no framework at all. We accomplish this by using standardized web platform APIs and [Web Components](http://example.com/)."
      />
      {/* @ts-expect-error */}
      <TeaserBox
        image="https://kickstartds.com/static/22366760e710d38f85417e550177546f/headless_design_system_for_designer.svg"
        inverted
        topic="... as a designer?"
        link={{
          label: "Get in touch",
        }}
        text="kickstartDS comes accessibility baked in and provides support for W3C’s [WCAG 2.1 spec](http://example.com/). We make sure all our components support touch screens, keyboard navigation, screen readers, and more."
      />
      {/* @ts-expect-error */}
      <TeaserBox
        image="https://kickstartds.com/static/22366760e710d38f85417e550177546f/headless_design_system_for_designer.svg"
        inverted
        topic="... as a product team?"
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
      }}
      pattern="2"
      spaceAfter="default"
      spaceBefore="default"
      width="default"
      background="default"
      className="col-three"
    >
      <ContentBox
        topic="Lorem Ipsum"
        text="kickstartDS makes it easy to implement and use [its packages](http://example.com/) across any framework or no framework at all."
      />
      <ContentBox
        topic="Accessibility baked in"
        text="kickstartDS comes accessibility baked in and provides support for W3C’s [WCAG 2.1 spec](http://example.com/). We make sure all our components."
      />
      <ContentBox
        topic="Powerful theming tools"
        text="kickstartDS comes in two themes and allows you to choose globally or locally [per component](http://example.com/) which theme you want to utilize."
      />
    </Section>

    <Section
      ks-inverted="true"
      pattern="2"
      gutter="default"
      mode="list"
      headline={{
        align: "center",
        content: "What kickstartDS can do for you?",
        level: "h2",
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
      <Button href="#" variant="outline" label="WhatsApp us!" />
      <Button variant="outline" label="Join our Discord community!" />
      <Button variant="outline" label="Follow us on Twitter!" />
    </Section>
    <Footer
      {...(unpack(FooterStories.args!) as ComponentProps<typeof Footer>)}
    />
  </>
);

const meta: Meta<typeof Page> = {
  component: Page,
  title: "Pages / Content / Landingpage",
  parameters: {
    layout: "fullscreen",
    controls: { disabled: true },
  },
};
export default meta;
type Story = StoryObj<typeof Page>;

export const Landingpage: Story = {};
