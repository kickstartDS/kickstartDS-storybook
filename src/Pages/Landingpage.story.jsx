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
} from "@kickstartds/content";

export default {
  title: "Landingpage",
};

import { Header } from "../header/HeaderComponent";
import { Footer } from "../footer/FooterComponent";

const Page = () => (
  <>
    <Header />
    <Section
      width="full"
      spaceBefore="none"
      spaceAfter="none"
    >
      <Visual
        box={{
          background: "transparent",
          enabled: true,
          headline: {
            content:
              "Building a design system for all your digital touch points feels now like squeezing a lemon",
          },
          horizontal: "left",
          indent: false,
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
            "[kickstartDS](http://example.com/) is the comprehensive pattern library and **design system**, that **helps** web development **teams to create** consistent and brand compliant web **frontends super efficiently**.",
          vertical: "center",
        }}
        height="fullScreen"
        media={{
          image: {
            indent: "none",
            srcDesktop: "img/visual/visual_lemon.png",
            srcMobile: "img/visual/visual_lemon-m.png",
            srcTablet: "img/visual/visual_lemon.png",
          },
          mode: "image",
        }}
      />
    </Section>
    <Section width="wide" spaceBefore="small" spaceAfter="small">
      <LogoTiles
        logos={[
          {
            alt: "Shopify",
            src:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/640px-Shopify_logo_2018.svg.png",
          },
          {
            alt: "Contentful",
            src:
              "https://d21buns5ku92am.cloudfront.net/41748/images/177922-logo-d8345a-large-1441290673.png",
          },
          {
            alt: "Gatsby",
            src:
              "https://timotheebinet.com/static/fa38ab30a9b8abb4a1ff8c0b7fb86cef/00d43/gatsby.png",
          },
          {
            alt: "Bigcommerce",
            src:
              "https://www-cdn.bigcommerce.com/assets/mediakit/logo-plain.png",
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
    <Section 
    background="accent"

    spaceAfter="small"
    spaceBefore="small"
    >
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
        pageHeader: false,
        spaceAfter: "none",
      }}
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
    <Footer/>
  </>
);

const Template = (args) => <Page {...args} />;
export const Landingpage = Template.bind({});
