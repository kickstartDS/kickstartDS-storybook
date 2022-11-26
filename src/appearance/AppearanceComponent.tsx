import { FunctionComponent, HTMLAttributes } from "react";

import { TextMedia } from "@kickstartds/base/lib/text-media";
import { TagLabel } from "@kickstartds/base/lib/tag-label";
import { Section } from "@kickstartds/base/lib/section";
import { ContentBox } from "@kickstartds/base/lib/content-box";

import { AppearanceProps } from "./AppearanceProps";
import { LinkButton } from "../link-button/LinkButtonComponent";

export const Appearance: FunctionComponent<
  AppearanceProps & HTMLAttributes<HTMLDivElement>
> = ({
  link,
  title,
  description,
  cover,
  media,
  tags,
  related,
  ...props
}) => (
  <div {...props}>
    <Section
      width="default"
      spaceBefore="small"
      spaceAfter="none"
      headline={{
        align: "left",
        content: title,
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
          <div className="c-appearance">
            {cover && cover.src ? (
              <TextMedia
                className="c-appearance--text-media"
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
                text={description}
              />
            ) : (
              <TextMedia
                className="c-appearance--text-media"
                media={[]}
                mediaAlignment="intext-left"
                text={description}
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
          <TextMedia
            text="View the appearance for yourself by following the link:"
            mediaAlignment="above-center"
          />
          <LinkButton
            href={link}
            label="Go to appearance"
            deko={true}
            variant="solid"
            size="large"
          />
        </Section>
      </div>
    </div>

    {media && media.length > 0 && (
      <Section
        width="wide"
        spaceBefore="none"
        spaceAfter="small"
        className="img-grid"
        headline={{
          level: "h3",
          align: "left",
          content: "Some impressions for the appearance",
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

    {related && related.length > 0 && (
      <Section
        headline={{
          content: "Comparable appearances",
          level: "h3",
          align: "left",
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
              label: "Explore appearance",
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