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
      box={{
        textAlign: "center",
        hAlign: "center",
        headline: {
          content: "Happy to help, dont be shy :)",
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

export const SimpleBanner = Recipe.bind({});
