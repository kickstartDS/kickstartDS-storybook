import { unpack } from "@kickstartds/core/lib/storybook/helpers";

import HeaderStories from "../header/Header.stories";
import FooterStories from "../footer/Footer.stories";

import { Showcase } from "../showcase/ShowcaseComponent.tsx";
import { Header } from "../header/HeaderComponent";
import { Footer } from "../footer/FooterComponent";

export default {
  title: "Showcase",
};

const Page = () => (
  <>
    <Header {...unpack(HeaderStories.args)} />
    <Showcase
      cover={{
        caption: "Encore Logo",
        src: "img/showcase/encore/encore-cover.png",
      }}
      author={{
        name: "Daniel Ley",
        avatar: "img/profile_images_dley.webp",
      }}
      summary="encore as a German utility company."
      description="encore as a German utility company supports their customers with modern, cloud-based software solutions, and a wide spectrum of services around their business. They create online experiences for their customers, and future-proof their eCommerce, energy billing and services portfolio."
      link="https://www.encore.de/"
      media={[
        {
          mode: "video",
          src: "img/showcase/encore/encore-wheel.webm",
          caption: "Dynamic wheel carousel",
        },
        {
          mode: "image",
          src: "img/showcase/encore/encore-slider.png",
          caption: "Showcase screenshot",
        },
        {
          mode: "image",
          src: "img/showcase/encore/encore-paralax.gif",
          caption:
            "We created a paralax effect for the floating text with multiple background layers.",
        },
      ]}
      quote={{
        byline: "CEO",
        className: undefined,
        image: "img/showcase/encore/encore-quote.jpeg",
        quoteToggle: true,
        source: "Richard McClintock",
        text: "Consequuntur est quia atque eum ducimus. Consequatur fugiat hic eos perferendis. Libero unde omnis dolorem maxime occaecati sapiente distinctio. Consectetur non placeat dolorem est animi.",
      }}
      related={[
        {
          excerpt:
            "Komplexe Technologien für Unternehmen unkompliziert nutzbar machen.",
          image: "img/showcase/maxcluster/maxcluster.jpeg",
          tags: ["CSS", "HTML"],
          title: "maxcluster GmbH - Hosting für E-Commerce Profis",
          typeLabel: "Showcase",
          url: "#",
        },
        {
          excerpt:
            "Eine einmalige Service- und Produktwelt für Energieversorger.",
          image: "img/showcase/encore/encore-cover.png",
          tags: ["JS", "Frameworks"],
          title: "encore - Energie im Herzen",
          typeLabel: "Showcase",
          url: "#",
        },
      ]}
      tags={["Framework", "Design System"]}
      title="encore - Energie im Herzen"
      overviewPage="https://www.kickstartDS.com/showcases/"
    />
    <Footer {...unpack(FooterStories.args)} />
  </>
);

const Template = (args) => <Page {...args} />;
export const ShowcaseEntry = Template.bind({});
