import { Storytelling } from "@kickstartds/content/lib/storytelling";

const Recipe = () => (
  <Storytelling
    backgroundColor="#f0fa97"
    box={{
      headline: {
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

export const BannerBackgroudColor = Recipe.bind({});
