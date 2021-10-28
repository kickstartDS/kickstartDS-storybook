import {
  TextMedia,
  Headline,
  ContentBox,
  TeaserBox,
  Divider,
  Section,
  TagLabel,
} from "@kickstartds/base";
import { Button } from "@kickstartds/base/lib/button";
import {
  Storytelling,
  Visual,
  CollapsibleBox,
  Contact,
  Quote,
  QuotesSlider,
  LogoTiles,
  CountUp,
} from "@kickstartds/content";
import FooterStories from '../footer/Footer.stories';

import {
  PostHead,
} from "@kickstartds/blog";


export default {
  title: "Glossary Entry",
};

import { Header } from "../header/HeaderComponent";
import { Footer } from "../footer/FooterComponent";
import { isUndefined } from "lodash";

const Page = () => (
  <>
    <Header />

        <Section
          width="narrow"
          mode="list"
          spaceBefore="default"
        >
          <div className="c-glossary">
            <div className="c-glossary-head">
              <Headline
                content="CSS3"
                level="h1"
              />
            </div>
          <TextMedia
            className="c-glossary--text-media"
            media={[
              {
                image: {
                  src: 'img/glossary/CSS.svg',
                  height: 100,
                  width: 100
                }
              }
            ]}
            mediaAlignment="intext-left"
            text={
  `Some of the new features in CSS3 make it the perfect evolution of CSS for us at the moment. CSS modules for better native use of the code we write and generate, and CSS Properties (CSS Variables) for a flexibility that was not attainable before (ignoring resource- and JavaScript-heavy solutions).

  All components that are available as part of our Design System solution use CSS Properties extensively, to create multiple layers of default configuration (which colors to use, font sizes, etc). This enables users of those components to hit the ground running with sensible defaults, while always having the peace of mind of being able to break those layers open, and customize if needed. And all of this with vanilla CSS, at runtime!

  Runtime configurability, for us, is the cherry on top. Being able to quickly change values in the browser to test something out, not having to rely on complex build processes and toolchains just to change some values, or the ability to write small widgets / configuration interfaces enabling website and product owners unprecedented access to theming options (if needed!).`
        }
          />
        </div>
        <div className="tag-label-container">
          <div>
            <TagLabel
              label="Decision"
              size="s"
              />
          </div>
          <div>
            <TagLabel
              label="kickstartDS"
              size="s"
            />
          </div>
        </div>
      </Section>

      <Section
        spaceBefore="none"
        spaceAfter="default"
        width="narrow"
        background="default"
      >
        <div className="cta">
          <Headline
            content="Anything on your mind?"
            styleAs="h1"
          />
          <Storytelling
            box={{
              text:"Read more, or discuss this decision with us, on StackShare.io",
              vAlign: "top",
              link:{
                label:"Lets have a chat",
                variant:"solid",
                iconAfter: true,
                icon:{
                  icon:"person",
                }
              },
            }}
            full
            image={{
              source:"img/contact.svg",
              vAlign: "top",
              order:{
                desktopImageLast: true,
              },
            }}
          />
        </div>
      </Section>

      <Section
        headline={{
          content:"Related"
        }}
        spaceBefore="default"
        background="accent"
        width="narrow"
        mode="list"
      >
      <div className="related-post">
        <Headline
          content="SASS"
          level="h3"
        />
        <TextMedia
          text={`
Sass is the CSS extension language of our choice for the additional constructs it offers when creating modularized and DRY styles for components in a Design System.

Key feature for us would be the support for nested declarations. Being able to write composable styles in a concise manner enables the creation of maintainable Design Systems, even if the number of components begins to scale up. In combination with BEM as a convention, it automatically forces developers to think in well defined, maintainable structures when creating additional components`}
          media={[
            {
              image: {
                src: 'img/glossary/Sass.svg',
                height: 100,
                width: 100
              }
            }
          ]}
          mediaAlignment="intext-left"
        />
        <Button
          label="Keep reading"
          variant="clear"
          iconAfter
          icon={{
            icon:"chevron-right"
          }}
        />
      </div>
      
      <div className="related-post">
        <Headline
          content="Typescript"
          level="h3"
        />
        <TextMedia
          text={`
In addition to using ES6 as a specific flavor, on top of JavaScript, as a technology, we're using TypeScript for it's additional type safety and resulting confidence when developing long lasting, well-rounded frontend solutions like a component library.

One additional feature of TypeScript we're relying heavily on is the ability to generate types for publishing packages. We use this to generate all component typings automatically, based on shared JSON Schema definitions, enabling auto-complete for properties defined in the context of the component... based on the generated types.`}
          media={[
            {
              image: {
                src: 'img/glossary/Typescript.svg',
                height: 100,
                width: 100
              }
            }
          ]}
          mediaAlignment="intext-left"
        />
        <Button
          label="Keep reading"
          variant="clear"
          iconAfter
          icon={{
            icon:"chevron-right"
          }}
        />
      </div>

      </Section>

  <Footer {...FooterStories.args} />
  </>
);

const Template = (args) => <Page {...args} />;
export const GlossaryEntry = Template.bind({});
