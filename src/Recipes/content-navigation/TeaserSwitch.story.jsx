import { TeaserBox, Section } from "@kickstartds/base";

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
        image="img/examples/generator.svg"
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
        image="img/examples/toolbox.svg"
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

export const TeaserSwitch = Recipe.bind({});
