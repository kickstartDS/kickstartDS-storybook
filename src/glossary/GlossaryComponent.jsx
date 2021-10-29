import {
  TextMedia,
  Section,
  TagLabel,
  ContentBox,
} from "@kickstartds/base";
import { Visual } from "@kickstartds/content";

import { Cta } from '../cta/CtaComponent.jsx';

export const Glossary = ({
  term,
  definition,
  cover,
  media,
  tags,
  related,
  stackshare,
}) => {
  console.log('Glossary', term, definition, cover, media, tags, related, stackshare);

  return (
    <>
      <div className="template template--wide">
        <div className="template__main">
          <Section
            width="narrow"
            mode="list"
            spaceBefore="none"
            spaceAfter="default"
          >
            <div className="c-glossary">
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
        </div>
        <div className="template__side">
          <Section
            spaceBefore="none"
            spaceAfter="default"
            width="narrow"
            background="default"
          >
            <Cta
              headline={{
                content: "Anything on your mind?",
                styleAs: "h1",
              }}
              storytelling={{
                box: {
                  text: "Read more, or discuss this decision with us, on StackShare.io",
                  vAlign: "top",
                  link: {
                    label: "Lets have a chat",
                    variant: "solid",
                    iconAfter: true,
                    icon: {
                      icon: "person",
                    }
                  },
                },
                full: true,
                image: {
                  source: "img/contact.svg",
                  vAlign: "top",
                  order: {
                    desktopImageLast: true,
                  },
                },

              }}
              button={{
                href: "#",
                label: "mehr erfahren",
                size: "medium",
                type: "button",
                variant: "solid",

                iconAfter: true,
                icon:{
                  icon:"chevron-right"
                }
              }}
            />
          </Section>
        </div>
      </div>

      <Section
        width="wide"
        spaceBefore="none"
        spaceAfter="none"
        className="img-grid"
        headline={{
          content: "Media files",
        }}
      >
        <TextMedia
          media={[
            {
              lightboxImage: {
                image: 'https://www.kickstartds.com/static/29fe689e24e44e20c1d4fc4f2eca07fe/2643c/2021-10-23_17-18.webp',
                thumb: 'https://www.kickstartds.com/static/29fe689e24e44e20c1d4fc4f2eca07fe/2643c/2021-10-23_17-18.webp',
                height: 853,
                width: 1280,
                zoomIcon: true,
                gallery: "Media files",
              },
              caption: "Excerpt of the TypeScript typings we auto-generate for all components. Generation happens based on our JSON Schema definitions (per component), and enables auto-complete when using components from our component library / Design System in your project.",
            }
          ]}
        />
        <TextMedia
          media={[
            {
              lightboxImage: {
                image: 'https://www.kickstartds.com/static/7b42c45763d3911d61fa5e06a28133be/8be91/2021-10-23_17-17.webp',
                thumb: 'https://www.kickstartds.com/static/7b42c45763d3911d61fa5e06a28133be/8be91/2021-10-23_17-17.webp',
                height: 853,
                width: 1280,
                zoomIcon: true,
                gallery: "Media files",
              },
              caption: "Shows the source code of the kickstartDS Visual component, as an example of TypeScript use in our codebase.",
            }
          ]}
        />
      </Section>

      <Section
        spaceBefore="none"
        spaceAfter="none"
        width="wide"
        align="left"
      >

        <Visual
          className="c-visual--deko c-visual--custom"
          box={{
            background: "transparent",
            enabled: true,
            headline: {
              content:
                "Read more, or discuss this decision with us on StackShare.io",
              level: "h2",
            },
            horizontal: "center",
            indent: true,
            link: {
              className: "c-button--main",
              enabled: true,
              fillAnimation: false,
              href: "https://example.com",
              iconAfter: true,
              iconAnimation: false,
              iconBefore: false,
              icon: {
                icon: "stackshare",
              },
              label: "Go to StackShare.io",
              newTab: false,
              size: "medium",
              variant: "solid",
            },
            vertical: "center",
          }}
        />
      </Section>

      <Section
        headline={{
          content: "Related"
        }}
        className="two-col"
        spaceBefore="default"
        spaceAfter="small"
        background="accent"
        width="wide"
        mode="tile"
      >
        <ContentBox
          alignement="left"
          image="img/glossary/Sass.svg"
          className="related-post"
          link={{
            enabled: true,
            label: "Keep reading",
            variant: "clear",
            size: "large",
            iconAfter: true,
            icon: {
              icon: "chevron-right",
            }
          }}
          text="Sass is the CSS extension language of our choice for the additional constructs it offers when creating modularized and DRY styles for components in a Design System. Language of our choice for the additional constructs..."
          topic="Sass"
        />

        <ContentBox
          alignement="left"
          image="img/glossary/Typescript.svg"
          className="related-post"
          link={{
            enabled: true,
            label: "Keep reading",
            variant: "clear",
            size: "large",
            iconAfter: true,
            icon: {
              icon: "chevron-right",
            }
          }}
          text="In addition to using ES6 as a specific flavor, on top of JavaScript, as a technology, we're using TypeScript for it's additional type safety and resulting confidence when developing long lasting, well-rounded frontend solutions..."
          topic="Typescript"
        />
      </Section>
    </>
  );
};
