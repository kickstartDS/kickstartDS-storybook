import { unpack } from "@kickstartds/core/lib/storybook/helpers";

import { Button, Section, TagLabel, Headline, RichText, Picture, TeaserBox } from "@kickstartds/base";
import { TextArea } from "@kickstartds/form";

import HeaderStories from "../header/Header.stories";
import FooterStories from "../footer/Footer.stories";

import { Header } from "../header/HeaderComponent";
import { Footer } from "../footer/FooterComponent";
import { SourceSnippet } from "../source-snippet/SourceSnippetComponent";
import { Source } from "../source/SourceComponent";


export default {
  title: "Concierge",
};

const Page = () => (
  <>
    <div
      ks-theme="dark"
      ks-inverted="true"
    >
      <Header  {...unpack(HeaderStories.args)} dark announcementBar={{
        content: "",
      }} />
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
        pattern="3"
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
      <Section spaceBefore="small" background="accent" width="default">
        <div className="template template--concierge">
          <div className="template__main">
            <RichText text={`Hey there!

A design system is a library of reusable components governed by a set a foundational standards, such as color, typography, and grid. Additionally, guidelines and documentation accompany all components along with guiding patterns and best practices. Teams are encouraged to leverage the system and its documentation to build repeatable designs within applications or interfaces.

My updated definition is as follows: A design system is the official story of how an organization designs and builds digital interfaces. It is a connected, package-managed, version-controlled software product that contains the smallest set of components and guidelines an organization needs to make digital products consistently, efficiently and happily.

If I have ~30 seconds in an elevator or over animated slides, I’ll lead with: Almost always, a design system offers a library of visual style and components documented and released as reusable code for developers and/or tool(s) for designers. A system may also offer guidance on accessibility, page layout, and editorial and less often branding, data viz, UX patterns, and other tools. A design system is adopted by and supported for other teams making experiences. These teams use it to develop and ship features more efficiently to form a more cohesive customer journey. A design system is made by an individual, team, and/or community. While some arise less formally, organizations now dedicate small to large squad(s) to develop and release system versions and processes over time.` } />
          </div>
          <div className="template__side">
            <div className="source-snippet-menu--wrapper">
              <div className="source-snippet-menu source-snippet-menu--mobile">
                <TeaserBox className="c-source-snippet--mobile"
                  image="/concierge-dude.svg"
                  text="I found 5 relevant sources regarding your question"
                  link={{
                    label: "View Sources",
                    variant: "clear",
                    size: "small",
                    iconAfter: true,
                    href: "#sources",
                    icon: {
                      icon: "chevron-down",
                    }
                  }}
                />

              </div>
              <div className="source-snippet-menu source-snippet-menu--desktop">
                <div className="source-snippet-menu--concierge">
                  <div>
                    <Picture className="source-snippet-menu--avatar" src="/concierge-dude.svg" />
                  </div>
                  <span>I found the following sources relevant to your question 👇</span>
                </div>
                <SourceSnippet title="Why should developers build with Design Systems?" url="https://backlight.dev/blog/why-should-developers-build-with-design-systems" link="#source-1" />
                <SourceSnippet title="What Is a Design System? The Definitive Guide – Blog – Supernova.io" url="https://www.supernova.io/blog/what-is-a-design-system" link="#source-2" />
                <SourceSnippet title="What is a design system and how does it align your team to create better products? - Design strategy guide" url="https://designstrategy.guide/design-management/what-is-a-design-system-and-how-does-it-align-your-team-to-create-better-products" link="#source-3" />
                <SourceSnippet title="Why should developers build with Design Systems?" url="https://backlight.dev/blog/why-should-developers-build-with-design-systems" link="#source-4" />
                <SourceSnippet title="What Is a Design System? The Definitive Guide – Blog – Supernova.io" url="https://www.supernova.io/blog/what-is-a-design-system" link="#source-5" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        gutter="none"
        pattern="1"
        headline={{
          content: "Referenced articles",
          align: "left",
          subheadline:
            "Sections that were used as context to generate the above answer",
        }}
        mode="list"
        id="sources"
      >
        <Source
          title="Why should developers build with Design Systems?"
          url="https://backlight.dev/blog/why-should-developers-build-with-design-systems"
          id="source-1"
          thumbnail="img/concierge/backlight.png"
          sections={
            [
              {
                excerpt: `🧩 Benefits from design tokens Design tokens are core elements of the design language used both by designers and developers to build components in Design Systems. We can refer to tokens as “constants” hosting common values in the Design System codebase. An interesting thread about it here. For instance, here are some common tokens: colors, fonts, spacing, border, radius, opacity, shadows, z-index, … A Design System is a source of truth for tokens, built-in collaboration with designers and developers. All Design System components built on top of tokens benefit from auto updates when tokens are modified. So having a Design System, instead of a standalone component library, makes it easier and more efficient to build consistent and maintainable components. Tips: Design system tokens on the code-side can be synchronized with the Design System on the design-side thanks to some dedicated tools (like Specify) or built-in features in Design System tools (like Backlight).`,
                relevance: "87.78",

              },
              {
                excerpt: `What are Design Tokens? With design systems, individual items on a screen - like a text input - turned into components: reusable elements that are built in one place and referenced in different parts of the product. Similarly, the most basic brand definitions like color, typography, spacing, etc., are turning into Design Tokens. These design decisions are “hard-coded” values, but with Design Tokens they are turned into a string that gets registered in one place - like a JSON file - and re-used everywhere in the interface, enabling an extra layer of consistency to an ever-evolving product. The advantage of the Design Tokens approach is the ability to store the design decisions generically. This information can then get translated into any technology or platform.`,
                relevance: "87.20",
              }
            ]
          }
        />
        <Source
          title="What Is a Design System? The Definitive Guide – Blog – Supernova.io"
          url="https://www.supernova.io/blog/what-is-a-design-system"
          id="source-2"
          thumbnail="img/concierge/supernova.png"
          sections={
            [
              {
                excerpt: `🧩 Benefits from design tokens Design tokens are core elements of the design language used both by designers and developers to build components in Design Systems. We can refer to tokens as “constants” hosting common values in the Design System codebase. An interesting thread about it here. For instance, here are some common tokens: colors, fonts, spacing, border, radius, opacity, shadows, z-index, … A Design System is a source of truth for tokens, built-in collaboration with designers and developers. All Design System components built on top of tokens benefit from auto updates when tokens are modified. So having a Design System, instead of a standalone component library, makes it easier and more efficient to build consistent and maintainable components. Tips: Design system tokens on the code-side can be synchronized with the Design System on the design-side thanks to some dedicated tools (like Specify) or built-in features in Design System tools (like Backlight).`,
                relevance: "85.5",
              }
            ]
          }
        />
        <Source
          title="What is a design system and how does it align your team to create better products? - Design strategy guide"
          url="https://designstrategy.guide/design-management/what-is-a-design-system-and-how-does-it-align-your-team-to-create-better-products/"
          id="source-3"
          thumbnail="img/concierge/design-strategy.png"
          sections={
            [
              {
                excerpt: `What is a design system? A design system is a continuously evolving single source of truth for the whole team that’s working on a project or product. It combines a UI kit, behavior and scale rules, code, and a brand book. It is a collection of reusable components, guided by clear standards, that can be assembled to build any number of applications. Or as Chris Messina, tech evangelist and former Developer Experience Lead at Uber, puts it: “Design systems provide a convenient, centralized, and evolving map of a brand’s known product territories with directional pointers to help you explore new regions`,
                relevance: "81.5",
              }
            ]
          }
        />
        <Source
          title="Why should developers build with Design Systems?"
          url="https://backlight.dev/blog/why-should-developers-build-with-design-systems"
          id="source-4"
          thumbnail="img/concierge/backlight.png"
          sections={
            [
              {
                excerpt: `🧩 Benefits from design tokens Design tokens are core elements of the design language used both by designers and developers to build components in Design Systems. We can refer to tokens as “constants” hosting common values in the Design System codebase. An interesting thread about it here. For instance, here are some common tokens: colors, fonts, spacing, border, radius, opacity, shadows, z-index, … A Design System is a source of truth for tokens, built-in collaboration with designers and developers. All Design System components built on top of tokens benefit from auto updates when tokens are modified. So having a Design System, instead of a standalone component library, makes it easier and more efficient to build consistent and maintainable components. Tips: Design system tokens on the code-side can be synchronized with the Design System on the design-side thanks to some dedicated tools (like Specify) or built-in features in Design System tools (like Backlight).`,
                relevance: "87.78",

              },
              {
                excerpt: `What are Design Tokens? With design systems, individual items on a screen - like a text input - turned into components: reusable elements that are built in one place and referenced in different parts of the product. Similarly, the most basic brand definitions like color, typography, spacing, etc., are turning into Design Tokens. These design decisions are “hard-coded” values, but with Design Tokens they are turned into a string that gets registered in one place - like a JSON file - and re-used everywhere in the interface, enabling an extra layer of consistency to an ever-evolving product. The advantage of the Design Tokens approach is the ability to store the design decisions generically. This information can then get translated into any technology or platform.`,
                relevance: "87.20",
              }
            ]
          }
        />
        <Source
          title="What Is a Design System? The Definitive Guide – Blog – Supernova.io"
          url="https://www.supernova.io/blog/what-is-a-design-system"
          id="source-5"
          thumbnail="img/concierge/supernova.png"
          sections={
            [
              {
                excerpt: `🧩 Benefits from design tokens Design tokens are core elements of the design language used both by designers and developers to build components in Design Systems. We can refer to tokens as “constants” hosting common values in the Design System codebase. An interesting thread about it here. For instance, here are some common tokens: colors, fonts, spacing, border, radius, opacity, shadows, z-index, … A Design System is a source of truth for tokens, built-in collaboration with designers and developers. All Design System components built on top of tokens benefit from auto updates when tokens are modified. So having a Design System, instead of a standalone component library, makes it easier and more efficient to build consistent and maintainable components. Tips: Design system tokens on the code-side can be synchronized with the Design System on the design-side thanks to some dedicated tools (like Specify) or built-in features in Design System tools (like Backlight).`,
                relevance: "85.5",
              }
            ]
          }
        />

      </Section>
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
      <Footer {...unpack(FooterStories.args)} dark />
    </div>
  </>
);

const Template = (args) => <Page {...args} />;
export const Concierge = Template.bind({});
