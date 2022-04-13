import { Storytelling } from "@kickstartds/content/lib/storytelling";

const Recipe = () => (
  <Storytelling
    backgroundColor="#06566A"
    backgroundImage="img/recipes/graphics--bg.svg"
    box={{
      hAlign: "left",
      headline: {
        level: "h2",
        styleAs: "h1",
        content: "Dont know where to start?",
        subheadline:
          "Autem voluptas quis facere et qui voluptate earum. Dolorum totam animi perferendis.",
      },
      text: "",
      link: {
        label: "Get in touch",
        href: "#",
        variant: "solid-inverted",
      },
    }}
  />
);

export const BannerBackgroundImage = Recipe.bind({});
