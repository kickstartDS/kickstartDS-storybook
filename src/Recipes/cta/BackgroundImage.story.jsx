import { Storytelling } from "@kickstartds/content/lib/storytelling";

const Recipe = () => (
  <Storytelling
    backgroundColor="#06566A"
    backgroundImage="img/examples/graphics--bg.svg"
    image={{
      order: {
        desktopImageLast: true,
      },
    }}
    box={{
      headline: {
        level: "h1",
        styleAs: "h1",
        content: "Got any questions?",
        subheadline:
          "Autem voluptas quis facere et qui voluptate earum. Dolorum totam animi perferendis.",
      },
      text: "",
      link: {
        label: "Get in touch",
        href: "#",
        variant: "outline-inverted",
        size: "large",
      },
    }}
    full
  />
);

export const BackgroundImage = Recipe.bind({});
