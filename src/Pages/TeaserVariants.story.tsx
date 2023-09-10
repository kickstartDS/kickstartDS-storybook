import type { Meta, StoryObj } from "@storybook/react";
import { Section } from "@kickstartds/base/lib/section";
import { TeaserBox } from "@kickstartds/base/lib/teaser-box";

const Page = () => (
  <>
    <Section
      gutter="default"
      headline={{
        align: "center",
        content: "Style Light Background White",
        level: "h2",
        spaceAfter: "minimum",
      }}
      spaceAfter="default"
      spaceBefore="default"
      width="default"
    >
      <TeaserBox
        topic="Lorem Ipsum"
        text="kickstartDS makes it easy to implement and use [its packages](http://example.com/) across any framework or no framework at all. We accomplish this by using standardized web platform APIs and [Web Components](http://example.com/)."
        link={{
          href: "https://example.com",
          iconAnimation: false,
          label: "Mehr erfahren",
          newTab: false,
          size: "medium",
          variant: "solid",
        }}
        ratio="4:3"
      />
      <TeaserBox
        topic="Accessibility baked in"
        text="kickstartDS comes accessibility baked in and provides support for W3C’s [WCAG 2.1 spec](http://example.com/). We make sure all our components support touch screens, keyboard navigation, screen readers, and more."
        link={{
          href: "https://example.com",
          iconAnimation: false,
          label: "Mehr erfahren",
          newTab: false,
          size: "medium",
          variant: "solid",
        }}
        ratio="4:3"
      />
      <TeaserBox
        topic="Powerful theming tools"
        text="kickstartDS comes in two themes and allows you to choose globally or locally [per component](http://example.com/) which theme you want to utilize."
        link={{
          href: "https://example.com",
          iconAnimation: false,
          label: "Mehr erfahren",
          newTab: false,
          size: "medium",
          variant: "solid",
        }}
        ratio="4:3"
      />
    </Section>

    <Section
      gutter="default"
      headline={{
        align: "center",
        content: "Style Light Background Dark",
        level: "h2",
        spaceAfter: "minimum",
      }}
      ks-inverted="true"
      spaceAfter="default"
      spaceBefore="default"
      width="default"
    >
      <TeaserBox
        topic="Lorem Ipsum"
        text="kickstartDS makes it easy to implement and use [its packages](http://example.com/) across any framework or no framework at all. We accomplish this by using standardized web platform APIs and [Web Components](http://example.com/)."
        link={{
          href: "https://example.com",
          iconAnimation: false,
          label: "Mehr erfahren",
          newTab: false,
          size: "medium",
          variant: "solid",
        }}
        ratio="4:3"
      />
      <TeaserBox
        topic="Accessibility baked in"
        text="kickstartDS comes accessibility baked in and provides support for W3C’s [WCAG 2.1 spec](http://example.com/). We make sure all our components support touch screens, keyboard navigation, screen readers, and more."
        link={{
          href: "https://example.com",
          iconAnimation: false,
          label: "Mehr erfahren",
          newTab: false,
          size: "medium",
          variant: "solid",
        }}
        ratio="4:3"
      />
      <TeaserBox
        topic="Powerful theming tools"
        text="kickstartDS comes in two themes and allows you to choose globally or locally [per component](http://example.com/) which theme you want to utilize."
        link={{
          href: "https://example.com",
          iconAnimation: false,
          label: "Mehr erfahren",
          newTab: false,
          size: "medium",
          variant: "solid",
        }}
        ratio="4:3"
      />
    </Section>

    <Section
      gutter="default"
      headline={{
        align: "center",
        content: "Style Dark Background Accent",
        level: "h2",
        spaceAfter: "minimum",
      }}
      background="accent"
      spaceAfter="default"
      spaceBefore="default"
      width="default"
    >
      <TeaserBox
        inverted={true}
        topic="Lorem Ipsum"
        text="kickstartDS makes it easy to implement and use [its packages](http://example.com/) across any framework or no framework at all. We accomplish this by using standardized web platform APIs and [Web Components](http://example.com/)."
        link={{
          href: "https://example.com",
          iconAnimation: false,
          label: "Mehr erfahren",
          newTab: false,
          size: "medium",
          variant: "solid",
        }}
        ratio="4:3"
      />
      <TeaserBox
        inverted={true}
        topic="Accessibility baked in"
        text="kickstartDS comes accessibility baked in and provides support for W3C’s [WCAG 2.1 spec](http://example.com/). We make sure all our components support touch screens, keyboard navigation, screen readers, and more."
        link={{
          href: "https://example.com",
          iconAnimation: false,
          label: "Mehr erfahren",
          newTab: false,
          size: "medium",
          variant: "solid",
        }}
        ratio="4:3"
      />
      <TeaserBox
        inverted={true}
        topic="Powerful theming tools"
        text="kickstartDS comes in two themes and allows you to choose globally or locally [per component](http://example.com/) which theme you want to utilize."
        link={{
          href: "https://example.com",
          iconAnimation: false,
          label: "Mehr erfahren",
          newTab: false,
          size: "medium",
          variant: "solid",
        }}
        ratio="4:3"
      />
    </Section>

    <Section
      gutter="default"
      headline={{
        align: "center",
        content: "Style Dark Background Dark",
        level: "h2",
        spaceAfter: "minimum",
      }}
      ks-inverted="true"
      spaceAfter="default"
      spaceBefore="default"
      width="default"
    >
      <TeaserBox
        inverted={true}
        topic="Lorem Ipsum"
        text="kickstartDS makes it easy to implement and use [its packages](http://example.com/) across any framework or no framework at all. We accomplish this by using standardized web platform APIs and [Web Components](http://example.com/)."
        link={{
          href: "https://example.com",
          iconAnimation: false,
          label: "Mehr erfahren",
          newTab: false,
          size: "medium",
          variant: "solid",
        }}
        ratio="4:3"
      />
      <TeaserBox
        inverted={true}
        topic="Accessibility baked in"
        text="kickstartDS comes accessibility baked in and provides support for W3C’s [WCAG 2.1 spec](http://example.com/). We make sure all our components support touch screens, keyboard navigation, screen readers, and more."
        link={{
          href: "https://example.com",
          iconAnimation: false,
          label: "Mehr erfahren",
          newTab: false,
          size: "medium",
          variant: "solid",
        }}
        ratio="4:3"
      />
      <TeaserBox
        inverted={true}
        topic="Powerful theming tools"
        text="kickstartDS comes in two themes and allows you to choose globally or locally [per component](http://example.com/) which theme you want to utilize."
        link={{
          href: "https://example.com",
          iconAnimation: false,
          label: "Mehr erfahren",
          newTab: false,
          size: "medium",
          variant: "solid",
        }}
        ratio="4:3"
      />
    </Section>
    <Section
      gutter="default"
      headline={{
        align: "center",
        content: "Style Light Background Accent",
        level: "h2",
        spaceAfter: "minimum",
      }}
      background="accent"
      spaceAfter="default"
      spaceBefore="default"
      width="default"
    >
      <TeaserBox
        topic="Lorem Ipsum"
        text="kickstartDS makes it easy to implement and use [its packages](http://example.com/) across any framework or no framework at all. We accomplish this by using standardized web platform APIs and [Web Components](http://example.com/)."
        link={{
          href: "https://example.com",
          iconAnimation: false,
          label: "Mehr erfahren",
          newTab: false,
          size: "medium",
          variant: "solid",
        }}
        ratio="4:3"
      />
      <TeaserBox
        topic="Accessibility baked in"
        text="kickstartDS comes accessibility baked in and provides support for W3C’s [WCAG 2.1 spec](http://example.com/). We make sure all our components support touch screens, keyboard navigation, screen readers, and more."
        link={{
          href: "https://example.com",
          iconAnimation: false,
          label: "Mehr erfahren",
          newTab: false,
          size: "medium",
          variant: "solid",
        }}
        ratio="4:3"
      />
      <TeaserBox
        topic="Powerful theming tools"
        text="kickstartDS comes in two themes and allows you to choose globally or locally [per component](http://example.com/) which theme you want to utilize."
        link={{
          href: "https://example.com",
          iconAnimation: false,
          label: "Mehr erfahren",
          newTab: false,
          size: "medium",
          variant: "solid",
        }}
        ratio="4:3"
      />
    </Section>
    <Section
      gutter="default"
      headline={{
        align: "center",
        content: "Style Dark Background White",
        level: "h2",
        spaceAfter: "minimum",
      }}
      spaceAfter="default"
      spaceBefore="default"
      width="default"
    >
      <TeaserBox
        inverted={true}
        topic="Lorem Ipsum"
        text="kickstartDS makes it easy to implement and use [its packages](http://example.com/) across any framework or no framework at all. We accomplish this by using standardized web platform APIs and [Web Components](http://example.com/)."
        link={{
          href: "https://example.com",
          iconAnimation: false,
          label: "Mehr erfahren",
          newTab: false,
          size: "medium",
          variant: "solid",
        }}
        ratio="4:3"
      />
      <TeaserBox
        inverted={true}
        topic="Accessibility baked in"
        text="kickstartDS comes accessibility baked in and provides support for W3C’s [WCAG 2.1 spec](http://example.com/). We make sure all our components support touch screens, keyboard navigation, screen readers, and more."
        link={{
          href: "https://example.com",
          iconAnimation: false,
          label: "Mehr erfahren",
          newTab: false,
          size: "medium",
          variant: "solid",
        }}
        ratio="4:3"
      />
      <TeaserBox
        inverted={true}
        topic="Powerful theming tools"
        text="kickstartDS comes in two themes and allows you to choose globally or locally [per component](http://example.com/) which theme you want to utilize."
        link={{
          href: "https://example.com",
          iconAnimation: false,
          label: "Mehr erfahren",
          newTab: false,
          size: "medium",
          variant: "solid",
        }}
        ratio="4:3"
      />
    </Section>
  </>
);

const meta: Meta<typeof Page> = {
  component: Page,
  title: "TeaserVariants",
};
export default meta;
type Story = StoryObj<typeof Page>;

export const TeaserVariants: Story = {};
