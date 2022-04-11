import { Storytelling } from "@kickstartds/content/lib/storytelling";
import { Section } from "@kickstartds/base/lib/section";

const Recipe = () => (
  <Section
    width="full"
    spaceBefore="none"
    spaceAfter="none"
  >
    <Storytelling
      backgroundColor="#150925"
      backgroundImage="./"
      box={{
        headline: {
          content: "Cristall clear images",
          level: "h1",
          styleAs: "h1",
        },
        text: `
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.

Autem voluptas quis facere et qui voluptate earum. Dolorum totam animi perferendis.`,
        vAlign: "center",

        links: [
          {
            fillAnimation: false,
            href: '#',
            iconAfter: false,
            iconAnimation: false,
            iconBefore: false,
            label: 'View product',
            newTab: false,
            size: 'medium',
            variant: 'outline-inverted'
          },
        ],
      }}
      image={{
        source: "img/recipes/469440.png",
        order: {
          desktopImageLast: true,
        },
      }}
      full
    />
  </Section>
);

export const Dark = Recipe.bind({});
