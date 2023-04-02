import { FunctionComponent, HTMLAttributes } from "react";
import { Stack, Inline } from "@bedrock-layout/primitives";

import { TextMedia } from "@kickstartds/base/lib/text-media";
import { TagLabel } from "@kickstartds/base/lib/tag-label";
import { Section } from "@kickstartds/base/lib/section";

import { AppearanceProps } from "./AppearanceProps";
import { LinkButton } from "../link-button/LinkButtonComponent";
import { Divider, Headline, Picture, TeaserBox } from "@kickstartds/base";
import { Button } from "../button/ButtonComponent";
import { Related } from "../related/RelatedComponent";
import { Person } from "../person/PersonComponent";

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
  return (
    <div {...props}>
      <Section
        spaceBefore="small"
        spaceAfter="default"
        mode="list"
        width="narrow"
      >
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
        <div className="kds-appearance-meta">
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
        variant="head"
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
              <Headline
                content="Description"
                level="p"
                styleAs="p"
                spaceAfter="none"
              />
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
              {participants && participants.length > 0 && (
                <>
                  <Divider />
                  <Headline
                    content="Participants"
                    level="p"
                    styleAs="p"
                    spaceAfter="none"
                  />
                  <Stack gutter="var(--ks-spacing-stack-xs)">
                    {participants?.map((item, i) => (
                      <Person
                        name={item.name}
                        avatar={item.avatar}
                        size={"m"}
                        key={i}
                      />
                    ))}
                  </Stack>
                </>
              )}
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
        <>
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
            mode="list"
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
};
