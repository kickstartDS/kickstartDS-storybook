import type { Meta, StoryObj } from "@storybook/react";
import { unpack } from "@kickstartds/core/lib/storybook";

import HeaderStories from "../header/Header.stories";
import FooterStories from "../footer/Footer.stories";

import { Appearance as AppearanceComponent } from "../appearance/AppearanceComponent";
import { Header } from "../header/HeaderComponent";
import { Footer } from "../footer/FooterComponent";
import { ComponentProps } from "react";

const Page = () => (
  <>
    <Header
      {...(unpack(HeaderStories.args!) as ComponentProps<typeof Header>)}
    />
    <AppearanceComponent
      title="Podrocket: The starter kit for design systems"
      cover={{
        caption: "Podrocket Logo",
        src: "img/appearance/appearance-cover.jpeg",
      }}
      date="October 21st, 2022"
      description="kickstartDS is a low-code framework and comprehensive component library that enables development teams to create consistent and brand-compliant web frontends. Jonas Ulrich and Daniel Ley join us to talk about kickstartDS, the starter kit for Design Systems. We've talked to Paul Mikulskis about the beginnings of kickstartDS, what we've built so far... and what we still have in our plans! This podcast is a great and short introduction to kickstartDS, we hope you enjoy it!"
      host={{
        name: "Podrocket by Logrocket",
        url: "https://podrocket.logrocket.com/",
      }}
      tags={[
        {
          label: "Framework",
          link: "#",
        },
        {
          label: "Design System",
          link: "#",
        },
      ]}
      language="English"
      link="http://podrocket.logrocket.com/design-system-starter-kit"
      media={[
        {
          caption: "Podcast impression",
          src: "img/appearance/appearance-impression.png",
        },
        {
          caption: "Podcast impression",
          src: "img/appearance/appearance-impression.png",
        },
        {
          caption: "Podcast impression",
          src: "img/appearance/appearance-impression.png",
        },
      ]}
      participants={[
        {
          name: "Daniel Ley",
          avatar: "img/profile_images_dley.webp",
          title: "Founder & CTO, frontend first since day one",
          size: "m",
        },
        {
          name: "Jonas Ulrich",
          avatar: "img/profile_images_julrich.webp",
          title: "Co-Founder + UX Strategist with heart & soul",
          size: "m",
        },
      ]}
      related={[
        {
          excerpt:
            "We talked about how we have put together a code-sided starter kit for digital design systems and...",
          image: "img/showcase/showcase-cover.png",
          tags: [
            {
              label: "Frontend",
              link: "#",
            },
            {
              label: "HTML",
              link: "#",
            },
            {
              label: "API",
              link: "#",
            },
          ],
          title: "Amplifyn ",
          typeLabel: "Appearance",
          url: "/appearance/amplifyn/",
        },
        {
          excerpt:
            "We talked about how we have put together a code-sided starter kit for digital design systems and...",
          image: "img/showcase/showcase-cover.png",
          tags: [
            {
              label: "CSS",
              link: "#",
            },
            {
              label: "HTML",
              link: "#",
            },
          ],
          title: "Podrocket ",
          typeLabel: "Appearance",
          url: "/appearance/amplifyn/",
        },
        {
          excerpt:
            "We talked about how we have put together a code-sided starter kit for digital design systems and...",
          image: "img/showcase/showcase-cover.png",
          tags: [
            {
              label: "JS",
              link: "#",
            },
            {
              label: "Frameworks",
              link: "#",
            },
          ],
          title: "Amplifyn ",
          typeLabel: "Appearance",
          url: "/appearance/amplifyn/",
        },
      ]}
      overviewPage="https://www.kickstartDS.com/appearances/"
    />
    <Footer
      {...(unpack(FooterStories.args!) as ComponentProps<typeof Footer>)}
    />
  </>
);

const meta: Meta<typeof Page> = {
  component: Page,
  title: "Pages/Entries/Appearance",
  parameters: {
    layout: "fullscreen",
    controls: { disabled: true },
  },
};
export default meta;
type Story = StoryObj<typeof Page>;

export const Appearance: Story = {};
