import { unpack } from "@kickstartds/core/lib/storybook/helpers";
import { FunctionComponent, HTMLAttributes } from "react";

import { TextMedia } from "@kickstartds/base/lib/text-media";
import { TagLabel } from "@kickstartds/base/lib/tag-label";
import { Section } from "@kickstartds/base/lib/section";
import { ContentBox } from "@kickstartds/base/lib/content-box";
import { TeaserBox } from "@kickstartds/base/lib/teaser-box";

import { ShowcaseProps } from "./ShowcaseProps";
import { Visual } from "@kickstartds/content/lib/visual";
import { Headline } from "@kickstartds/base/lib/headline";
import { Link } from "@kickstartds/base/lib/link";
import { Button } from "../button/ButtonComponent";
import { RichText } from "@kickstartds/base";
import { Quote } from "@kickstartds/content";
import { Stack, Inline } from "@bedrock-layout/primitives";

import HeaderStories from "../header/Header.stories";
import { Header } from "../header/HeaderComponent";

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
  quote,
  ...props
}) => (
  <div {...props}>
    <Header {...unpack(HeaderStories.args)} />
    <Section spaceBefore="small" spaceAfter="none" width="wide">
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
    <Section
      headline={{
        align: "left",
        level: "h1",
        content: title,
      }}
      spaceBefore="none"
      spaceAfter="none"
      mode="list"
      width="wide"
    >
      <Visual
        height="default"
        box={{
          background: "solid",
          enabled: false,
          headline: {
            align: "left",
            content: "Explore the showcase yourself",
            level: "h3",
            pageHeader: false,
            spaceAfter: "none",
            styleAs: "h3",
          },
          horizontal: "center",
          link: {
            enabled: true,
            href: link,
            label: "Visit showcase",
            size: "large",
            variant: "solid",
            newTab: true,
            deko: true,
            highlighted: true,

            iconAfter: true,
            icon: {
              icon: "chevron-right",
              iconAfter: true,
            },
          },
          vertical: "bottom",
        }}
        media={{
          image: {
            indent: "none",
            src: cover.src,
            srcDesktop: cover.src,
            srcMobile: cover.src,
            srcTablet: cover.src,
          },
          mode: "image",
          video: {
            srcDesktop:
              "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_2mb.mp4",
            srcMobile:
              "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_2mb.mp4",
            srcTablet:
              "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_2mb.mp4",
          },
        }}
      />
    </Section>

    <Section
      width="narrow"
      spaceBefore="small"
      spaceAfter="small"
      level="h2"
      styleAs="h2"
      mode="list"
      gutter="none"
    >
      <Headline content="Explore the showcase yourself" />
      <Stack gutter="var(--ks-spacing-stack-s)">
        <RichText text="encore as a German utility company supports their customers with modern, cloud-based software solutions, and a wide spectrum of services around their business. They create online experiences for their customers, and future-proof their eCommerce, energy billing and services portfolio." />
        <div>
          <Button
            label="Visit showcase"
            variant="solid"
            href={link}
            iconAfter
            icon={{
              icon: "chevron-right",
              iconAfter: true,
            }}
            highlighted
            deko
            size="medium"
          />
        </div>
      </Stack>
    </Section>

    <Section
      background="accent"
      width="wide"
      mode="list"
      spaceBefore="default"
      spaceAfter="default"
    >
      <div className="template template--wide">
        <div className="template__main">
          <Stack gutter="var(--ks-spacing-stack-l)">
            {media && media.length > 0 && (
              <>
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
              </>
            )}
          </Stack>
        </div>
        <div className="template__side">
          <Headline content="About the project" level="h3" styleAs="h3" />
          <TextMedia
            className="c-showcase--text-media"
            media={[]}
            mediaAlignment="intext-left"
            text={description}
          />
          <br />
          <div>
            <Button
              label="Visit showcase"
              variant="outline"
              href={link}
              iconAfter
              size="medium"
              icon={{
                icon: "chevron-right",
                iconAfter: true,
              }}
            />
          </div>
        </div>
      </div>
    </Section>
    {quote.quoteToggle ? (
      <Section
        spaceBefore="default"
        spaceAfter="default"
        width="narrow"
        pattern="1"
      >
        <Quote
          image={quote.image}
          text={quote.text}
          source={quote.source}
          byline={quote.byline}
        />
      </Section>
    ) : (
      ""
    )}

    <Section
      spaceBefore="default"
      spaceAfter="default"
      ks-inverted="true"
      pattern="contact"
      align="left"
      width="narrow"
      headline={{
        content: "Become our next collaborator",
        align: "left",
        styleAs: "h1",
        subheadline: "Get in contact with us and lets talk",
      }}
    >
      <div>
        <Button
          label="Lets talk"
          variant="solid"
          size="large"
          deko
          highlighted
          iconAfter
          icon={{
            icon: "chevron-right",
          }}
        />
      </div>
    </Section>

    {related && related.length > 0 && (
      <Section
        headline={{
          content: "Similar showcases",
          level: "h3",
          align: "left",
        }}
        spaceBefore="small"
        spaceAfter="small"
        background="accent"
        width="wide"
        mode="list"
      >
        <Inline gutter="var(--ks-spacing-m)" switchAt="55rem">
          {related?.map((item, i) => (
            <TeaserBox
              ratio="16:9"
              alignement="left"
              image={item.image}
              className="related-post"
              link={{
                href: item.url,
                enabled: true,
                label: "Explore",
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
        </Inline>
      </Section>
    )}
    <Section
      spaceBefore="none"
      spaceAfter="default"
      background="accent"
      width="wide"
    >
      <Inline justify="center">
        <Button
          variant="outline"
          label="Showcases Overview"
          iconAfter
          icon={{
            icon: "chevron-right",
          }}
          size="large"
        />
      </Inline>
    </Section>
  </div>
);
