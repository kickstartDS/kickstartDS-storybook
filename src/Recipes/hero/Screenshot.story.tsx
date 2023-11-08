import { Section } from "@kickstartds/base/lib/section";
import { Storytelling } from "@kickstartds/content/lib/storytelling";

const Recipe = () => (
  <Section width="full" spaceAfter="none" spaceBefore="none">
    <Storytelling
      backgroundColor="#eceff3"
      full
      image={{
        source: "img/recipes/sanity-shadow.png",
      }}
      box={{
        textAlign: "left",
        hAlign: "center",
        headline: {
          content: "Build beyond your expectations",
          subheadline:
            "Autem voluptas quis facere et qui voluptate earum. Dolorum totam animi perferendis.",
        },
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Autem voluptas quis facere et qui voluptate earum. Dolorum totam animi perferendis.",
        links: [
          {
            fillAnimation: false,
            href: "#",
            iconAnimation: false,
            label: "Start building",
            newTab: false,
            size: "medium",
            variant: "solid",
          },
          {
            href: "#",
            label: "Get a demo",
            variant: "outline",
          },
        ],
      }}
    />
  </Section>
);

export const Screenshot = {
  render: Recipe,
};
