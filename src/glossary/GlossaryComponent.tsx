import { FunctionComponent, HTMLAttributes } from "react";

import { TextMedia } from "@kickstartds/base/lib/text-media";
import { TagLabel } from "@kickstartds/base/lib/tag-label";
import { Section } from "@kickstartds/base/lib/section";
import { ContentBox } from "@kickstartds/base/lib/content-box";
import { Button } from "@kickstartds/base/lib/button";
import { Storytelling } from "@kickstartds/content/lib/storytelling";

import { GlossaryProps } from "./GlossaryProps";

export const Glossary: FunctionComponent<
  GlossaryProps & HTMLAttributes<HTMLDivElement>
> = ({
  term,
  definition,
  cover,
  media,
  tags,
  related,
  stackshare,
  cta,
  ...props
}) => (
  <div {...props}>
    <Section
      width="wide"
      spaceBefore="small"
      spaceAfter="none"
      headline={{
        align: "left",
        spaceAfter: "none",
        content: term,
        level: "h1",
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
            {cover && cover.src ? (
              <TextMedia
                className="c-glossary--text-media"
                media={[
                  {
                    image: {
                      src: cover.src,
                      height: 100,
                      width: 100,
                    },
                  },
                ]}
                mediaAlignment="intext-left"
                text={definition}
              />
            ) : (
              <TextMedia
                className="c-glossary--text-media"
                media={[]}
                mediaAlignment="intext-left"
                text={definition}
              />
            )}
          </div>
          {tags && tags.length > 0 && (
            <div className="tag-label-container">
              {tags?.map((tag, i) => (
                <div>
                  <TagLabel label={tag} size="s" key={i} />
                </div>
              ))}
            </div>
          )}
        </Section>
      </div>
      <div className="template__side">
        <Section
          spaceBefore="none"
          spaceAfter="default"
          width="narrow"
          background="default"
        >
          <Storytelling className="cta" {...cta} />
        </Section>
      </div>
    </div>

    {media && media.length > 0 && (
      <Section
        width="wide"
        spaceBefore="none"
        spaceAfter="none"
        className="img-grid"
        headline={{
          level: "h3",
          align: "left",
          spaceAfter: "none",
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
              },
            ]}
            key={i}
            text=""
            mediaAlignment="above-center"
          />
        ))}
      </Section>
    )}

    <Section
      align="center"
      width="narrow"
      headline={{
        content: "Read more, or discuss this decision with us on StackShare.io",
        align: "center",
      }}
    >
      <div>
        <Button
          label={"Go to StackShare.io"}
          variant="solid"
          size={"medium"}
          deko
          highlighted
          href={stackshare}
          iconAfter
          icon={{
            icon: "stackshare",
          }}
        />
      </div>
    </Section>

    {related && related.length > 0 && (
      <Section
        headline={{
          content: "Related",
          level: "h3",
          align: "left",
          spaceAfter: "none",
        }}
        variant="head"
        className="two-col"
        spaceBefore="default"
        spaceAfter="small"
        background="accent"
        width="wide"
      >
        {related?.map((item, i) => (
          <ContentBox
            ratio="1:1"
            alignement="left"
            image={item.image}
            className="related-post"
            link={{
              href: item.url,
              enabled: true,
              label: "Keep reading",
              variant: "clear",
              size: "medium",
              iconAfter: true,
              icon: {
                icon: "chevron-right",
              },
            }}
            text={item.excerpt}
            topic={item.title}
            key={i}
          />
        ))}
      </Section>
    )}
  </div>
);
