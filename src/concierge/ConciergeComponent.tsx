import React, {
  forwardRef,
  ForwardRefExoticComponent,
  ForwardRefRenderFunction,
  FunctionComponent,
  HTMLAttributes,
  RefAttributes,
  useRef,
} from "react";

import { TagLabel } from "@kickstartds/base/lib/tag-label";
import { Headline } from "@kickstartds/base/lib/headline";
import { TeaserBox } from "@kickstartds/base/lib/teaser-box";
import { TextMedia } from "@kickstartds/base/lib/text-media";
import { Picture } from "@kickstartds/base/lib/picture";
import { Section } from "@kickstartds/base/lib/section";
import { RichText } from "@kickstartds/base/lib/rich-text";
import { TextArea } from "@kickstartds/form/lib/text-area";

import { Source } from "../source/SourceComponent";
import { Button } from "../button/ButtonComponent";
import { SourceSnippet } from "../source-snippet/SourceSnippetComponent";
import { ConciergeProps as ConciergeSchemaProps } from "./ConciergeProps";
import { LinkButton } from "@kickstartds/base";

const defaultHandleResetPrompt = () => {
  return;
};

const defaultHandleConciergeConfirm = (query: string) => {
  console.log("query entered", query);
};

export type ConciergeProps = ConciergeSchemaProps & {
  handleResetPrompt?: typeof defaultHandleResetPrompt;
  handleConciergeConfirm?: typeof defaultHandleConciergeConfirm;
};

export const Concierge: ForwardRefExoticComponent<
  RefAttributes<HTMLTextAreaElement> &
    ConciergeProps &
    HTMLAttributes<HTMLDivElement>
