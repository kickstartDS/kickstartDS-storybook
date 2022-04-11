import { Storytelling } from "@kickstartds/content/lib/storytelling";
import { Section } from "@kickstartds/base/lib/section";

const Recipe = () => (
  <Section
    width="full"
    spaceBefore="none"
    spaceAfter="none"
  >
    <Storytelling
      backgroundColor="#000000"
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
        align: "center",
      }}
      image={{
        source: "https://images.unsplash.com/photo-1631747206566-3cf2880892a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        order: {
          desktopImageLast: false,
        },
      }}
      full
    />
  </Section>
);

export const TextBesideProduct = Recipe.bind({});
