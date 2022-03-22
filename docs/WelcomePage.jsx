import { Section } from "@kickstartds/base/lib/section";
import { TeaserBox } from "@kickstartds/base/lib/teaser-box";
import { LinkButton } from "@kickstartds/base/lib/link-button";
import { Visual } from "@kickstartds/content/lib/visual";

export const Welcome = () => (
  <>
    <Section width="full" spaceBefore="none" spaceAfter="none">
      <Visual
        className="c-visual--welcome"
        box={{
          background: "transparent",
          enabled: true,
          headline: {
            level: "h1",
            styleAs: "h1",
            content: "Welcome 👋",
            subheadline: "Get started with the kickstartDS Design System!",
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
          text: "Explore our frontend first framework, and all of its comprehensive components backing our landing page, our Wordpress blog and the glossary. Take a deeper look at our design and component tokens, interact with the Storybook controls, or preview some sample pages we've assembled.",
          vertical: "top",
        }}
        height="small"
        media={{
          image: {
            indent: "none",
            srcDesktop: "img/banner/visual_lemon.png",
            srcMobile: "img/lemon.svg",
            srcTablet: "img/banner/visual_lemon.png",
          },
          mode: "image",
        }}
      />
    </Section>

    <Section
      gutter="default"
      headline={{
        align: "center",
        content: "Getting started with ...",
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
        text="Design Tokens encode your main brand identity, including colors, fonts and typography. Explore all defined values, ready to be copied and used in your project."
        link={{
          fillAnimation: true,
          href: "sb:design-tokens-colors:page",
          iconAfter: false,
          iconAnimation: false,
          iconBefore: false,
          label: "View Tokens",
          newTab: false,
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
          variant: "outline",
        }}
      />
      <TeaserBox
        topic="Pages"
        text="Pages show the potential to quickly prototype views independently, and early, in your development cycle. Test your assumptions, before implementing!"
        link={{
          fillAnimation: true,
          href: "sb:pages:landingpage",
          iconAfter: false,
          iconAnimation: false,
          iconBefore: false,
          label: "Explore pages",
          newTab: false,
          variant: "outline",
        }}
      />
      <TeaserBox
        topic="Blog"
        text="Learn about the newest developments, or explore background articles about our architectural choices, and the rationale behind our decisions!"
        link={{
          fillAnimation: true,
          href: "https://www.kickstartds.com/blog",
          iconAfter: false,
          iconAnimation: false,
          iconBefore: false,
          label: "Read more",
          newTab: false,
          variant: "outline",
        }}
      />
    </Section>

    <Section
      gutter="default"
      headline={{
        align: "left",
        content: "Frontend first framework",
        level: "h2",
        pageHeader: false,
        spaceAfter: "none",
        subheadline:
          "Proven content components to serve your frontend needs. It works for either explicit HTML integration or direct usage in React (for the start) and comes with built-in styleguide and documentation.",
      }}
      mode="list"
      spaceAfter="small"
      spaceBefore="small"
      width="max"
      background="dark"
      deko="true"
      pattern="1"
    >
      <TeaserBox
        topic="Interested and want to know more?"
        darkStyle
        text="**kickstartDS** is made for productivity. And so are we! Start the conversation today, tell us what you think and let's discuss if kickstartDS could be a real option for your next project."
        link={{
          href: "mailto:hello@kickstartds.com",
          iconAfter: false,
          iconAnimation: false,
          iconBefore: false,
          label: "Send us an email",
          newTab: true,
          variant: "solid-inverted",
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
        className="c-button--main"
        href="https://www.kickstartds.com"
        label="... or learn more on our website"
        size="default"
        type="button"
        variant="solid"
      />
    </Section>
  </>
);
