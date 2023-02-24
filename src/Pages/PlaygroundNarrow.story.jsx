import { unpack } from "@kickstartds/core/lib/storybook/helpers";

import HeaderStories from "../header/Header.stories";
import FooterStories from "../footer/Footer.stories";

import { Header } from "../header/HeaderComponent";
import { Footer } from "../footer/FooterComponent";

import { Section, TeaserBox, Button, ContentBox, TagLabel, TextMedia, Picture } from "@kickstartds/base";
import { Visual, Storytelling } from "@kickstartds/content";

export default {
  title: "Playground Narrow",
};

const Page = () => (
  <>
    <Header {...unpack(HeaderStories.args)} />
    <Section
      width="narrow"
      headline={{
        content: "I am the Page Headline and I should have the biggest font size",
        subheadline: "The subheadline should be proportionally sized",
        level: "h1"
      }}>
      <div className="tag-label-container">
        <div>
          <TagLabel label="Label Large" size="l" />
        </div>
        <div>
          <TagLabel label="Label Large" size="l" />
        </div>
        <div>
          <TagLabel label="Label Large" size="l" />
        </div>
      </div>
    </Section>
    <Section
      spaceBefore="none"
      spaceAfter="small"
    >
      <Visual
        backgroundColor="transparent"
        box={{
          background: 'solid',
          enabled: true,
          headline: {
            align: null,
            className: undefined,
            content: 'As a H2, I should be noticably smaller than the Page Headline',
            level: 'p',
            pageHeader: false,
            spaceAfter: 'small',
            styleAs: 'h2',
            subheadline: undefined
          },
          horizontal: 'left',
          indent: false,
          inverted: false,
          links: [
            {
              className: undefined,
              dataComponent: undefined,
              deko: false,
              fillAnimation: false,
              highlighted: false,
              href: 'https://example.com',
              icon: {
                className: undefined,
                icon: undefined,
                role: undefined
              },
              iconAfter: false,
              iconAnimation: false,
              iconBefore: false,
              inverted: undefined,
              label: 'Large CTA Button',
              newTab: false,
              size: 'large',
              variant: 'solid'
            },
            {
              label: 'With an alternative',
              variant: 'outline',
              size: 'large',
            }
          ],
          text: "The copy text shouldn't appear too small following a big Headline",
          vertical: 'center'
        }}
        height="default"
        media={{
          image: {
            alt: undefined,
            indent: 'none',
            src: 'https://picsum.photos/seed/kdsvisual/640/270',
            srcDesktop: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            srcMobile: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            srcTablet: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          },
          mode: 'image',
          video: {
            srcDesktop: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_2mb.mp4',
            srcMobile: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_2mb.mp4',
            srcTablet: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_2mb.mp4'
          }
        }}
      />
    </Section>
    <Section
      background="accent"
      width="narrow"
      spaceAfter="small"
      headline={{
        content: "Section Accent",
        subheadline: "The subheadline should be proportionally sized",
        level: "h2"
      }}>
      <div className="tag-label-container">
        <div>
          <TagLabel label="Label Medium" size="m" />
        </div>
        <div>
          <TagLabel label="Label Medium" size="m" />
        </div>
        <div>
          <TagLabel label="Label Medium" size="m" />
        </div>
      </div>
    </Section>
    <Section
      background="accent"
      width="narrow"
      spaceBefore="none"
    >
      <TeaserBox
        topic="Generators"
        image="img/recipes/generator.svg"
        ratio="none"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        link={{
          variant: "solid",
          label: "Medium Button",
          iconAfter: true,
          icon: {
            icon: "chevron-right",
          },
        }}
        imageSpacing
      />
      <TeaserBox
        topic="Components"
        image="img/recipes/toolbox.svg"
        ratio="none"
        text="Tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod."
        link={{
          variant: "outline",
          label: "Medium Button",
          iconAfter: true,
          icon: {
            icon: "chevron-right",
          },
        }}
        imageSpacing
      />
      <TeaserBox
        topic="Components"
        image="img/recipes/toolbox.svg"
        ratio="none"
        text="Tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod."
        link={{
          variant: "clear",
          label: "Medium Button",
          iconAfter: true,
          icon: {
            icon: "chevron-right",
          },
        }}
        imageSpacing
      />
    </Section>
    <Section
      ks-inverted="true"
      width="narrow"
      headline={{
        content: "Inverted Section",
        subheadline: "With a big Paragraph",
        level: "h2"
      }}>
      <div>
        <TextMedia
          text={`Duis autem vel eum iriure dolor in **hendrerit** in vulputate velit esse [molestie](http://example.com/) consequat, vel illum dolore eu feugiat nulla.

### Headline 3 in Text

commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.   
#### Headline 4 in Text

> Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.

##### Headline 5 in Text

- Ut wisi enim ad minim veniam
- quis nostrud exerci tation ullamcorper
- suscipit lobortis nisl ut aliquip ex ea`}
        />
        <p></p>
        <Button
          size="small"
          label="Small Button"
        />
        <p></p>
        <Button
          variant="outline"
          size="small"
          label="Small Button"
        />
        <p></p>
        <Button
          variant="clear"
          size="small"
          label="Small Button"
        />
      </div>
      <Picture
        src='img/playground/olena-sergienko-dIMJWLx1YbE-unsplash.jpeg'
      />
    </Section>
    <Section
      background="accent"
      ks-inverted="true"
      spaceAfter="small"
      width="narrow"
      headline={{
        content: "Cramped Components",
        subheadline: "With limited space the font size should scale down",
        level: "h2"
      }}>
      <div className="tag-label-container">
        <div>
          <TagLabel label="Label Small" size="s" />
        </div>
        <div>
          <TagLabel label="Label Small" size="s" />
        </div>
        <div>
          <TagLabel label="Label Small" size="s" />
        </div>
      </div>
    </Section>
    <Section
      background="accent"
      ks-inverted="true"
      spaceBefore="none"
      mode="tile"
      width="narrow"
    >
      <TeaserBox
        topic="Button"
        image="img/recipes/icons/button.svg"
        ratio="none"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
        link={{
          hidden: true,
          variant: "clear",
          label: "Explore generators",

        }}
        imageSpacing
      />
      <TeaserBox
        topic="Content Box"
        image="img/recipes/icons/content-box.svg"
        ratio="none"
        text="Consetetur sadipscing elitr, sed diam nonumy eirmod."
        link={{
          hidden: true,
          variant: "clear",
          label: "See our components",

        }}
        imageSpacing
      />
      <TeaserBox
        topic="Count Up"
        image="img/recipes/icons/count-up.svg"
        ratio="none"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
        link={{
          hidden: true,
          variant: "clear",
          label: "See our components",

        }}
        imageSpacing
      />
      <TeaserBox
        topic="Divider"
        image="img/recipes/icons/divider.svg"
        ratio="none"
        text="Consetetur sadipscing elitr, sed diam nonumy eirmod."
        link={{
          hidden: true,
          variant: "clear",
          label: "See our components",

        }}
        imageSpacing
      />
      <TeaserBox
        topic="Divider"
        image="img/recipes/icons/divider.svg"
        ratio="none"
        text="Consetetur sadipscing elitr, sed diam nonumy eirmod."
        link={{
          hidden: true,
          variant: "clear",
          label: "See our components",

        }}
        imageSpacing
      />
      <TeaserBox
        topic="Headline"
        image="img/recipes/icons/headline.svg"
        ratio="none"
        text="Consetetur sadipscing elitr, sed diam nonumy eirmod."
        link={{
          hidden: true,
          variant: "clear",
          label: "See our components",

        }}
        imageSpacing
      />
      <TeaserBox
        topic="Quote Slider"
        image="img/recipes/icons/quote-slider.svg"
        ratio="none"
        text="Consetetur sadipscing elitr, sed diam nonumy eirmod."
        link={{
          hidden: true,
          variant: "clear",
          label: "See our components",

        }}
        imageSpacing
      />
      <TeaserBox
        topic="Section"
        image="img/recipes/icons/section.svg"
        ratio="none"
        text="Consetetur sadipscing elitr, sed diam nonumy eirmod."
        link={{
          hidden: true,
          variant: "clear",
          label: "See our components",

        }}
        imageSpacing
      />
      <TeaserBox
        topic="Slider"
        image="img/recipes/icons/slider.svg"
        ratio="none"
        text="Consetetur sadipscing elitr, sed diam nonumy eirmod."
        link={{
          hidden: true,
          variant: "clear",
          label: "See our components",

        }}
        imageSpacing
      />
      <TeaserBox
        topic="Storytelling"
        image="img/recipes/icons/storytelling.svg"
        ratio="none"
        text="Consetetur sadipscing elitr, sed diam nonumy eirmod."
        link={{
          hidden: true,
          variant: "clear",
          label: "See our components",

        }}
        imageSpacing
      />
    </Section>
    <Section
      width="narow"
      spaceAfter="small"
      spaceBefore="small"
    >
      <Storytelling
        backgroundColor="#eceff3"
        full
        image={{
          source: "img/recipes/cta-full-image.png",
        }}
        box={{
          textAlign: "left",
          hAlign: "center",
          headline: {
            content: "This block has reduced spacing to the surrounding sections",
            subheadline:
              "Autem voluptas quis facere et qui voluptate earum. Dolorum totam animi perferendis.",
          },
          spaceAfter: "none",
          text: "",
          link: {
            label: "Get in touch",
            href: "#",
            variant: "solid",
          },
        }}
      />
    </Section>



    <Footer {...unpack(FooterStories.args)} />
  </>
);

const Template = (args) => <Page {...args} />;
export const PlaygroundNarrow = Template.bind({});
