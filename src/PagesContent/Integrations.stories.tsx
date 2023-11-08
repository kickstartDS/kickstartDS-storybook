import type { Meta, StoryObj } from "@storybook/react";
import { unpack } from "@kickstartds/core/lib/storybook";

import { TextMedia } from "@kickstartds/base/lib/text-media";
import { ContentBox } from "@kickstartds/base/lib/content-box";
import { Section } from "../section/SectionComponent";
import { TeaserBox } from "@kickstartds/base/lib/teaser-box";
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
    <Section
      className="additional-spacing-small four-grid"
      pattern="3"
      headline={{
        content: "Various integrations with kickstartDS",
        level: "h1",
        styleAs: "h1",
        spaceAfter: "large",
        align: "center",
      }}
    >
      <TeaserBox
        topic="Backend"
        image="img/integration/teaser/backend-teaser.svg"
        ratio="4:3"
        text="kickstart DS is the foundation for your design system"
        link={{
          label: "Go to",
          hidden: true,
        }}
      />
      <TeaserBox
        topic="Generators"
        image="img/integration/teaser/generatoren-teaser.svg"
        ratio="4:3"
        text="System with reusable components and tools"
        link={{
          label: "Go to",
          hidden: true,
        }}
      />
      <TeaserBox
        topic="Design Tooling"
        image="img/integration/teaser/design-tooling-teaser.svg"
        ratio="4:3"
        text="Guided by clear standards, that can be assembled together"
        link={{
          label: "Go to",
          hidden: true,
        }}
      />
      <TeaserBox
        topic="Derivatives"
        image="img/integration/teaser/derivatives-teaser.svg"
        ratio="4:3"
        text="Build digital product."
        link={{
          label: "Go to",
          hidden: true,
        }}
      />
    </Section>
    <Section
      width="default"
      spaceBefore="default"
      spaceAfter="default"
      background="accent"
      variant="head"
      headline={{
        content: "Backend integration with kickstartDS",
        level: "h2",
        styleAs: "h1",
        align: "center",
      }}
    >
      <TextMedia
        text=""
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
      id="integrations"
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
      ks-inverted="true"
      // pattern="2"
      headline={{
        content: "Generators with kickstartDS",
        level: "h2",
        styleAs: "h1",
        align: "center",
      }}
    >
      <TextMedia
        text=""
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
      background="accent"
      ks-inverted="true"
      variant="body"
    >
      <Storytelling
        box={{
          link: {
            label: "read more",
            variant: "solid",
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
            variant: "solid",
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
            variant: "solid",
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
      spaceBefore="default"
      spaceAfter="default"
      background="accent"
      variant="head"
      headline={{
        content: "Design tooling with kickstartDS",
        level: "h2",
        styleAs: "h1",
        align: "center",
      }}
    >
      <TextMedia
        text=""
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
    >
      <ContentBox className="center" image="/logos/logo_storybook.svg" />
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
      spaceAfter="default"
      ks-inverted="true"
      variant="head"
      headline={{
        content: "Derivatives with kickstartDS",
        level: "h2",
        styleAs: "h1",
        align: "center",
        spaceAfter: "minimum",
      }}
    >
      <TextMedia
        text=""
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
      gutter="none"
      background="accent"
      ks-inverted="true"
    >
      <Storytelling
        box={{
          link: {
            label: "read more",
            variant: "solid",
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
            variant: "solid",
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
    <Footer
      {...(unpack(FooterStories.args!) as ComponentProps<typeof Footer>)}
    />
  </>
);

const meta: Meta<typeof Page> = {
  component: Page,
  title: "Pages / Content / Integrations",
  parameters: {
    layout: "fullscreen",
    controls: { disabled: true },
  },
};
export default meta;
type Story = StoryObj<typeof Page>;

export const Integrations: Story = {};
