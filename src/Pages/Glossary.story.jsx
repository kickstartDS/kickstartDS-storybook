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
  title: "Glossary",
};

import { Header } from "../header/HeaderComponent";
import { Footer } from "../footer/FooterComponent";

const Page = () => (
  <>
    <Header />
    <div className="template template--wide">

      <div className="template__main">

        <Section
          width="narrow"
          className="l-section--outer-width-full"
          mode="list"
          spaceBefore="small"
        >
          <div className="c-glossary">
            <div className="c-glossary-head">
              <div className="c-glossary-head__meta">
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
              </div>
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
      </Section>

    </div>
    <div className="template__side">
      <Section spaceBefore="small">
        <div className="kds-page-nav">
          <ul>
            <h3>Related</h3>
            <li>
              <a href="#">
                SASS
              </a>
            </li>
            <li>
              <a href="#">
                Test
              </a>
            </li>
            <li>
              <a href="#">
                Lorem ipsum
              </a>
            </li>
          </ul>
        </div>
      </Section>
    </div>
  </div>
  <Footer {...FooterStories.args} />
  </>
);

const Template = (args) => <Page {...args} />;
export const Glossary = Template.bind({});
