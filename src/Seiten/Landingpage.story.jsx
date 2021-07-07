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
  title: "Landingpage",
};

const Page = () => (
  <>

    <Visual
      backgroundColor="#ccc"
      box={{
        background: 'transparent',
        enabled: true,
        headline: 'Building a design system for all your digital touch points feels now like squeezing a lemon',
        horizontal: 'left',
        indent: false,
        link: {
          enabled: true,
          fillAnimation: false,
          href: 'https://example.com',
          iconAfter: false,
          iconAnimation: false,
          iconBefore: false,
          label: 'Lorem Ipsum',
          newTab: false,
          size: 'medium',
          variant: 'solid'
        },
        text: '[kickstart DS](http://example.com/) is the comprehensive pattern library and **design system**, that **helps** web development **teams to create** consistent and brand compliant web **frontends super efficiently**.',
        vertical: 'center'
      }}
      height="default"
      media={{
        image: {
          indent: 'none',
          srcDesktop: 'img/visual/visual_lemon.png',
          srcMobile: '',
          srcTablet: ''
        },
        mode: 'image',
        video: {
          srcDesktop: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_2mb.mp4',
          srcMobile: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_2mb.mp4',
          srcTablet: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_2mb.mp4'
        }
      }}
    />
    <Section
      width="wide"
      >
      <LogoTiles
        logos={[
          {
            alt: 'Erfolgsfaktor Familie',
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/640px-Shopify_logo_2018.svg.png'
          },
          {
            alt: 'Familienfreundliches Unternehmen',
            src: 'https://d21buns5ku92am.cloudfront.net/41748/images/177922-logo-d8345a-large-1441290673.png'
          },
          {
            alt: 'Kooperationspartner der FHDW',
            src: 'https://timotheebinet.com/static/fa38ab30a9b8abb4a1ff8c0b7fb86cef/00d43/gatsby.png'
          },
          {
            alt: 'Kooperationspartner von it´s owl',
            src: 'https://www-cdn.bigcommerce.com/assets/mediakit/logo-plain.png'
          }
        ]}
      />
    </Section>
    <Section
      gutter="default"
      headline={{
        align: 'center',
        content: 'Features',
        level: 'h2',
        pageHeader: false,
        spaceAfter: 'none'
      }}
      mode="tile"
      spaceAfter="default"
      spaceBefore="default"
      width="default"
    >
      <ContentBox
        ratio="16:9"
        topic="Lorem Ipsum"
        text="kickstartDS makes it easy to implement and use [its packages](http://example.com/) across any framework or no framework at all. We accomplish this by using standardized web platform APIs and [Web Components](http://example.com/)."
      />
      <ContentBox
        ratio="16:9"
        topic="Accessibility baked in"
        text="kickstartDS comes accessibility baked in and provides support for W3C’s [WCAG 2.1 spec](http://example.com/). We make sure all our components support touch screens, keyboard navigation, screen readers, and more."
      />
      <ContentBox
        ratio="16:9"
        topic="Powerful theming tools"
        text="kickstartDS comes in two themes and allows you to choose globally or locally [per component](http://example.com/) which theme you want to utilize."
      />
    </Section>

    <Section>
      <Quote
        image="https://picsum.photos/seed/kdsquote/300/300"
        source="Max Mustermann, ABC GmbH"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
      />
    </Section>

    <Section
      background="dark"
      gutter="default"
      headline={{
        align: 'center',
        content: 'What kickstartDS can do for you?',
        level: 'h2',
        pageHeader: false,
        spaceAfter: 'none'
      }}
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
  </>
);

const Template = (args) => <Page {...args} />;
export const Landingpage = Template.bind({});
