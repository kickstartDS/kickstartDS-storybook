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
  LogoTiles,
  CountUp,
} from "@kickstartds/content";
import FooterStories from '../footer/Footer.stories';

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
              "kickstartDS is the frontend first framework, a comprehensive component and pattern library",
            level: "h1",
            styleAs: "h1",
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
          text:
            `**helping** web development **teams to create** consistent and brand compliant web **frontends** super **efficiently**.\
            \
            So, building your **design system** for all your digital touch points feels now easy like squeeeeezing a lemon.`,
          vertical: "center",
        }}
        height="default"
        media={{
          image: {
            indent: "none",
            srcDesktop: "img/visual/bg-hero-lemon-desktop.svg",
            srcMobile: "img/visual/visual_lemon-m.png",
            srcTablet: "img/visual/visual_lemon.png",
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
      subheadline:"The foundation to scale your design system across all your platforms and website",
      level: "h2",
      styleAs: "h1",
      pageHeader: false,
      spaceAfter: "none",
    }}
    className="l-section--outer-width-wide custom-col"
    pattern="2"
    width="default"
    deko
    spaceAfter="small"
    spaceBefore="small"
    >
      <CountUp
        graphic="components"
        icon={[]}
        link={[

        ]}
        text="
      Use our components as **solid building blocks**, adapt and improve them as you need. From quickly adding design tokens to full customization. Utilizing all existing best practices!

      Benefit from **15+ years of frontend experience!**
      "
        to={41}
        topic="Components"
      />
      <CountUp
        graphic="properties"
        icon={[]}
        link={[

        ]}
        text="
      Every propertys' existence is **rooted in a real-world** decision; solving everyday problems for content creators.

      Quick discovery through Storybooks' rich interface, combined with **kickstartDS** rigorous JSON schema underneath.
      "
        to={1255}
        topic="Properties"
      />
      <CountUp
        graphic="tokens"
        icon={[]}
        link={[

        ]}
        text="
      Obviously we have **design tokens** – colors, fonts, sizes, iconography.

      Additionally every components has several layers of component tokens, encoding a solid base layer for you to depend upon. And for all the exciting cases: re-use the general tokens for **automatic brand compliance!**
      "
        to={695}
        topic="Tokens"
      />
    </Section>
    <Section
      width="wide"
      background="accent"

      headline={{
        align: "center",
        content: "Leverage rich integrations with modern web technology, refocus on what really matters!",
        subheadline:"Out-of-the-box kickstartDS let's you connect your interfaces to:",
        level: "h2",
        styleAs: "h1",
        pageHeader: false,
        spaceAfter: "none",
      }}
    >
      <LogoTiles
        logos={[
          {
            alt: "Shopify",
            src:
              "/logos/logo_contentful.svg",
          },
          {
            alt: "Contentful",
            src:
              "/logos/logo_gatsby.svg",
          },
          {
            alt: "Gatsby",
            src:
              "/logos/logo_netlify.svg",
          },
          {
            alt: "Bigcommerce",
            src:
              "/logos/logo_nextjs.svg",
          },
          {
            alt: "Gatsby",
            src:
              "/logos/logo_react.svg",
          },
          {
            alt: "Bigcommerce",
            src:
              "/logos/logo_wordpress.svg",
          },
        ]}
      />
    </Section>
    <Section
      gutter="default"
      headline={{
        align: "center",
        content: "Frontend first approach",
        subheadline:"... a holistic view of components; unifying content creators, developers, designers and stakeholders under one roof",
        level: "h2",
        styleAs: "h1",
        pageHeader: false,
        spaceAfter: "none",
      }}
      mode="tile"
      spaceAfter="small"
      spaceBefore="default"
      width="default"
      gutter="large"
      background="dark"
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
        content: "Great components",
        subheadline:
          "Make the most out of your frontends by unifying their core utilizing component and design tokens",
        level: "h2",
        styleAs: "h1",
        pageHeader: false,
        spaceAfter: "none",
      }}
      mode="list"
      deko={true}
      className="l-section--outer-width-max" /* Background Weite */
      pattern="1"
      width="narrow" /* Content Weite */
      background="dark"
      align="center"
      spaceAfter="small"
      spaceBefore="small"
    >
      <TextMedia
        mediaAlignment="above-center"
        text="kickstartDS is the foundation for your **design system** with reusable components and tools, guided by clear standards, that can be assembled together to **build digital** products: fast, flexible, responsive, accessible, xxx, yyy, zzz and the best of all:

you can plug it onto every digital touch point you own."
      />
      <Button
        className="c-button--main no-stretch"
        href="#"
        label="mehr erfahren"
        size="medium"
        type="button"
        variant="solid-inverted"
      />
    </Section>
    <Section background="accent" spaceAfter="small" spaceBefore="small">
      <Quote
        image="https://picsum.photos/seed/kdsquote/300/300"
        source="Max Mustermann, ABC GmbH"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
      />
    </Section>

    <Section
      gutter="default"
      headline={{
        align: "center",
        content: "What kickstartDS can do for you?",
        subheadline:
          "kickstartDS comes accessibility baked in and provides support",
        level: "h2",
        styleAs: "h1",
        pageHeader: false,
        spaceAfter: "none",
      }}
      pattern="2"
      mode="tile"
      spaceAfter="default"
      spaceBefore="default"
      width="default"
      background="accent"
    >
      <TeaserBox
        image="img/icons/Headline.svg"
        topic="Lorem Ipsum"
        text="kickstartDS makes it easy to implement and use [its packages](http://example.com/) across any framework or no framework at all. We accomplish this by using standardized web platform APIs and [Web Components](http://example.com/)."
      />
      <TeaserBox
        image="img/icons/Quote.svg"
        topic="Accessibility baked in"
        text="kickstartDS comes accessibility baked in and provides support for W3C’s [WCAG 2.1 spec](http://example.com/). We make sure all our components support touch screens, keyboard navigation, screen readers, and more."
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
      headline={{
        align: "center",
        content: "What kickstartDS can do for you?",
        level: "h2",
        styleAs: "h1",
        pageHeader: false,
        spaceAfter: "none",
      }}
      deko={true}
      className="l-section--outer-width-wide"
      mode="tile"
      spaceAfter="default"
      spaceBefore="default"
      width="default"
    >
      <ContentBox
        image="https://picsum.photos/seed/kdsteaserbox/500/300"
        ratio="16:9"
        topic="Lorem Ipsum"
        text="kickstartDS makes it easy to implement and use [its packages](http://example.com/) across any framework or no framework at all. We accomplish this by using standardized web platform APIs and [Web Components](http://example.com/)."
      />
      <ContentBox
        image="https://picsum.photos/seed/kdsteaserbox/500/300"
        ratio="16:9"
        topic="Accessibility baked in"
        text="kickstartDS comes accessibility baked in and provides support for W3C’s [WCAG 2.1 spec](http://example.com/). We make sure all our components support touch screens, keyboard navigation, screen readers, and more."
      />
      <ContentBox
        image="https://picsum.photos/seed/kdsteaserbox/500/300"
        ratio="16:9"
        topic="Powerful theming tools"
        text="kickstartDS comes in two themes and allows you to choose globally or locally [per component](http://example.com/) which theme you want to utilize."
      />
    </Section>
    <Footer {...FooterStories.args} />
  </>
);

const Template = (args) => <Page {...args} />;
export const Landingpage = Template.bind({});
