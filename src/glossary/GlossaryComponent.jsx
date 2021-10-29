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
      <Section
        width="wide"
        spaceBefore="small"
        spaceAfter="none"
        headline={{
          content: term,
          level:"h1",
        }}
      ></Section>
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
                      src: cover.src,
                      height: 100,
                      width: 100
                    }
                  }
                ]}
                mediaAlignment="intext-left"
                text={definition}
              />
            </div>
            <div className="tag-label-container">
              {tags?.map((tag, i) => (
              <div>
                <TagLabel
                  label={tag}
                  size="s"
                  key={i}
                />
              </div>
              ))}
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
                  text: "Learn more about kickstartDS, and how it can help you create consistent frontend interfaces",
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
                href: "https://www.kickstartDS.com/",
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
        {media?.map((item, i) => (
          <TextMedia
            media={[
              {
                lightboxImage: {
                  image: item.src,
                  thumb: item.src,
                  height: 853,
                  width: 1280,
                  zoomIcon: true,
                  gallery: "Media files",
                },
                caption: item.caption,
              }
            ]}
            key={i}
          />
        ))}
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
              href: stackshare,
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
        {related?.map((item, i) => (
          <ContentBox
            alignement="left"
            image={item.url}
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
            text={item.excerpt}
            topic={item.title}
            key={i}
          />
        ))}
      </Section>
    </>
  );
};
