import { Storytelling } from "@kickstartds/content/lib/storytelling";

const Recipe = () => (
  <Storytelling
    image={{
      source: "img/lemon.svg",
      order: {
        desktopImageLast: true,
      },
    }}
    box={{
      headline: {
        level: "h3",
        styleAs: "h1",
        content: "Got any questions?",
        subheadline:
          "Autem voluptas quis facere et qui voluptate earum. Dolorum totam animi perferendis.",
      },
      text: "",
      link: {
        label: "Get in touch",
        href: "#",
        variant: "solid",
      },
    }}
    full
  />
);

export const Image = Recipe.bind({});
