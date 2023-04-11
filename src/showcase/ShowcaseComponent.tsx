import React, { FunctionComponent, HTMLAttributes } from "react";
import { Stack, Inline } from "@bedrock-layout/primitives";

import { Headline } from "@kickstartds/base/lib/headline";
import { TextMedia } from "@kickstartds/base/lib/text-media";
import { TagLabel } from "@kickstartds/base/lib/tag-label";
import { Section } from "@kickstartds/base/lib/section";
import { Divider } from "@kickstartds/base/lib/divider";
import { RichText } from "@kickstartds/base/lib/rich-text";

import { Quote } from "@kickstartds/content/lib/quote";
import { Visual } from "@kickstartds/content/lib/visual";

import { Button } from "../button/ButtonComponent";
import { LinkButton } from "../link-button/LinkButtonComponent";
import { Related } from "../related/RelatedComponent";

import { ShowcaseProps } from "./ShowcaseProps";

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
  summary,
  quote,
  overviewPage,
  ...props
}) => (
  <div {...props}>
    <Section
      width="narrow"
      mode="list"
      gutter="none"
      spaceBefore="small"
      spaceAfter="small"
    >
      <Stack gutter="var(--ks-spacing-stack-s)">
        <div>
          <Headline level="h1" content={title} />
          {tags && tags.length > 0 && (
            <div className="tag-label-container">
              {tags?.map((tag, i) => (
                <div>
                  <TagLabel label={tag} size="m" key={i} />
                </div>
              ))}
            </div>
          )}
        </div>

        <RichText text={summary} />
        <div>
          <LinkButton
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
            target="_blank"
            size="medium"
          />
        </div>
      </Stack>
    </Section>
    <Section
      variant="half"
      background="accent"
      spaceBefore="small"
      spaceAfter="small"
      mode="list"
      width="wide"
    >
      <Visual
        height="fullImage"
        box={{
          enabled: false,
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
      background="accent"
      width="wide"
      mode="list"
      spaceBefore="small"
      spaceAfter="default"
    >
      <div className="template">
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
          <Stack gutter="var(--ks-spacing-stack-s)">
            <div>
              <Headline content="About the project" level="h4" styleAs="h4" />
              <TextMedia
                className="c-showcase--text-media"
                media={[]}
                mediaAlignment="intext-left"
                text={description}
              />
            </div>

            <div>
              <LinkButton
                label="Visit showcase"
                variant="outline"
                href={link}
                iconAfter
                target="_blank"
                size="medium"
                icon={{
                  icon: "chevron-right",
                  iconAfter: true,
                }}
              />
            </div>
          </Stack>
        </div>
      </div>
    </Section>
    {quote && quote.quoteToggle ? (
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
      <>
        <Section
          headline={{
            content: "Similar Showcases",
            level: "h3",
            align: "left",
          }}
          spaceBefore="small"
          spaceAfter="small"
          background="accent"
          width="wide"
          mode="list"
        >
          <Inline stretch="all" gutter="var(--ks-spacing-m)" switchAt="55rem">
            {related?.map((item, i) => (
              <Related
                image={item.image}
                url={item.url}
                excerpt={item.excerpt}
                title={item.title}
                typeLabel={item.typeLabel}
                tags={item.tags}
                key={i}
              />
            ))}
          </Inline>
        </Section>

        <Section
          spaceBefore="none"
          spaceAfter="small"
          background="accent"
          width="wide"
        >
          <Inline justify="center">
            <LinkButton
              href={overviewPage}
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
        <Section
          spaceBefore="small"
          spaceAfter="none"
          background="accent"
          width="wide"
        >
          <Divider />
        </Section>
      </>
    )}
  </div>
);
