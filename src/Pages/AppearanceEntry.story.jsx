import { unpack } from "@kickstartds/core/lib/storybook/helpers";

import HeaderStories from "../header/Header.stories";
import FooterStories from "../footer/Footer.stories";

import { Appearance } from "../appearance/AppearanceComponent.tsx";
import { Header } from "../header/HeaderComponent";
import { Footer } from "../footer/FooterComponent";
import { Related } from "../related/RelatedComponent";

import { Section } from "@kickstartds/base";

export default {
  title: "Appearance Entry",
};

const Page = () => (
  <>
    <Header {...unpack(HeaderStories.args)} />
    <Appearance
      cover={{
        caption: 'Podrocket Logo',
        src: 'img/appearance/appearance-cover.jpeg'
      }}
      date="October 21st, 2022"
      description="kickstartDS is a low-code framework and comprehensive component library that enables development teams to create consistent and brand-compliant web frontends. Jonas Ulrich and Daniel Ley join us to talk about kickstartDS, the starter kit for Design Systems. We've talked to Paul Mikulskis about the beginnings of kickstartDS, what we've built so far... and what we still have in our plans! This podcast is a great and short introduction to kickstartDS, we hope you enjoy it!"
      host={{
        name: 'Podrocket by Logrocket',
        url: 'https://podrocket.logrocket.com/'
      }}
      language="English"
      link="http://podrocket.logrocket.com/design-system-starter-kit"
      media={[
        {
          caption: 'Podcast impression',
          src: 'img/appearance/appearance-impression.png'
        },
        {
          caption: 'Podcast impression',
          src: 'img/appearance/appearance-impression.png'
        },
        {
          caption: 'Podcast impression',
          src: 'img/appearance/appearance-impression.png'
        }
      ]}
      participants={[
        'Daniel Ley',
        'Jonas Ulrich'
      ]}
      related={[
        {
          excerpt: 'We talked about how we have put together a code-sided starter kit for digital design systems and...',
          image: 'img/showcase/showcase-cover.png',
          tags: [
            'Frontend',
            'HTML',
            'API'
          ],
          title: 'Amplifyn ',
          type: 'Appearance',
          url: '/appearance/amplifyn/'
        },
        {
          excerpt: 'We talked about how we have put together a code-sided starter kit for digital design systems and...',
          image: 'img/showcase/showcase-cover.png',
          tags: [
            'CSS',
            'HTML'
          ],
          title: 'Podrocket ',
          type: 'Appearance',
          url: '/appearance/amplifyn/'
        },
        {
          excerpt: 'We talked about how we have put together a code-sided starter kit for digital design systems and...',
          image: 'img/showcase/showcase-cover.png',
          tags: [
            'JS',
            'Frameworks'
          ],
          title: 'Amplifyn ',
          type: 'Appearance',
          url: '/appearance/amplifyn/'
        }
      ]}
      title="Podrocket: The starter kit for design systems with Jonas Ulrich and Daniel Ley"
    />
    <Footer {...unpack(FooterStories.args)} />
  </>
);

const Template = (args) => <Page {...args} />;
export const AppearanceEntry = Template.bind({});
