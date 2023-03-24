import { unpack } from "@kickstartds/core/lib/storybook/helpers";

import { Button, Section, TagLabel, Headline, RichText, Divider } from "@kickstartds/base";
import { CollapsibleBox } from "@kickstartds/content";
import { Quote } from "@kickstartds/content";
import { TextArea } from "@kickstartds/form";

import HeaderStories from "../header/Header.stories";
import FooterStories from "../footer/Footer.stories";

import { Header } from "../header/HeaderComponent";
import { Footer } from "../footer/FooterComponent";
import { Inline, Split, Stack } from "@bedrock-layout/primitives";
import { SourceSnippet } from "../source-snippet/SourceSnippetComponent";

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
          light
          navEnabled
          homeLink="https://www.kickstartds.com/"
          cta={{
            label: "Blog",
            href: "/blog",
          }}
          navEntries={[
            {
              label: "Integrations",
              href: "/integrations",
              id: "integrations"
            },
            {
              label: "Services",
              href: "/services",
              id: "services"
            },
            {
              label: "About",
              href: "/about",
              id: "about"
            }
          ]}
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
        <div className="c-form-field--concierge">
          <span id="msg" class="c-form-field__label">Concierge is awaiting your request!</span>
          <TextArea
            label="Concierge is awaiting your request!"
            id="concierge-question-input"
            hideLabel
            className="c-form-field__input--highlight"
            rows={6}
            placeholder={`"Why should I care about Design Systems, and what are the main reasons to start one?"

... or maybe you'd like to know something about kickstartDS... I know about that as well, so fire away!
            `}
          />
        </div>
        <div>
          <Button
            size="meduim"
            label="Ask question"
            variant="solid"
          />
        </div>
      </Section>
      <Section spaceBefore="small" background="accent" width="narrow">
        <div className="template template--concierge">
          <div className="template__main">
            <RichText text={`Hey there!

A design system is a library of reusable components governed by a set a foundational standards, such as color, typography, and grid. Additionally, guidelines and documentation accompany all components along with guiding patterns and best practices. Teams are encouraged to leverage the system and its documentation to build repeatable designs within applications or interfaces.

My updated definition is as follows: A design system is the official story of how an organization designs and builds digital interfaces. It is a connected, package-managed, version-controlled software product that contains the smallest set of components and guidelines an organization needs to make digital products consistently, efficiently and happily.

If I have ~30 seconds in an elevator or over animated slides, I’ll lead with: Almost always, a design system offers a library of visual style and components documented and released as reusable code for developers and/or tool(s) for designers. A system may also offer guidance on accessibility, page layout, and editorial and less often branding, data viz, UX patterns, and other tools. A design system is adopted by and supported for other teams making experiences. These teams use it to develop and ship features more efficiently to form a more cohesive customer journey. A design system is made by an individual, team, and/or community. While some arise less formally, organizations now dedicate small to large squad(s) to develop and release system versions and processes over time.` } />
          </div>
          <div className="template__side">
            <Stack gutter="var(--ks-spacing-stack-xs)">
              <SourceSnippet title="supernova.io" text="What Is a Design System? The Definitive Guide" />
              <Divider />
              <SourceSnippet title="designstrategy.guide" text="What is a design system and how does it align your team to create better products?" />
              <Divider />
              <SourceSnippet title="delldesignsystem.com" text="About the Dell Design System" />
            </Stack>
          </div>
        </div>
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
          className="reference"
        >
          <div className="reference__column">
            <ul>
              <li>
                <a target="blank" href="https://acorn.firefox.com/">
                  https://acorn.firefox.com/
                </a>
              </li>
              <li>
                <a target="blank" href="https://atlassian.design/">
                  https://atlassian.design/
                </a>
              </li>
              <li>
                <a target="blank" href="https://atomicdesign.bradfrost.com/">
                  https://atomicdesign.bradfrost.com/
                </a>
              </li>
              <li>
                <a target="blank" href="https://backlight.dev/">
                  https://backlight.dev/
                </a>
              </li>
              <li>
                <a target="blank" href="https://blog.damato.design/">
                  https://blog.damato.design/
                </a>
              </li>
              <li>
                <a target="blank" href="https://bradfrost.com/">
                  https://bradfrost.com/
                </a>
              </li>
              <li>
                <a target="blank" href="https://build.washingtonpost.com/">
                  https://build.washingtonpost.com/
                </a>
              </li>
              <li>
                <a target="blank" href="https://chakra-ui.com/">
                  https://chakra-ui.com/
                </a>
              </li>
              <li>
                <a target="blank" href="https://clarity.design/">
                  https://clarity.design/
                </a>
              </li>
              <li>
                <a target="blank" href="https://cloudscape.design/">
                  https://cloudscape.design/
                </a>
              </li>
              <li>
                <a
                  target="blank"
                  href="https://comet.discoveryeducation.com/"
                >
                  https://comet.discoveryeducation.com/
                </a>
              </li>
              <li>
                <a target="blank" href="https://cultureamp.design/">
                  https://cultureamp.design/
                </a>
              </li>
              <li>
                <a target="blank" href="https://danmall.com/">
                  https://danmall.com/
                </a>
              </li>
              <li>
                <a
                  target="blank"
                  href="https://design-system.service.gov.uk/"
                >
                  https://design-system.service.gov.uk/
                </a>
              </li>
              <li>
                <a target="blank" href="https://design-tokens.github.io/">
                  https://design-tokens.github.io/
                </a>
              </li>
              <li>
                <a target="blank" href="https://design.gitlab.com/">
                  https://design.gitlab.com/
                </a>
              </li>
              <li>
                <a target="blank" href="https://designstrategy.guide/">
                  https://designstrategy.guide/
                </a>
              </li>
              <li>
                <a target="blank" href="https://designsystem.digital.gov/">
                  https://designsystem.digital.gov/
                </a>
              </li>
            </ul>
          </div>
          <div className="reference__column">
            <ul>
              <li>
                <a
                  target="blank"
                  href="https://designsystem.webstandards.ca.gov/"
                >
                  https://designsystem.webstandards.ca.gov/
                </a>
              </li>
              <li>
                <a
                  target="blank"
                  href="https://digitaldesign.vattenfall.com/"
                >
                  https://digitaldesign.vattenfall.com/
                </a>
              </li>
              <li>
                <a target="blank" href="https://docs.astro.build/">
                  https://docs.astro.build/
                </a>
              </li>
              <li>
                <a target="blank" href="https://docs.tokens.studio/">
                  https://docs.tokens.studio/
                </a>
              </li>
              <li>
                <a target="blank" href="https://druids.datadoghq.com/">
                  https://druids.datadoghq.com/
                </a>
              </li>
              <li>
                <a target="blank" href="https://eightshapes.com/">
                  https://eightshapes.com/
                </a>
              </li>
              <li>
                <a target="blank" href="https://help.knapsack.cloud/">
                  https://help.knapsack.cloud/
                </a>
              </li>
              <li>
                <a target="blank" href="https://kickstartDS.com/">
                  https://kickstartDS.com/
                </a>
              </li>
              <li>
                <a target="blank" href="https://mui.com/">
                  https://mui.com/
                </a>
              </li>
              <li>
                <a target="blank" href="https://nextjs.org/">
                  https://nextjs.org/
                </a>
              </li>
              <li>
                <a target="blank" href="https://nordhealth.design/">
                  https://nordhealth.design/
                </a>
              </li>
              <li>
                <a target="blank" href="https://nuxtjs.org/">
                  https://nuxtjs.org/
                </a>
              </li>
              <li>
                <a target="blank" href="https://orbit.kiwi/">
                  https://orbit.kiwi/
                </a>
              </li>
              <li>
                <a target="blank" href="https://paste.twilio.design/">
                  https://paste.twilio.design/
                </a>
              </li>
              <li>
                <a target="blank" href="https://polaris.shopify.com/">
                  https://polaris.shopify.com/
                </a>
              </li>
              <li>
                <a target="blank" href="https://primer.style/">
                  https://primer.style/
                </a>
              </li>
              <li>
                <a target="blank" href="https://react-spectrum.adobe.com/">
                  https://react-spectrum.adobe.com/
                </a>
              </li>
              <li>
                <a target="blank" href="https://react.dev/">
                  https://react.dev/
                </a>
              </li>
            </ul>
          </div>
          <div className="reference__column">
            <ul>
              <li>
                <a target="blank" href="https://remix.run/">
                  https://remix.run/
                </a>
              </li>
              <li>
                <a target="blank" href="https://rivet.iu.edu/">
                  https://rivet.iu.edu/
                </a>
              </li>
              <li>
                <a target="blank" href="https://spectrum.adobe.com/">
                  https://spectrum.adobe.com/
                </a>
              </li>
              <li>
                <a target="blank" href="https://svelte.dev/">
                  https://svelte.dev/
                </a>
              </li>
              <li>
                <a target="blank" href="https://ux.mailchimp.com/">
                  https://ux.mailchimp.com/
                </a>
              </li>
              <li>
                <a target="blank" href="https://vuejs.org/">
                  https://vuejs.org/
                </a>
              </li>
              <li>
                <a target="blank" href="https://www.a11yproject.com/">
                  https://www.a11yproject.com/
                </a>
              </li>
              <li>
                <a target="blank" href="https://www.delldesignsystem.com/">
                  https://www.delldesignsystem.com/
                </a>
              </li>
              <li>
                <a target="blank" href="https://www.designbetter.co/">
                  https://www.designbetter.co/
                </a>
              </li>
              <li>
                <a
                  target="blank"
                  href="https://www.designsystemchecklist.com/"
                >
                  https://www.designsystemchecklist.com/
                </a>
              </li>
              <li>
                <a target="blank" href="https://www.designsystems.com/">
                  https://www.designsystems.com/
                </a>
              </li>
              <li>
                <a target="blank" href="https://www.duetds.com/">
                  https://www.duetds.com/
                </a>
              </li>
              <li>
                <a target="blank" href="https://www.knapsack.cloud/">
                  https://www.knapsack.cloud/
                </a>
              </li>
              <li>
                <a
                  target="blank"
                  href="https://www.lightningdesignsystem.com/"
                >
                  https://www.lightningdesignsystem.com/
                </a>
              </li>
              <li>
                <a target="blank" href="https://www.michaelmang.dev/">
                  https://www.michaelmang.dev/
                </a>
              </li>
              <li>
                <a target="blank" href="https://www.radix-ui.com/">
                  https://www.radix-ui.com/
                </a>
              </li>
              <li>
                <a target="blank" href="https://www.supernova.io/">
                  https://www.supernova.io/
                </a>
              </li>
            </ul>
          </div>
        </div>
        <RichText
          className="reference__text"
          text="Want to be included? Or don't like being a part of this? Feel free
          to contact us! We'll change that ASAP. This is meant as a
          community resource, and the goal with this it to ultimately drive
          people to good sources for their questions, thus furthering our
          goal of democratizing Design Systems 🙌" />

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
      <Footer {...unpack(FooterStories.args)} />
    </div>
  </>
);

const Template = (args) => <Page {...args} />;
export const Concierge = Template.bind({});
