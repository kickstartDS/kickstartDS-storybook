import { Section } from "@kickstartds/base/lib/section";
import { TeaserBox } from "@kickstartds/base/lib/teaser-box";

const Recipe = () => (
  <>
    <Section
      width="wide"
      headline={{
        styleAs: "h1",
        content: "How can we help you?",
        align: "center",
      }}
    >
      <TeaserBox
        topic="Generators"
        image="img/recipes/generator.svg"
        ratio="none"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        link={{
          variant: "clear",
          label: "Explore generators",
          iconAfter: true,
          icon: {
            icon: "chevron-right",
          },
        }}
        imageSpacing
      />
      <TeaserBox
        topic="Components"
        image="img/recipes/toolbox.svg"
        ratio="none"
        text="Tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod."
        link={{
          variant: "clear",
          label: "See our components",
          iconAfter: true,
          icon: {
            icon: "chevron-right",
          },
        }}
        imageSpacing
      />
    </Section>
  </>
);

export const Switch = Recipe.bind({});
