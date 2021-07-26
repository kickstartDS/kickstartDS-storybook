import {
  Section,
  TextMedia,
  Headline,
  ContentBox,
  TeaserBox,
  Divider,
} from "@kickstartds/base";
import {
  Visual,
  CollapsibleBox,
  Contact,
  Quote,
  LogoTiles,
} from "@kickstartds/content";

export default {
  title: "TeaserVariants",
};

const Page = () => (
  <>
    <Section
      gutter="default"
      headline={{
        align: 'center',
        content: 'Style Light Background White',
        level: 'h2',
        pageHeader: false,
        spaceAfter: 'none'
      }}
      mode="tile"
      spaceAfter="default"
      spaceBefore="default"
      width="default"
    >
      <TeaserBox
        image="img/icons/Headline.svg"
        topic="Lorem Ipsum"
        text="kickstartDS makes it easy to implement and use [its packages](http://example.com/) across any framework or no framework at all. We accomplish this by using standardized web platform APIs and [Web Components](http://example.com/)."
        link={{
          fillAnimation: false,
          href: 'https://example.com',
          iconAfter: false,
          iconAnimation: false,
          iconBefore: false,
          label: 'Mehr erfahren',
          newTab: false,
          size: 'medium',
          variant: 'solid'
        }}
      />
      <TeaserBox
        image="img/icons/Quote.svg"
        topic="Accessibility baked in"
        text="kickstartDS comes accessibility baked in and provides support for W3C’s [WCAG 2.1 spec](http://example.com/). We make sure all our components support touch screens, keyboard navigation, screen readers, and more."
        link={{
          fillAnimation: false,
          href: 'https://example.com',
          iconAfter: false,
          iconAnimation: false,
          iconBefore: false,
          label: 'Mehr erfahren',
          newTab: false,
          size: 'medium',
          variant: 'solid'
        }}
      />
      <TeaserBox
        image="img/icons/Slider.svg"
        topic="Powerful theming tools"
        text="kickstartDS comes in two themes and allows you to choose globally or locally [per component](http://example.com/) which theme you want to utilize."
        link={{
          fillAnimation: false,
          href: 'https://example.com',
          iconAfter: false,
          iconAnimation: false,
          iconBefore: false,
          label: 'Mehr erfahren',
          newTab: false,
          size: 'medium',
          variant: 'solid'
        }}
      />
    </Section>

    <Section
      gutter="default"
      headline={{
        align: 'center',
        content: 'Style Light Background Dark',
        level: 'h2',
        pageHeader: false,
        spaceAfter: 'none'
      }}
      background="dark"
      mode="tile"
      spaceAfter="default"
      spaceBefore="default"
      width="default"
    >
      <TeaserBox
        image="img/icons/Headline.svg"
        topic="Lorem Ipsum"
        text="kickstartDS makes it easy to implement and use [its packages](http://example.com/) across any framework or no framework at all. We accomplish this by using standardized web platform APIs and [Web Components](http://example.com/)."
        link={{
          fillAnimation: false,
          href: 'https://example.com',
          iconAfter: false,
          iconAnimation: false,
          iconBefore: false,
          label: 'Mehr erfahren',
          newTab: false,
          size: 'medium',
          variant: 'solid'
        }}
      />
      <TeaserBox
        image="img/icons/Quote.svg"
        topic="Accessibility baked in"
        text="kickstartDS comes accessibility baked in and provides support for W3C’s [WCAG 2.1 spec](http://example.com/). We make sure all our components support touch screens, keyboard navigation, screen readers, and more."
        link={{
          fillAnimation: false,
          href: 'https://example.com',
          iconAfter: false,
          iconAnimation: false,
          iconBefore: false,
          label: 'Mehr erfahren',
          newTab: false,
          size: 'medium',
          variant: 'solid'
        }}
      />
      <TeaserBox
        image="img/icons/Slider.svg"
        topic="Powerful theming tools"
        text="kickstartDS comes in two themes and allows you to choose globally or locally [per component](http://example.com/) which theme you want to utilize."
        link={{
          fillAnimation: false,
          href: 'https://example.com',
          iconAfter: false,
          iconAnimation: false,
          iconBefore: false,
          label: 'Mehr erfahren',
          newTab: false,
          size: 'medium',
          variant: 'solid'
        }}
      />
    </Section>

    <Section
      gutter="default"
      headline={{
        align: 'center',
        content: 'Style Dark Background Accent',
        level: 'h2',
        pageHeader: false,
        spaceAfter: 'none'
      }}
      background="accent"
      mode="tile"
      spaceAfter="default"
      spaceBefore="default"
      width="default"
    >
      <TeaserBox
        darkStyle= "true"
        image="img/icons/Headline-dark.svg"
        topic="Lorem Ipsum"
        text="kickstartDS makes it easy to implement and use [its packages](http://example.com/) across any framework or no framework at all. We accomplish this by using standardized web platform APIs and [Web Components](http://example.com/)."
        link={{
          fillAnimation: false,
          href: 'https://example.com',
          iconAfter: false,
          iconAnimation: false,
          iconBefore: false,
          label: 'Mehr erfahren',
          newTab: false,
          size: 'medium',
          variant: 'solid-inverted'
        }}
      />
      <TeaserBox
        darkStyle= "true"
        image="img/icons/Quote-dark.svg"
        topic="Accessibility baked in"
        text="kickstartDS comes accessibility baked in and provides support for W3C’s [WCAG 2.1 spec](http://example.com/). We make sure all our components support touch screens, keyboard navigation, screen readers, and more."
        link={{
          fillAnimation: false,
          href: 'https://example.com',
          iconAfter: false,
          iconAnimation: false,
          iconBefore: false,
          label: 'Mehr erfahren',
          newTab: false,
          size: 'medium',
          variant: 'solid-inverted'
        }}
      />
      <TeaserBox
        darkStyle= "true"
        image="img/icons/Slider-dark.svg"
        topic="Powerful theming tools"
        text="kickstartDS comes in two themes and allows you to choose globally or locally [per component](http://example.com/) which theme you want to utilize."
        link={{
          fillAnimation: false,
          href: 'https://example.com',
          iconAfter: false,
          iconAnimation: false,
          iconBefore: false,
          label: 'Mehr erfahren',
          newTab: false,
          size: 'medium',
          variant: 'solid-inverted'
        }}
      />
    </Section>

    <Section
      gutter="default"
      headline={{
        align: 'center',
        content: 'Style Dark Background Dark',
        level: 'h2',
        pageHeader: false,
        spaceAfter: 'none'
      }}
      background="dark"
      mode="tile"
      spaceAfter="default"
      spaceBefore="default"
      width="default"
    >
      <TeaserBox
        darkStyle= "true"
        image="img/icons/Headline-dark.svg"
        topic="Lorem Ipsum"
        text="kickstartDS makes it easy to implement and use [its packages](http://example.com/) across any framework or no framework at all. We accomplish this by using standardized web platform APIs and [Web Components](http://example.com/)."
        link={{
          fillAnimation: false,
          href: 'https://example.com',
          iconAfter: false,
          iconAnimation: false,
          iconBefore: false,
          label: 'Mehr erfahren',
          newTab: false,
          size: 'medium',
          variant: 'solid-inverted'
        }}
      />
      <TeaserBox
        darkStyle= "true"
        image="img/icons/Quote-dark.svg"
        topic="Accessibility baked in"
        text="kickstartDS comes accessibility baked in and provides support for W3C’s [WCAG 2.1 spec](http://example.com/). We make sure all our components support touch screens, keyboard navigation, screen readers, and more."
        link={{
          fillAnimation: false,
          href: 'https://example.com',
          iconAfter: false,
          iconAnimation: false,
          iconBefore: false,
          label: 'Mehr erfahren',
          newTab: false,
          size: 'medium',
          variant: 'solid-inverted'
        }}
      />
      <TeaserBox
        darkStyle= "true"
        image="img/icons/Slider-dark.svg"
        topic="Powerful theming tools"
        text="kickstartDS comes in two themes and allows you to choose globally or locally [per component](http://example.com/) which theme you want to utilize."
        link={{
          fillAnimation: false,
          href: 'https://example.com',
          iconAfter: false,
          iconAnimation: false,
          iconBefore: false,
          label: 'Mehr erfahren',
          newTab: false,
          size: 'medium',
          variant: 'solid-inverted'
        }}
      />
    </Section>
    <Section
      gutter="default"
      headline={{
        align: 'center',
        content: 'Style Light Background Accent',
        level: 'h2',
        pageHeader: false,
        spaceAfter: 'none'
      }}
      background="accent"
      mode="tile"
      spaceAfter="default"
      spaceBefore="default"
      width="default"
    >
      <TeaserBox
        image="img/icons/Headline.svg"
        topic="Lorem Ipsum"
        text="kickstartDS makes it easy to implement and use [its packages](http://example.com/) across any framework or no framework at all. We accomplish this by using standardized web platform APIs and [Web Components](http://example.com/)."
        link={{
          fillAnimation: false,
          href: 'https://example.com',
          iconAfter: false,
          iconAnimation: false,
          iconBefore: false,
          label: 'Mehr erfahren',
          newTab: false,
          size: 'medium',
          variant: 'solid'
        }}
      />
      <TeaserBox
        image="img/icons/Quote.svg"
        topic="Accessibility baked in"
        text="kickstartDS comes accessibility baked in and provides support for W3C’s [WCAG 2.1 spec](http://example.com/). We make sure all our components support touch screens, keyboard navigation, screen readers, and more."
        link={{
          fillAnimation: false,
          href: 'https://example.com',
          iconAfter: false,
          iconAnimation: false,
          iconBefore: false,
          label: 'Mehr erfahren',
          newTab: false,
          size: 'medium',
          variant: 'solid'
        }}
      />
      <TeaserBox
        image="img/icons/Slider.svg"
        topic="Powerful theming tools"
        text="kickstartDS comes in two themes and allows you to choose globally or locally [per component](http://example.com/) which theme you want to utilize."
        link={{
          fillAnimation: false,
          href: 'https://example.com',
          iconAfter: false,
          iconAnimation: false,
          iconBefore: false,
          label: 'Mehr erfahren',
          newTab: false,
          size: 'medium',
          variant: 'solid'
        }}
      />
    </Section>
    <Section
      gutter="default"
      headline={{
        align: 'center',
        content: 'Style Dark Background White',
        level: 'h2',
        pageHeader: false,
        spaceAfter: 'none'
      }}
      mode="tile"
      spaceAfter="default"
      spaceBefore="default"
      width="default"
    >
      <TeaserBox
        darkStyle= "true"
        image="img/icons/Headline.svg"
        topic="Lorem Ipsum"
        text="kickstartDS makes it easy to implement and use [its packages](http://example.com/) across any framework or no framework at all. We accomplish this by using standardized web platform APIs and [Web Components](http://example.com/)."
        link={{
          fillAnimation: false,
          href: 'https://example.com',
          iconAfter: false,
          iconAnimation: false,
          iconBefore: false,
          label: 'Mehr erfahren',
          newTab: false,
          size: 'medium',
          variant: 'solid-inverted'
        }}
      />
      <TeaserBox
        darkStyle= "true"
        image="img/icons/Quote.svg"
        topic="Accessibility baked in"
        text="kickstartDS comes accessibility baked in and provides support for W3C’s [WCAG 2.1 spec](http://example.com/). We make sure all our components support touch screens, keyboard navigation, screen readers, and more."
        link={{
          fillAnimation: false,
          href: 'https://example.com',
          iconAfter: false,
          iconAnimation: false,
          iconBefore: false,
          label: 'Mehr erfahren',
          newTab: false,
          size: 'medium',
          variant: 'solid-inverted'
        }}
      />
      <TeaserBox
        darkStyle= "true"
        image="img/icons/Slider.svg"
        topic="Powerful theming tools"
        text="kickstartDS comes in two themes and allows you to choose globally or locally [per component](http://example.com/) which theme you want to utilize."
        link={{
          fillAnimation: false,
          href: 'https://example.com',
          iconAfter: false,
          iconAnimation: false,
          iconBefore: false,
          label: 'Mehr erfahren',
          newTab: false,
          size: 'medium',
          variant: 'solid-inverted'
        }}
      />
    </Section>
  </>
);

const Template = (args) => <Page {...args} />;
export const TeaserVariants = Template.bind({});