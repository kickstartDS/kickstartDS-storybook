import { FunctionComponent, HTMLAttributes } from "react";

import { TextMedia } from "@kickstartds/base/lib/text-media";
import { TagLabel } from "@kickstartds/base/lib/tag-label";
import { Section } from "@kickstartds/base/lib/section";

import { GlossaryProps } from "./GlossaryProps";
import { LinkButton } from "../link-button/LinkButtonComponent";
import { Headline, TeaserBox } from "@kickstartds/base";
import { Inline, Stack } from "@bedrock-layout/primitives";
import { Related } from "../related/RelatedComponent";

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
      mode="list"
      spaceBefore="default"
      spaceAfter="default"
    >
      <div>
        <Headline align="left" level="h1" content={term} />
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
      <div className="template">
        <div className="template__main">
          <Stack gutter="var(--ks-spacing-stack-s)">
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
          </Stack>
        </div>
        <div className="template__side">
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
        </div>
      </div>
    </Section>

    <Section
      align="center"
      width="narrow"
      pattern="1"
      ks-inverted="true"
      headline={{
        content: "Read more, or discuss this decision with us on StackShare.io",
        align: "center",
      }}
    >
      <div>
        <LinkButton
          label={"Go to StackShare.io"}
          variant="solid"
          size={"medium"}
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
          content: "Similar appearances",
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
            <Related
              image={item.image}
              url={item.url}
              excerpt={item.excerpt}
              title={item.title}
              key={i}
            />
          ))}
        </Inline>
      </Section>
    )}
  </div>
);
