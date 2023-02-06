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
  host,
  participants,
  date,
  language = "English",
  cover,
  media,
  tags,
  related,
  ...props
}) => {
  console.log("related", related);
  return (
    <div {...props}>
      <Section
        width="default"
        spaceBefore="small"
        spaceAfter="small"
        headline={{
          align: "left",
          content: title,
          level: "h1",
        }}
      >
        {participants && participants.length > 0 && (
          <div className="tag-label-container">
            {participants?.map((participant, i) => (
              <div>
                <TagLabel label={participant} size="l" key={i} />
              </div>
            ))}
          </div>
        )}
      </Section>

      <div className="template template--wide">
        <div className="template__main">
          <Section
            width="narrow"
            mode="list"
            spaceBefore="none"
            spaceAfter="default"
          >
            <div className="c-appearance">
              <TextMedia
                className="c-appearance--text-media"
                media={[]}
                mediaAlignment="intext-left"
                text={description}
              />
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
                  content: "Some impressions",
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
              className="c-appearance--text-media"
              media={[
                {
                  image: {
                    src: cover.src,
                    height: 300,
                    width: 300,
                  },
                },
              ]}
              mediaAlignment="beside-left"
              text={""}
            />
            <TextMedia
              className="c-appearance--text-media"
              media={[]}
              mediaAlignment="intext-left"
              text={`   
**Hosted by:** [${host.name}](${host.url})   
**Date:** ${date}   
**Language:** ${language}
              `}
            />
            {tags && tags.length > 0 && (
              <div className="tag-label-container">
                {tags?.map((tag, i) => (
                  <div>
                    <TagLabel label={tag} size="s" key={i} />
                  </div>
                ))}
              </div>
            )}
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

      {related && related.length > 0 && (
        <Section
          headline={{
            content: "Similar appearances",
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
                label: "Explore",
                variant: "outline",
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
};
