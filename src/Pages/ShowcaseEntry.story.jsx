import { unpack } from "@kickstartds/core/lib/storybook/helpers";

import HeaderStories from "../header/Header.stories";
import FooterStories from "../footer/Footer.stories";

import { Showcase } from "../showcase/ShowcaseComponent.tsx";
import { Header } from "../header/HeaderComponent";
import { Footer } from "../footer/FooterComponent";
import { Related } from "../related/RelatedComponent";

import { Section } from "@kickstartds/base";

export default {
  title: "Showcase Entry",
};

const Page = () => (
  <>
    <Header {...unpack(HeaderStories.args)} />
    <Showcase
      cover={{
        caption: 'Encore Logo',
        src: 'img/showcase/showcase-cover.png'
      }}
      summary="encore as a German utility company supports their customers with modern, cloud-based software solutions."
      description="encore as a German utility company supports their customers with modern, cloud-based software solutions, and a wide spectrum of services around their business. They create online experiences for their customers, and future-proof their eCommerce, energy billing and services portfolio."
      link="https://www.encore.de/"
      media={[
        {
          caption: 'Showcase screenshot',
          src: 'img/showcase/Showcase_screen.png'
        },
        {
          caption: 'Showcase screenshot',
          src: 'img/showcase/Showcase_screen.png'
        },
        {
          caption: 'Showcase screenshot',
          src: 'img/showcase/Showcase_screen.png'
        }
      ]}
      quote={{
        byline: 'CEO',
        className: undefined,
        image: 'https://picsum.photos/seed/kdsquote/300/300',
        quoteToggle: true,
        source: 'Richard McClintock',
        text: 'Consequuntur est quia atque eum ducimus. Consequatur fugiat hic eos perferendis. Libero unde omnis dolorem maxime occaecati sapiente distinctio. Consectetur non placeat dolorem est animi.\n\nSuscipit quos rem suscipit culpa. Et distinctio et veritatis consectetur quae dolorem aut. Explicabo commodi repudiandae fugiat. Accusamus alias mollitia perferendis qui iure magni. Minus est vitae dolor dolor.'
      }}
      author={{
        name: "Daniel Ley",
        avatar: "img/profile_images_dley.webp",
        title: "Co-Founder + UX Strategist with heart & soul"
      }}
      related={[

        {
          excerpt: 'Komplexe Technologien für Unternehmen unkompliziert nutzbar machen.',
          image: 'img/showcase/maxcluster/maxcluster.jpeg',
          tags: [
            'CSS',
            'HTML'
          ],
          title: 'maxcluster GmbH - Hosting für E-Commerce Profis',
          type: 'Showcase',
          url: '#'
        },
        {
          excerpt: 'Eine einmalige Service- und Produktwelt für Energieversorger.',
          image: 'img/showcase/encore/encore-cover.png',
          tags: [
            'JS',
            'Frameworks'
          ],
          title: 'encore - Energie im Herzen',
          type: 'Showcase',
          url: '#'
        }
      ]}
      tags={[
        'Framework',
        'Design System'
      ]}
      title="encore - Energie im Herzen"
    />
    <Footer {...unpack(FooterStories.args)} />
  </>
);

const Template = (args) => <Page {...args} />;
export const ShowcaseEntry = Template.bind({});
