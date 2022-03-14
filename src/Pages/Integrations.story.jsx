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
  title: "Integrations",
};

import { Header } from "../header/HeaderComponent";
import HeaderStories from "../header/Header.stories";
import { Footer } from "../footer/FooterComponent";

const Page = () => (
  <>
    <Header {...HeaderStories.args} />
    <Section
      width="default"
      spaceBefore="default"
      spaceAfter="default"
      background="accent"
      variant="head"
      // pattern="1"
      headline={{
        content: "Backend integration with kickstartDS",
        level: "h2",
        styleAs: "h1",
        align: "center",
        spaceAfter: "small",
      }}
    >
      <TextMedia
        media={[
          {
            image: {
              height: 853,
              src: "img/integration/backend/backend.png",
              width: 1280,
            },
          },
        ]}
      />
    </Section>
    <Section
      mode="list"
      width="wide"
      spaceBefore="default"
      gutter="none"
      variant="body"
      spaceBefore="none"
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
          source: "img/integration/backend/sanity.png",
          order: {
            desktopImageLast: false,
          },
        }}
      />
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
          source: "img/integration/backend/wordpress.png",
          order: {
            desktopImageLast: true,
          },
        }}
      />
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
          source: "img/integration/backend/contentful.png",
          order: {
            desktopImageLast: false,
          },
        }}
      />
    </Section>
    <Section
      width="default"
      spaceBefore="default"
      spaceAfter="default"
      variant="head"
      background="dark"
      // pattern="2"
      headline={{
        content: "Generators with kickstartDS",
        level: "h2",
        styleAs: "h1",
        align: "center",
        spaceAfter: "small",
      }}
    >
      <TextMedia
        media={[
          {
            image: {
              height: 853,
              src: "img/integration/generatoren/generatoren.png",
              width: 1280,
            },
          },
        ]}
      />
    </Section>
    <Section
      mode="list"
      width="wide"
      spaceBefore="default"
      gutter="none"
      background="dark-accent"
      variant="body"
      spaceBefore="none"
    >
      <Storytelling
        box={{
          link: {
            label: "read more",
            variant: "solid-inverted",
          },
          headline: {
            content: "Lorem Ipsum dolor",
          },
          text: "kickstart DS is the foundation for your design system with reusable components and tools, guided by clear standards, that can be assembled together to build digital products.",
        }}
        image={{
          source: "img/integration/generatoren/nextjs.png",
          order: {
            desktopImageLast: false,
          },
        }}
      />
      <Storytelling
        box={{
          link: {
            label: "read more",
            variant: "solid-inverted",
          },
          headline: {
            content: "Lorem Ipsum dolor",
          },
          text: "kickstart DS is the foundation for your design system with reusable components and tools, guided by clear standards, that can be assembled together to build digital products.",
        }}
        image={{
          source: "img/integration/generatoren/gatsby.png",
          order: {
            desktopImageLast: true,
          },
        }}
      />
      <Storytelling
        box={{
          link: {
            label: "read more",
            variant: "solid-inverted",
          },
          headline: {
            content: "Lorem Ipsum dolor",
          },
          text: "kickstart DS is the foundation for your design system with reusable components and tools, guided by clear standards, that can be assembled together to build digital products.",
        }}
        image={{
          source: "img/integration/generatoren/graphql.png",
          order: {
            desktopImageLast: false,
          },
        }}
      />
    </Section>
    <Section
      width="wide"
      spaceBefore="default"
      spaceAfter="defaultz"
      background="accent"
      variant="head"
      // pattern="1"
      headline={{
        content: "Design tooling with kickstartDS",
        level: "h2",
        styleAs: "h1",
        align: "center",
        spaceAfter: "small",
      }}
    >
      <TextMedia
        media={[
          {
            image: {
              height: 853,
              src: "img/integration/design-tooling/design-tooling.png",
              width: 1280,
            },
          },
        ]}
      />
    </Section>
    <Section
      mode="list"
      width="wide"
      spaceBefore="default"
      variant="body"
      spaceBefore="none"
      gutter="none"
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
          source: "img/integration/design-tooling/styledictionary.png",
          order: {
            desktopImageLast: false,
          },
        }}
      />
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
          source: "img/integration/design-tooling/figma.png",
          order: {
            desktopImageLast: true,
          },
        }}
      />
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
          source: "img/integration/design-tooling/uxpin.png",
          order: {
            desktopImageLast: false,
          },
        }}
      />
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
          source: "img/integration/design-tooling/backlight.png",
          order: {
            desktopImageLast: true,
          },
        }}
      />
    </Section>

    <Section
      headline={{
        content: "Integration with",
        align: "center",
      }}
      variant="body"
      spaceBefore="default"
      background="accent"
      spaceAfter="none"
      align="center"
    >
      <ContentBox image="/logos/logo_storybook.svg" />
    </Section>

    <Section background="accent" spaceBefore="small" width="wide">
      <ContentBox
        image="/img/integration/storybook/storybook_controls.svg"
        topic="Controls"
        text="kickstart DS is the foundation for your design system with reusable components and tools."
      />
      <ContentBox
        image="/img/integration/storybook/storybook_tokens.svg"
        topic="Tokens"
        text="kickstart DS is the foundation for your design system with reusable components and tools."
      />
      <ContentBox
        image="/img/integration/storybook/storybook_composition.svg"
        topic="Composition"
        text="kickstart DS is the foundation for your design system with reusable components and tools."
      />
      <ContentBox
        image="/img/integration/storybook/storybook_json-schema.svg"
        topic="Json Schema"
        text="kickstart DS is the foundation for your design system with reusable components and tools."
      />
    </Section>
    <Section
      width="default"
      spaceBefore="default"
      spaceAfter="defaultz"
      background="dark"
      variant="head"
      // pattern="3"
      headline={{
        content: "Derivatives with kickstartDS",
        level: "h2",
        styleAs: "h1",
        align: "center",
        spaceAfter: "none",
      }}
    >
      <TextMedia
        media={[
          {
            image: {
              height: 853,
              src: "img/integration/derivatives/derivatives.png",
              width: 1280,
            },
          },
        ]}
      />
    </Section>
    <Section
      mode="list"
      width="wide"
      spaceBefore="default"
      variant="body"
      spaceBefore="none"
      gutter="none"
      background="dark-accent"
    >
      <Storytelling
        box={{
          link: {
            label: "read more",
            variant: "solid-inverted",
          },
          headline: {
            content: "Lorem Ipsum dolor",
          },
          text: "kickstart DS is the foundation for your design system with reusable components and tools, guided by clear standards, that can be assembled together to build digital products.",
        }}
        image={{
          source: "img/integration/derivatives/bootstrap.png",
          order: {
            desktopImageLast: false,
          },
        }}
      />
      <Storytelling
        box={{
          link: {
            label: "read more",
            variant: "solid-inverted",
          },
          headline: {
            content: "Lorem Ipsum dolor",
          },
          text: "kickstart DS is the foundation for your design system with reusable components and tools, guided by clear standards, that can be assembled together to build digital products.",
        }}
        image={{
          source: "img/integration/derivatives/materialui.png",
          order: {
            desktopImageLast: true,
          },
        }}
      />
    </Section>
    <Footer {...FooterStories.args} />
  </>
);

const Template = (args) => <Page {...args} />;
export const Integrations = Template.bind({});
