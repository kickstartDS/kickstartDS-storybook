import { Section } from "@kickstartds/base/lib/section";
import { TeaserBox } from "@kickstartds/base/lib/teaser-box";
import { LinkButton } from "@kickstartds/base/lib/link-button";
import { Visual } from "@kickstartds/content/lib/visual";
import { LinkProvider } from './LinkProvider';

export const Welcome = () => (
  <LinkProvider>
    <Section width="full" spaceBefore="none" spaceAfter="none">
      <Visual
        box={{
          background: "transparent",
          enabled: true,
          headline: {
            content: "Welcome to the kickstartDS Design System",
          },
          horizontal: "left",
          indent: false,
          link: {
            className: "c-button--main",
            enabled: false,
            fillAnimation: false,
            href: "https://example.com",
            iconAfter: true,
            iconAnimation: false,
            iconBefore: false,
            icon: {
              icon: "chevron-right",
            },
            label: "Show ",
            newTab: false,
            size: "medium",
            variant: "solid",
          },
          text:
            "Explore our component library, backing our landing page, blog and glossary. Explore our design and component tokens, interact with controls, or explore sample pages we've assembled.",
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

    <Section
      gutter="default"
      headline={{
        align: "center",
        content: "Explore",
        level: "h2",
        pageHeader: false,
        spaceAfter: "none",
      }}
      mode="tile"
      spaceAfter="small"
      spaceBefore="small"
      width="max"
    >
      <TeaserBox
        topic="Design Tokens"
        text="Design Tokens encode your main brand identity, including colors, fonts and typography. Explore all defined values, ready to be copied and used!"
        link={{
          fillAnimation: true,
          href: "sb:design-tokens-colors:page",
          iconAfter: false,
          iconAnimation: false,
          iconBefore: false,
          label: "View Tokens",
          newTab: false,
          size: "small",
          variant: "outline",
        }}
      />
      <TeaserBox
        topic="Controls"
        text="Controls provide explorative access to our JSON Schema defined structural options, giving designers, developers and content editors all needed power!"
        link={{
          fillAnimation: true,
          href: "sb:content-visual:box-hell",
          iconAfter: false,
          iconAnimation: false,
          iconBefore: false,
          label: "Show controls",
          newTab: false,
          size: "small",
          variant: "outline",
        }}
      />
      <TeaserBox
        topic="Pages"
        text="Pages show the potential to quickly prototype views independently, and early in your development cycle. Test your assumptions, before expensively implementing!"
        link={{
          fillAnimation: true,
          href: "sb:pages:landingpage",
          iconAfter: false,
          iconAnimation: false,
          iconBefore: false,
          label: "Explore pages",
          newTab: false,
          size: "small",
          variant: "outline",
        }}
      />
    </Section>

    <Section
      gutter="default"
      mode="list"
      spaceAfter="small"
      spaceBefore="small"
      width="narrow"
    >
      <LinkButton
        fillAnimation
        href="https://kickstartds.com"
        label="Learn more on our website"
        size="large"
        type="button"
        variant="solid"
      />
    </Section>
  </LinkProvider>
);