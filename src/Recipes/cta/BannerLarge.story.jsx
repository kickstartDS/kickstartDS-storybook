import { Storytelling } from "@kickstartds/content/lib/storytelling";

const Recipe = () => (
  <Storytelling
    backgroundColor="#ffffff"
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
        variant: "solid",
        size: "large",
      },
    }}
    full
  />
);

export const BannerLarge = Recipe.bind({});
BannerLarge.parameters = {
  backgrounds: { default: "dark" },
};
