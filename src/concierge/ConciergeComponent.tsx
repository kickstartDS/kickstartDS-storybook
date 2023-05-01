import React, { forwardRef, HTMLAttributes } from "react";

import { Headline } from "@kickstartds/base/lib/headline";
import { TeaserBox } from "@kickstartds/base/lib/teaser-box";
import { TextMedia } from "@kickstartds/base/lib/text-media";
import { RichText } from "@kickstartds/base/lib/rich-text";
import { TextArea } from "@kickstartds/form/lib/text-area";

import { Source } from "../source/SourceComponent";
import { Section } from "../section/SectionComponent";
import { Button } from "../button/ButtonComponent";
import { AvatarIntro } from "./AvatarIntroComponent";
import { AvatarSources } from "./AvatarSourcesComponent";
import { SourceSnippet } from "../source-snippet/SourceSnippetComponent";
import { ConciergeProps as ConciergeSchemaProps } from "./ConciergeProps";

const defaultHandleResetPrompt = () => {
  document.querySelector("#msg")?.scrollIntoView({ block: "center" });
  return;
};

const defaultHandleConciergeConfirm = () => {
  document
    .querySelector(".template--concierge")
    ?.scrollIntoView({ block: "center" });
  return;
};

export type ConciergeProps = ConciergeSchemaProps & {
  handleResetPrompt?: typeof defaultHandleResetPrompt;
  handleConciergeConfirm?: typeof defaultHandleConciergeConfirm;
};

export const Concierge = forwardRef<
  HTMLTextAreaElement,
  ConciergeProps & HTMLAttributes<HTMLDivElement>
>(
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
    <div className="concierge" {...props}>
      <Section
        className="l-section--reverse"
        width="default"
        spaceAfter="small"
        spaceBefore="small"
      >
        <AvatarIntro
          className={
            status.code === "idle" && !answer ? "idling-animation" : ""
          }
        />
        <div>
          <Headline
            level="h1"
            align="left"
            content="Design System Concierge"
            subheadline="Ask anything and get pointed the right way"
            renderContent={(content) => (
              <div>
                {content}
                <br />
                <a
                  href="https://www.producthunt.com/posts/design-system-concierge?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-design&#0045;system&#0045;concierge"
                  target="_blank"
                >
                  <img
                    src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=391189&theme=light"
                    alt="Design&#0032;System&#0032;Concierge - Your&#0032;AI&#0045;powered&#0032;Design&#0032;System&#0032;assistant | Product Hunt"
                    style={{
                      width: "250px",
                      height: "54px",
                      marginTop: "1rem",
                    }}
                    width="250"
                    height="54"
                  />
                </a>
              </div>
            )}
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
            rows={5}
            ref={textAreaRef}
            placeholder={placeholder}
          />
        </div>
        <div>
          {status.code !== "loading" &&
            status.code !== "responding" &&
            answer && (
              <Button
                size="medium"
                onClick={handleResetPrompt}
                label="Ask another question"
                variant="outline"
              />
            )}
          {status.code === "idle" && !answer && (
            <Button
              size="medium"
              label="Ask question"
              variant="solid"
              onClick={handleConciergeConfirm}
            />
          )}
        </div>
      </Section>
      <Section spaceBefore="small" background="accent" width="default">
        <div className="template template--concierge">
          <div className="template__main">
            {status.code !== "loading" && !answer && status.code !== "error" && (
              <div>
                <div>
                  <Headline
                    content="Not sure where to start?"
                    subheadline="Try one of the following questions:"
                    level="h2"
                    styleAs="h4"
                  />
                  <ul className="c-tag-label--list">
                    {textAreaRef &&
                      typeof textAreaRef !== "function" &&
                      questions &&
                      questions.length > 0 &&
                      questions.map((question, index) => {
                        return (
                          <li key={`question-${index}`}>
                            <span
                              className="concierge--question"
                              onClick={() => {
                                if (textAreaRef.current) {
                                  textAreaRef.current.value = question;
                                }
                                handleConciergeConfirm();
                              }}
                            >
                              {`${question}`}
                            </span>
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
                  <li key="problem-1">
                    Concierge is having some technical difficulties, he'll be
                    right back then!
                  </li>
                  <li key="problem-2">
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
                marginTop: "var(--ks-spacing-m)",
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
              <a href="/blog/launching-the-design-system-concierge/">
                Read our blog post about it!
              </a>
              <br />
              <br />
              <span>
                And we'd love to hear your thoughts on how the Concierge has
                helped with your Design System-related questions. Your feedback
                is invaluable as we work to improve the experience.{" "}
                <a href="https://discord.gg/mwKzD5gejY" target="_blank">
                  Join our Discord Community
                </a>{" "}
                to share any comments or suggestions, and thank you for being
                part of our journey!
              </span>
              <br />
              <br />
              <Button
                label="Join our Discord Community"
                size="small"
                variant="outline"
                href="https://discord.gg/mwKzD5gejY"
                newTab={true}
              />
            </div>
          </div>
          <div className="template__side">
            <div className="concierge-context-menu--wrapper">
              <div className="concierge-context-menu concierge-context-menu--mobile">
                <TeaserBox
                  className="c-source-snippet--mobile"
                  image="/img/concierge/concierge-sources.svg"
                  text={`I found ${
                    sources?.length || 0
                  } relevant sources regarding your question`}
                  link={{
                    label: "View Sources",
                    variant: "clear",
                    size: "small",
                    iconAfter: {
                      icon: "chevron-down",
                    },
                    href: "#sources",
                  }}
                  ratio={undefined}
                />
              </div>
              <div className="concierge-context-menu concierge-context-menu--desktop">
                <div className="concierge-context-menu--concierge">
                  <AvatarSources
                    className={
                      status.code === "idle" && !answer
                        ? "idling-animation"
                        : ""
                    }
                  />
                  <span>Relevant sources</span>
                </div>
                {sources &&
                  sources.length > 0 &&
                  sources
                    .slice(0, 5)
                    .map((source) => (
                      <SourceSnippet
                        title={source.title}
                        url={new URL(source.url).hostname.replace("www.", "")}
                        link={`#${source.id}`}
                      />
                    ))}
                {!sources ||
                  (sources.length === 0 && (
                    <div className="c-source-snippet--placeholder">
                      All relevant sources used for the generation of your
                      answers will be listed.
                    </div>
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
              thumbnail={reference.thumbnail}
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
                index.slice(0, 18).map((page, index) => (
                  <li key={`references-col1-${index}`}>
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
                index.slice(18, 36).map((page, index) => (
                  <li key={`references-col2-${index}`}>
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
                index.slice(36, 54).map((page, index) => (
                  <li key={`references-col3-${index}`}>
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
        <Button
          href="mailto:hello@kickstartDS.com"
          variant="solid"
          label="Send us an email!"
          size={"medium"}
          newTab
        />
        <Button
          variant="solid"
          label="Join our Discord community!"
          size={"medium"}
          href="https://discord.gg/mwKzD5gejY"
          newTab
        />
        <Button
          href="https://twitter.com/intent/follow?screen_name=kickstartDS"
          variant="solid"
          label="Follow us on Twitter!"
          size={"medium"}
          newTab
        />
      </Section>
    </div>
  )
);