> = forwardRef(
  (
    {
      placeholder,
      answer,
      sources,
      index,
      status,
      questions,
      handleResetPrompt = defaultHandleResetPrompt,
      handleConciergeConfirm = defaultHandleConciergeConfirm,
      ...props
    },
    textAreaRef
  ) => (
    <div {...props}>
      <Section width="default" spaceAfter="small" spaceBefore="small">
        <img src="/concierge-dude.svg" />
        <div>
          <Headline
            level="h1"
            align="left"
            content="Design System Concierge"
            renderContent={(content) => (
              <div>
                <div>{content}</div>
                <TagLabel
                  style={{ backgroundColor: "#FF009D", color: "white" }}
                  label="Beta"
                  size="m"
                />
              </div>
            )}
            subheadline="Ask anything and get pointed the right way 👇"
          />
        </div>
      </Section>
      <Section
        width="narrow"
        background="accent"
        mode="list"
        spaceBefore="small"
        spaceAfter="small"
        className="l-section-style--head"
        pattern="3"
      >
        <div className="c-form-field--concierge">
          <span id="msg" className="c-form-field__label">
            {status[status.code]}
          </span>
          <TextArea
            label={status[status.code]}
            id="concierge-question-input"
            hideLabel
            className="c-form-field__input--highlight"
            rows={6}
            ref={textAreaRef}
            placeholder={placeholder}
          />
        </div>
        <div>
          {status.code !== "loading" && status.code !== "idle" && answer && (
            <Button
              size="medium"
              onClick={handleResetPrompt}
              label="Ask another question"
              variant="solid"
            />
          )}
          {status.code === "idle" && (
            <Button size="medium" label="Ask question" variant="solid" />
          )}
        </div>
      </Section>
      <Section spaceBefore="small" background="accent" width="default">
        <div className="template template--concierge">
          <div className="template__main">
            {status.code !== "loading" && !answer && status.code !== "error" && (
              <div>
                <div
                  style={{
                    color: "var(--ks-text-color-default)",
                    font: "var(--ks-font-copy-s)",
                  }}
                >
                  <h2>Not sure where to start?</h2>

                  <p>Try one of the following questions:</p>

                  <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                    {textAreaRef &&
                      typeof textAreaRef !== "function" &&
                      questions &&
                      questions.length > 0 &&
                      questions.map((question, index) => {
                        return (
                          <li key={`question-${index}`}>
                            <TagLabel
                              style={{
                                marginBottom: "var(--ks-spacing-s)",
                                cursor: "pointer",
                              }}
                              label={`> ${question}`}
                              onClick={() => {
                                if (textAreaRef.current) {
                                  textAreaRef.current.value = question;
                                }
                                handleConciergeConfirm(question);
                              }}
                              size={"s"}
                            />
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
            )}
            {status.code !== "canthelp" &&
              status.code !== "error" &&
              answer && <RichText text={answer} />}
            {status.code === "canthelp" && (
              <div
                style={{
                  color: "var(--ks-text-color-default)",
                  font: "var(--ks-font-copy-s)",
                }}
              >
                <div>
                  <TextMedia
                    text="Sorry... but I don't know that, yet. Feel free to send us some links so I can be taught about it, though!"
                    mediaAlignment={"above-left"}
                  />
                </div>
              </div>
            )}
            {status.code === "loading" && (
              <div
                style={{
                  color: "var(--ks-text-color-default)",
                  font: "var(--ks-font-copy-s)",
                }}
              >
                <p>Searching for results</p>
              </div>
            )}
            {status.code === "error" && (
              <div
                style={{
                  color: "var(--ks-text-color-default)",
                  font: "var(--ks-font-copy-m)",
                }}
              >
                <p>Sorry, but it seems that either:</p>
                <ul>
                  <li>
                    Concierge is having some technical difficulties, he'll be
                    right back then!
                  </li>
                  <li>
                    Or maybe your question didn't yield any relevant sections
                    from our knowledge base. Feel free to let us know below to
                    fix this!
                  </li>
                </ul>
                <p>Please try again!</p>
                <Button
                  label="Try again?"
                  size="small"
                  variant="outline"
                  onClick={handleResetPrompt}
                />
              </div>
            )}
            <div
              style={{
                color: "var(--ks-text-color-default)",
                font: "var(--ks-font-copy-xs)",
              }}
            >
              <strong>Powered by OpenAI: </strong>
              <span>
                Concierge is not a specialist when it comes to details, so
                always check and verify! Remember: your typical concierge in a
                hotel tries his best... but he's no expert, either! That's why
                we provide the sources the answer given was based on below.
              </span>
              <br />
              <br />
              <a href="#">Read our blog post about it (coming soon!)</a>
            </div>
          </div>
          <div className="template__side">
            <div className="source-snippet-menu--wrapper">
              <div className="source-snippet-menu source-snippet-menu--mobile">
                <TeaserBox
                  className="c-source-snippet--mobile"
                  image="/concierge-dude.svg"
                  text={`I found ${
                    sources?.length || 0
                  } relevant sources regarding your question`}
                  link={{
                    label: "View Sources",
                    variant: "clear",
                    size: "small",
                    iconAfter: true,
                    href: "#sources",
                    icon: {
                      icon: "chevron-down",
                    },
                  }}
                />
              </div>
              <div className="source-snippet-menu source-snippet-menu--desktop">
                <div className="source-snippet-menu--concierge">
                  <div>
                    <Picture
                      className="source-snippet-menu--avatar"
                      src="/concierge-dude.svg"
                    />
                  </div>
                  <span>Relevant sources 👇</span>
                </div>
                {sources &&
                  sources.length > 0 &&
                  sources.map((source) => (
                    <SourceSnippet
                      title={source.title}
                      url={new URL(source.url).hostname.replace("www.", "")}
                      link={`#${source.id}`}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
      {sources && sources.length > 0 && (
        <Section
          gutter="none"
          pattern="1"
          headline={{
            content: "Referenced pages",
            align: "left",
            subheadline:
              "Page sections that were used as context to generate the above answer",
          }}
          mode="list"
          id="sources"
        >
          {sources.slice(0, 5).map((reference, index) => (
            <Source
              title={reference.title}
              url={reference.url}
              id={`source-${index}`}
              thumbnail="img/concierge/backlight.png"
              sections={reference.sections}
            />
          ))}
        </Section>
      )}
      <Section
        background="accent"
        width="narrow"
        mode="list"
        headline={{
          content: "Knowledge database",
          align: "left",
          level: "h4",
          subheadline:
            "Sections that were used as context to generate the above answer",
        }}
      >
        <div className="reference">
          <div className="reference__column">
            <ul>
              {index &&
                index.length > 0 &&
                index.slice(0, 18).map((page) => (
                  <li>
                    <a target="blank" href={page.url}>
                      {page.title}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
          <div className="reference__column">
            <ul>
              {index &&
                index.length > 18 &&
                index.slice(18, 18).map((page) => (
                  <li>
                    <a target="blank" href={page.url}>
                      {page.title}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
          <div className="reference__column">
            <ul>
              {index &&
                index.length > 0 &&
                index.slice(36, 18).map((page) => (
                  <li>
                    <a target="blank" href={page.url}>
                      {page.title}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <RichText
          className="reference__text"
          text="Want to be included? Or don't like being a part of this? Feel free
        to contact us! We'll change that ASAP. This is meant as a
        community resource, and the goal with this it to ultimately drive
        people to good sources for their questions, thus furthering our
        goal of democratizing Design Systems 🙌"
        />
      </Section>
      <Section
        headline={{
          content: "Get in contact!",
          subheadline:
            "This is still an early idea, we'd love to know what you think about it. If this is something people like, we already have more than enough ideas on how to iterate on this... but we'll have to see!",
          align: "center",
        }}
        width="wide"
      >
        <LinkButton
          href="mailto:hello@kickstartDS.com"
          variant="solid"
          label="Send us an email!"
          size={"medium"}
          target="blank"
        />
        <LinkButton
          variant="solid"
          label="Join our Discord community!"
          size={"medium"}
          href="https://discord.gg/mwKzD5gejY"
          target="blank"
        />
        <LinkButton
          href="https://twitter.com/intent/follow?screen_name=kickstartDS"
          variant="solid"
          label="Follow us on Twitter!"
          size={"medium"}
          target="blank"
        />
      </Section>
    </div>
  )
);