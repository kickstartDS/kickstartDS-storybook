import { unpack } from "@kickstartds/core/lib/storybook/helpers";

import { Button, Section, TagLabel, Headline, RichText } from "@kickstartds/base";
import { CollapsibleBox } from "@kickstartds/content";
import { Quote } from "@kickstartds/content";
import { TextArea } from "@kickstartds/form";

import HeaderStories from "../header/Header.stories";
import FooterStories from "../footer/Footer.stories";

import { Header } from "../header/HeaderComponent";
import { Footer } from "../footer/FooterComponent";

export default {
  title: "Concierge",
};

const Page = () => (
  <>
    <div
      ks-theme="dark"
      ks-inverted="true"
    >
      <Section
        spaceAfter="none"
        spaceBefore="none"
      >
        <Header
          announcementBar={{
            visible: false,
          }}
          {...unpack(HeaderStories.args)}
        />
      </Section>
      <Section
        width="default"
        spaceAfter="small"
        spaceBefore="small"

      >
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

      >
        <TextArea
          id="concierge-question-input"
          className="c-form-field__input--highlight"
          hideLabel
          rows={5}
          placeholder={`"Why should I care about Design Systems, and what are the main reasons to start one?"

... or maybe you'd like to know something about kickstartDS... I know about that as well, so fire away!
            `}
        />

        <div>
          <TagLabel size="s" label="Concierge is awaiting your request!" />
        </div>

        <div>
          <Button
            size="small"
            label="Ask another question"
            variant="outline"
          />
        </div>
      </Section>
      <Section spaceBefore="small" background="accent" width="narrow">
        <Quote text="#tldr There is no set number of design tokens that a design system needs, as it depends on the complexity of the system and the number of components it needs to support. However, it is important to ensure that the design tokens are meaningful and well-defined, and that they are used consistently across the system.

Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. We use them in place of hard-coded values (such as hex values for color or pixel values for spacing) in order to maintain a scalable and consistent visual system for UI development. Design tokens move variables to a higher level, making it easier to manage brand attributes without diving deep into a codebase." />
      </Section>

      <Section
        width="default"
        spaceBefore="small"
        gutter="small"
        headline={{
          content: "Referenced articles",
          align: "left",
          subheadline:
            "Sections that were used as context to generate the above answer",
        }}
        mode="list"
      >

        <div>

          <CollapsibleBox
            summary="Creating Themeable Design Systems | Brad Frost"
            text={`Design Tokens and a Multi-Tiered Variable System From Salesforce’s Lightning Design System, which popularized the term “design tokens” in design systems: Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. We use them in place of hard-coded values (such as hex values for color or pixel values for spacing) in order to maintain a scalable and consistent visual system for UI development. Design tokens move variables to a higher level, making it easier to manage brand attributes without diving deep into a codebase. For a design system powering multiple brands, each brand defines their own design tokens, which then hook into the design system’s codebase. To accomplish this in my own work, I tend to break these variables into several tiers.   

**Relevance:** 75%`}
            renderText={(text) => (
              <>
                <RichText text={text} />
                <Button
                  href="#"
                  label="Open reference"
                  size="medium"
                  variant={"clear"}
                  iconAfter
                  icon={{
                    icon: "chevron-right"
                  }}
                />
              </>
            )}
          />
          <CollapsibleBox
            summary="Introduction to Design Tokens · Michael Mangialardi"
            text={`Design Tokens and a Multi-Tiered Variable System From Salesforce’s Lightning Design System, which popularized the term “design tokens” in design systems: Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. We use them in place of hard-coded values (such as hex values for color or pixel values for spacing) in order to maintain a scalable and consistent visual system for UI development. Design tokens move variables to a higher level, making it easier to manage brand attributes without diving deep into a codebase. For a design system powering multiple brands, each brand defines their own design tokens, which then hook into the design system’s codebase. To accomplish this in my own work, I tend to break these variables into several tiers.   

**Relevance:** 75%`}
            renderText={(text) => (
              <>
                <RichText text={text} />
                <Button
                  href="#"
                  label="Open reference"
                  size="medium"
                  variant={"clear"}
                  iconAfter
                  icon={{
                    icon: "chevron-right"
                  }}
                />
              </>
            )}
          />
          <CollapsibleBox
            summary="Release Notes - Lightning Design System"
            text={`Design Tokens and a Multi-Tiered Variable System From Salesforce’s Lightning Design System, which popularized the term “design tokens” in design systems: Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. We use them in place of hard-coded values (such as hex values for color or pixel values for spacing) in order to maintain a scalable and consistent visual system for UI development. Design tokens move variables to a higher level, making it easier to manage brand attributes without diving deep into a codebase. For a design system powering multiple brands, each brand defines their own design tokens, which then hook into the design system’s codebase. To accomplish this in my own work, I tend to break these variables into several tiers.   

**Relevance:** 75%`}
            renderText={(text) => (
              <>
                <RichText text={text} />
                <Button
                  href="#"
                  label="Open reference"
                  size="medium"
                  variant={"clear"}
                  iconAfter
                  icon={{
                    icon: "chevron-right"
                  }}
                />
              </>
            )}
          />

        </div>
        <div
          style={{
            color: "var(--ks-text-color-default)",
            font: "var(--ks-font-copy-s)",
          }}
        >
          We currently include the following pages in our index:
          <ul>
            <li>
              <a target="blank" href="https://www.kickstartDS.com">
                www.kickstartDS.com
              </a>
            </li>
            <li>
              <a target="blank" href="https://bradfrost.com">
                bradfrost.com
              </a>
            </li>
            <li>
              <a target="blank" href="https://danmall.com">
                danmall.com
              </a>
            </li>
            <li>
              <a target="blank" href="https://atlassian.design">
                atlassian.design
              </a>
            </li>
            <li>
              <a target="blank" href="https://eightshapes.com">
                eightshapes.com
              </a>
            </li>
            <li>
              <a target="blank" href="https://designbetter.co">
                designbetter.co
              </a>
            </li>
            <li>
              <a target="blank" href="https://blog.damato.design">
                blog.damato.design
              </a>
            </li>
            <li>
              <a target="blank" href="https://design-system.service.gov.uk">
                design-system.service.gov.uk
              </a>
            </li>
            <li>
              <a target="blank" href="https://paste.twilio.design">
                paste.twilio.design
              </a>
            </li>
            <li>
              <a target="blank" href="https://orbit.kiwi">
                orbit.kiwi
              </a>
            </li>
            <li>
              <a target="blank" href="https://primer.style">
                primer.style
              </a>
            </li>
            <li>
              <a target="blank" href="https://volkswagen.frontify.com">
                volkswagen.frontify.com
              </a>
            </li>
          </ul>
          Want to be included? Or don't like being a part of this? Feel free
          to contact us! We'll change that ASAP. This is meant as a community
          resource, and the goal with this it to ultimately drive people to
          good sources for their questions, thus furthering our goal of
          democratizing Design Systems 🙌
        </div>

      </Section>
      <Section
        headline={{
          content: "Get in contact!",
          subheadline:
            "This is still an early idea, we'd love to know what you think about it. If this is something people like, we already have more than enough ideas on how to iterate on this... but we'll have to see!",
          align: "center",
        }}
        width="wide"
        background="accent"
      >
        <Button
          href="mailto:hello@kickstartDS.com"
          variant="solid"
          label="Send us an email!"
          size={"medium"}
          target="blank"
        />
        <Button
          variant="solid"
          label="Join our Discord community!"
          size={"medium"}
          href="https://discord.gg/mwKzD5gejY"
          target="blank"
        />
        <Button
          href="https://twitter.com/intent/follow?screen_name=kickstartDS"
          variant="solid"
          label="Follow us on Twitter!"
          size={"medium"}
          target="blank"
        />
      </Section>
    </div>
  </>
);

const Template = (args) => <Page {...args} />;
export const Concierge = Template.bind({});
