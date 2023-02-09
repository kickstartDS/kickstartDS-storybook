import { unpack } from "@kickstartds/core/lib/storybook/helpers";

import HeaderStories from "../header/Header.stories";
import FooterStories from "../footer/Footer.stories";

import { Glossary } from "../glossary/GlossaryComponent.tsx";
import { Header } from "../header/HeaderComponent";
import { Footer } from "../footer/FooterComponent";
import { Related } from "../related/RelatedComponent";

import { Section } from "@kickstartds/base";

export default {
  title: "Glossary Entry",
};

const Page = () => (
  <>
    <Header {...unpack(HeaderStories.args)} />
    <Glossary
      cover={{
        caption: 'CSS3 image caption',
        src: 'img/glossary/logo.png'
      }}
      cta={{
        image: {
          order: {
            desktopImageLast: true
          }
        }
      }}
      definition="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
      media={[
        {
          caption: 'CSS3 image caption',
          src: 'https://picsum.photos/seed/glossary-media/640/480'
        },
        {
          caption: 'CSS3 image caption',
          src: 'https://picsum.photos/seed/glossary-media/640/480'
        },
        {
          caption: 'CSS3 image caption',
          src: 'https://picsum.photos/seed/glossary-media/640/480'
        }
      ]}
      stackshare="https://stackshare.io/julrich/decisions/107141570573419830"
      tags={[
        'elitr',
        'elitr',
        'elitr'
      ]}
      term="CSS3"
      related={[
        {
          excerpt: 'JavaScript for us has two uses. On the one hand it is the foundation for progressively layered...',
          image: 'img/showcase/showcase-cover.png',
          tags: [
            'Frontend',
            'HTML',
            'API'
          ],
          title: 'ECMAScript 6 (ES6)',
          type: 'Glossary',
          url: '#'
        },
        {
          excerpt: "ES6 is the specific flavour of JavaScript we're writing for it's much improved module support...",
          image: 'img/showcase/showcase-cover.png',
          tags: [
            'CSS',
            'HTML'
          ],
          title: 'JavaScript',
          type: 'Glossary',
          url: '#'
        }
      ]}
    />
    <Footer {...unpack(FooterStories.args)} />
  </>
);

const Template = (args) => <Page {...args} />;
export const GlossaryEntry = Template.bind({});
