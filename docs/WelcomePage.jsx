import { Button } from "@kickstartds/base/lib/button";
import { Section } from "@kickstartds/base/lib/section";
import { TeaserBox } from "@kickstartds/base/lib/teaser-box";
import { ContentBox } from "@kickstartds/base/lib/content-box";
import { Headline } from "@kickstartds/base/lib/headline";
import { Visual } from "@kickstartds/content/lib/visual";

export const Welcome = () => (
  <>
    <Section width="full" spaceBefore="none" spaceAfter="small">
      <Visual
        className="c-visual--welcome"
        box={{
          background: "transparent",
          enabled: true,
          headline: {
            level: "h1",
            styleAs: "h1",
            content: "Say hi to our Design System & Demo space",
            subheadline: "kickstartDS is an Open Source framework for Design System creation",
          },
          horizontal: "center",
          indent: false,
          link: {
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
          text: "This Storybook serves us to display and experience our **own Design System** application, but it should also show serve you as a **demo**, to explore the different **component modules**, with its comprehensive components, inclouding design and component tokens, interact with the Storybook controls, or preview sample recipes or pages we've assembled.",
          vertical: "top",
        }}
        height="small"
        media={{
          image: {
            indent: "none",
            srcDesktop: "img/banner/welcome-centered.svg",
            srcTablet: "img/banner/welcome-centered.svg",
            srcMobile: "img/banner/welcome-centered-m.svg",
          },
          mode: "image",
        }}
      />
    </Section>

    <Section
      headline={{
        align: "center",
        content: "Getting started with ...",
        level: "h2",
        pageHeader: false,
      }}
      className="col-four"
      mode="tile"
      spaceAfter="small"
      spaceBefore="small"
      width="max"
    >
      <TeaserBox
        topic="Design Tokens"
        text="Design Tokens encode your main brand identity, including colors, fonts and typography. Explore all defined values, ready to be copied and used in your project."
        link={{
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
          href: "sb:content-visual:box-light",
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
        topic="Dev Documentation"
        text="Get started in just 5 minutes with our extensive documentation around the creation of Design Systems, including explaination and guides on how to create your Design System."
        link={{
          href: "https://www.kickstartds.com/docs",
          iconAfter: false,
          iconAnimation: false,
          iconBefore: false,
          label: "Get started",
          newTab: false,
          variant: "outline",
        }}
      />
    </Section>
    <Section
      className="col-four"
      spaceAfter="small"
      spaceBefore="small"
      width="max"
    >
      <TeaserBox
        topic="Design System Concierge"
        text="Our AI-powered DS assistant helps by providing expert guidance and pointing you towards the right Design System resources."
        link={{
          href: "https://www.kickstartds.com/concierge",
          iconAfter: false,
          iconAnimation: false,
          iconBefore: false,
          label: "View Recipes",
          newTab: true,
          variant: "solid",
        }}
      />
      <div>
        <ContentBox image="img/concierge-sources-hand-storybook.svg" />
        <Headline
          content="Design System Concierge"
          styleAs="h2"
          subheadline="Your AI-powered Design System assistant"
          align="center"
          className="no-spacing"
        />
      </div>
    </Section>
    <Section
      className="col-four"
      spaceAfter="small"
      spaceBefore="small"
      width="max"
    >
      <div>
        <ContentBox image="img/lightbulb.png" />
        <Headline
          content="Need inspiration?"
          styleAs="h2"
          subheadline="Check out our Recipe catalogue"
          align="center"
          className="no-spacing"
        />
      </div>
      <TeaserBox
        topic="Recipes"
        text="Explore the possibilities of kickstartDS in our component-cookbook. It shows a variety of use cases, easy for you to recreate and to play around with."
        link={{
          href: "sb:recipes-hero:angled-image",
          iconAfter: false,
          iconAnimation: false,
          iconBefore: false,
          label: "View Recipes",
          newTab: false,
          variant: "outline",
        }}
      />
    </Section>

    <Section
      gutter="default"
      headline={{
        align: "left",
        content: "Next-gen UI-development toolkit",
        level: "h2",
        pageHeader: false,
        subheadline:
          "and framework for Design System creation",
      }}
      mode="list"
      spaceAfter="small"
      spaceBefore="small"
      width="max"
      deko="true"
      pattern="1"
      ks-inverted="true"
    >
      <TeaserBox
        topic="Learn how to own a Design System without investing years of development"
        darkStyle
        text="With **kickstartDS** teams are able to design, build, and organize UI components better and faster. Using Storybook you make sure every element aligns with all the responsive scenarios your users may encounter!"
        link={{
          href: "https://www.kickstartds.com/docs",
          iconAfter: false,
          iconAnimation: false,
          iconBefore: false,
          label: "Try it, it's Open Source",
          newTab: true,
          variant: "solid",
        }}
      />
    </Section>

    <Section
      gutter="default"
      spaceAfter="small"
      spaceBefore="small"
      width="narrow"
    >
      <div align="center">
        <Button
          className="no-stretch"
          href="https://www.kickstartds.com"
          label="... or learn more on our website"
          size="default"
          type="button"
          highlighted
          deko
          variant="solid"
        />
      </div>
    </Section>
  </>
);
