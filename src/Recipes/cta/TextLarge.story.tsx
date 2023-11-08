import { Storytelling } from "@kickstartds/content/lib/storytelling";

const Recipe = () => (
  <Storytelling
    backgroundColor="#ffffff"
    box={{
      textAlign: "center",
      hAlign: "center",
      headline: {
        level: "h1",
        styleAs: "h1",
        content: "Feeling interested?",
        subheadline:
          "Autem voluptas quis facere et qui voluptate earum. Dolorum totam animi perferendis.",
      },
      text: "",
      // @ts-expect-error
      links: [
        {
          fillAnimation: false,
          href: "#",
          iconAfter: false,
          iconAnimation: false,
          iconBefore: false,
          label: "Start now",
          newTab: false,
          size: "medium",
          variant: "solid",
        },
        {
          href: "#",
          label: "Learn more",
          variant: "outline",
        },
      ],
    }}
  />
);

export const TextLarge = {
  render: Recipe,
  parameters: {
    backgrounds: { default: "dark" },
  },
};
