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
  cta,
}) => (
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
            {tags && tags.length > 0 &&
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
            }
          </Section>
        </div>
        <div className="template__side">
          <Section
            spaceBefore="none"
            spaceAfter="default"
            width="narrow"
            background="default"
          >
            <Cta {...cta} />
          </Section>
        </div>
      </div>

      {media && media.length > 0 &&
      <Section
        width="wide"
        spaceBefore="none"
        spaceAfter="none"
        className="img-grid"
        headline={{
          content: "Take a closer look 🧐",
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
                  gallery: "closer-look",
                },
                caption: item.caption,
              }
            ]}
            key={i}
          />
        ))}
      </Section>
      }

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

      {related && related.length > 0 &&
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
            image={item.image}
            className="related-post"
            link={{
              href: item.url,
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
      }
    </>
);
