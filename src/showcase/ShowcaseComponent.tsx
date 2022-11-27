import { FunctionComponent, HTMLAttributes } from "react";

import { TextMedia } from "@kickstartds/base/lib/text-media";
import { TagLabel } from "@kickstartds/base/lib/tag-label";
import { Section } from "@kickstartds/base/lib/section";
import { ContentBox } from "@kickstartds/base/lib/content-box";

import { ShowcaseProps } from "./ShowcaseProps";
import { Visual } from "@kickstartds/content/lib/visual";
import { Headline } from "@kickstartds/base/lib/headline";

export const Showcase: FunctionComponent<
  ShowcaseProps & HTMLAttributes<HTMLDivElement>
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
      spaceAfter="small"
      headline={{
        align: "left",
        level: "h1",
      }}
    >
      <Visual
        height="small"
        box={{
          background: 'solid',
          enabled: true,
          headline: {
            align: "left",
            content: title,
            level: 'h1',
            pageHeader: false,
            spaceAfter: 'small',
            styleAs: 'h2'
          },
          horizontal: 'left',
          link: {
            enabled: true,
            href: link,
            label: 'Visit showcase',
            size: 'medium',
            variant: 'solid',
            highlight: true,
            deko: true,
            newTab: true,
          },
          vertical: 'center'
        }}
        media={{
          image: {
            indent: 'none',
            src: cover.src,
            srcDesktop: cover.src,
            srcMobile: cover.src,
            srcTablet: cover.src
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
      width="max"
      mode="list"
      spaceBefore="none"
      spaceAfter="default"
    >
      <div className="template template--wide">
        <div className="template__main">
          {media && media.length > 0 && (
            <Section
              width="wide"
              spaceBefore="none"
              spaceAfter="small"
              className="img-grid"
              headline={{
                level: "h3",
                align: "left",
                content: "Screenshot impressions",
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
        </div>
        <div className="template__side">
          <Headline content="Filed under" level="p" styleAs="p" />
          {tags && tags.length > 0 && (
            <div className="tag-label-container">
              {tags?.map((tag, i) => (
                <div>
                  <TagLabel label={tag} size="s" key={i} />
                </div>
              ))}
            </div>
          )}
          <br/>
          <Headline content="Description" level="p" styleAs="p" />
          <TextMedia
            className="c-showcase--text-media"
            media={[]}
            mediaAlignment="intext-left"
            text={description}
          />
        </div>
      </div>
    </Section>

    {related && related.length > 0 && (
      <Section
        headline={{
          content: "Similar showcases",
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