import { FunctionComponent, HTMLAttributes } from "react";
import { Stack, Inline } from "@bedrock-layout/primitives";

import { TextMedia } from "@kickstartds/base/lib/text-media";
import { TagLabel } from "@kickstartds/base/lib/tag-label";
import { Section } from "@kickstartds/base/lib/section";

import { AppearanceProps } from "./AppearanceProps";
import { LinkButton } from "../link-button/LinkButtonComponent";
import { Headline, TeaserBox } from "@kickstartds/base";
import { Button } from "../button/ButtonComponent";
import { Related } from "../related/RelatedComponent";

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
      <Section spaceBefore="default" spaceAfter="none" width="narrow">
        <div>
          <Headline align="left" level="h1" content={title} />
          {participants && participants.length > 0 && (
            <div className="tag-label-container">
              {participants?.map((participant, i) => (
                <div>
                  <TagLabel label={participant} size="m" key={i} />
                </div>
              ))}
            </div>
          )}
        </div>
      </Section>
      <Section
        spaceBefore="small"
        spaceAfter="small"
        mode="list"
        width="narrow"
      >
        <div className="kds-appearance-meta">
          {/* {tags && tags.length > 0 && (
            <div className="tag-label-container">
              {tags?.map((tag, i) => (
                <div>
                  <TagLabel label={tag} size="s" key={i} />
                </div>
              ))}
            </div>
          )} */}
          <div className="kds-appearance-meta__content">
            <div className="kds-appearance-meta__col">
              <TextMedia
                media={[]}
                mediaAlignment="above-center"
                text={`   
**Hosted by:**   
[${host.name}](${host.url})   
**Date:**   
${date}   
**Language:**  
${language}
              `}
              />
              <div>
                <LinkButton
                  href={link}
                  label="Go to appearance"
                  deko={true}
                  variant="solid"
                  size="medium"
                  iconAfter
                  icon={{
                    icon: "chevron-right",
                  }}
                />
              </div>
            </div>
            <TextMedia
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
          </div>
        </div>
      </Section>

      <Section
        background="accent"
        width="wide"
        mode="list"
        spaceBefore="small"
        spaceAfter="small"
        headline={{
          level: "h3",
          align: "left",
          content: "Some impressions",
        }}
      >
        <div className="template">
          <div className="template__main">
            {media && media.length > 0 && (
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
            )}
          </div>
          <div className="template__side">
            <Stack gutter="var(--ks-spacing-stack-s)">
              <TextMedia
                className="kds-appearance--text-media"
                media={[]}
                mediaAlignment="intext-left"
                text={description}
              />
              <div>
                <LinkButton
                  href={link}
                  label="Go to appearance"
                  variant="outline"
                  size="medium"
                  iconAfter
                  icon={{
                    icon: "chevron-right",
                  }}
                />
              </div>
            </Stack>
          </div>
        </div>
      </Section>
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
          <Inline stretch="all" gutter="var(--ks-spacing-m)" switchAt="55rem">
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
      <Section
        spaceBefore="none"
        spaceAfter="default"
        background="accent"
        width="wide"
      >
        <Inline justify="center">
          <Button
            variant="outline"
            label="Appearances Overview"
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
};
