import { FunctionComponent, HTMLAttributes } from "react";

import { TextMedia } from "@kickstartds/base/lib/text-media";
import { TagLabel } from "@kickstartds/base/lib/tag-label";
import { Section } from "@kickstartds/base/lib/section";
import { Related } from "../related/RelatedComponent";

import { ShowcaseProps } from "./ShowcaseProps";
import { Visual } from "@kickstartds/content/lib/visual";
import { Headline, HeadlineContext } from "@kickstartds/base/lib/headline";
import { Button } from "../button/ButtonComponent";
import { Divider, RichText } from "@kickstartds/base";
import { Quote } from "@kickstartds/content";
import { Stack, Inline } from "@bedrock-layout/primitives";
import { Person } from "../person/PersonComponent";

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
  author,
  quote,
  ...props
}) => (
  <div {...props}>
    <Section
      width="narrow"
      mode="list"
      gutter="none"
      spaceBefore="default"
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
      spaceBefore="small"
      spaceAfter="default"
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
      spaceBefore="default"
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

            {author.name || author?.avatar ? (
              <>
                <Divider />
                <Headline
                  content="Author"
                  level="p"
                  styleAs="p"
                  spaceAfter="none"
                />
                <Person
                  name={author.name}
                  avatar={author.avatar}
                  title={author.title}
                  size={"m"}
                />
              </>
            ) : (
              ""
            )}
          </Stack>
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
                type={item.type}
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
