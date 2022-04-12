import { Section } from "@kickstartds/base/lib/section";
import { Storytelling } from "@kickstartds/content/lib/storytelling";

const Recipe = () => (
  <Section
    width="narow"
    spaceAfter="none"
    spaceBefore="none"
  >
    <Storytelling
      backgroundColor="#eceff3"
      full
      image={{
        source: "img/recipes/cta-full-image.png",
      }}
      box={{
        textAlign: "left",
        hAlign: "center",
        headline: {
          content: "Contact our support",
          subheadline:
            "Autem voluptas quis facere et qui voluptate earum. Dolorum totam animi perferendis.",
        },
        spaceAfter: "none",
        text: "",
        link: {
          label: "Get in touch",
          href: "#",
          variant: "solid",
        },
      }}
    />
  </Section>
);

export const BannerSplit = Recipe.bind({});
