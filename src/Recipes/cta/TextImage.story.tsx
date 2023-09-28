import { Section } from "@kickstartds/base/lib/section";
import { Storytelling } from "@kickstartds/content/lib/storytelling";

const Recipe = () => (
  <Section width="wide" spaceBefore="none" spaceAfter="none">
    <Storytelling
      image={{
        source: "img/recipes/cta-support.svg",
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
  </Section>
);

export const TextImage = {
  render: Recipe,
};
