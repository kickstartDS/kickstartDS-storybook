import { unpack } from "@kickstartds/core/lib/storybook/helpers";
import { FunctionComponent, HTMLAttributes } from "react";

import { TextMedia } from "@kickstartds/base/lib/text-media";
import { TagLabel } from "@kickstartds/base/lib/tag-label";
import { Section } from "@kickstartds/base/lib/section";
import { ContentBox } from "@kickstartds/base/lib/content-box";

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
    <Link href="https://github.com/kickstartDS/kickstartDS">
      <svg
        className="github-corner"
        width="86"
        height="86"
        viewBox="0 0 86 86"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1763_3977)">
          <path
            d="M6 -2H1.17157L4.58579 1.41421L84.5858 81.4142L88 84.8284V80V0V-2H86H6Z"
            fill="var(--ks-color-primary-to-bg-9)"
            stroke="var(--ks-color-primary-to-bg-5)"
            stroke-width="4"
          />
          <path
            d="M47.0561 34.8799C42.4161 31.9039 44.0801 28.6719 44.0801 28.6719C45.0401 26.4639 44.5601 25.1519 44.5601 25.1519C44.1441 23.0399 45.4881 24.4159 45.4881 24.4159C46.7361 25.8879 46.1601 27.9359 46.1601 27.9359C45.3281 31.2319 47.7921 32.6079 49.0081 33.0239"
            fill="#06566A"
          />
          <path
            d="M42.7999 36.8C42.7679 36.832 43.9839 37.28 44.3359 36.928L48.7839 32.512C49.8079 31.744 50.7679 31.488 51.5039 31.552C48.8159 28.16 46.7999 23.808 52.0159 18.56C53.5199 17.088 55.2799 16.384 57.1039 16.32C57.2959 15.808 58.2239 13.952 60.8479 12.832C60.8479 12.832 62.3519 13.6 63.2159 17.984C64.5919 18.752 65.9039 19.776 67.0879 20.928C68.2399 22.08 69.2639 23.424 70.0319 24.832C74.4159 25.664 75.2159 27.168 75.2159 27.168C74.0639 29.792 72.2079 30.72 71.7279 30.912C71.6319 32.768 70.9599 34.496 69.4559 36C64.2079 41.248 59.8559 39.2 56.4639 36.512C56.5279 37.408 56.1439 38.688 54.8639 39.968L51.1199 43.68C50.7359 44.064 51.3119 45.408 51.3759 45.376L42.7999 36.8Z"
            fill="#06566A"
          />
        </g>
        <defs>
          <clipPath id="clip0_1763_3977">
            <rect width="86" height="86" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </Link>
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
      spaceAfter="small"
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
      width="wide"
      spaceBefore="none"
      spaceAfter="small"
      mode="list"
      className="l-section--content-width-narrow"
    >
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
        />
      </div>
    </Section>

    <Section width="wide" mode="list" spaceBefore="small" spaceAfter="small">
      <div className="template template--wide">
        <div className="template__main">
          <Stack gutter="var(--ks-spacing-stack-m)">
            {media && media.length > 0 && (
              <>
                <Headline
                  level="h3"
                  align="left"
                  content="Screenshot impressions"
                />

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
            {quote.quoteToggle ? (
              <>
                <Quote
                  image={quote.image}
                  text={quote.text}
                  source={quote.source}
                  byline={quote.byline}
                />
              </>
            ) : (
              ""
            )}
          </Stack>
        </div>
        <div className="template__side">
          <Headline content="Description" level="p" styleAs="p" />
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
              icon={{
                icon: "chevron-right",
                iconAfter: true,
              }}
            />
          </div>
        </div>
      </div>
    </Section>

    <Section
      spaceBefore="default"
      spaceAfter="default"
      ks-inverted="true"
      pattern="contact"
      align="left"
      width="wide"
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
      >
        <Inline gutter="var(--ks-spacing-m)" switchAt="55rem">
          {related?.map((item, i) => (
            <ContentBox
              ratio="16:9"
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
        </Inline>
      </Section>
    )}
  </div>
);
