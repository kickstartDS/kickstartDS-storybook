import {
  TeaserBox,
  Section,
} from "@kickstartds/base";

const Recipe = () => (
  <>
    <Section
      width="wide"
      mode="tile"
      headline={{
        styleAs: "h2",
        content: "Choose your component",
        align: "center",
      }}
    >
      <TeaserBox
        topic="Button"
        image="img/recipes/icons/button.svg"
        ratio="none"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
        link={{
          hidden: true,
          variant: "clear",
          label: "Explore generators",

        }}
        imageSpacing
      />
      <TeaserBox
        topic="Content Box"
        image="img/recipes/icons/content-box.svg"
        ratio="none"
        text="Consetetur sadipscing elitr, sed diam nonumy eirmod."
        link={{
          hidden: true,
          variant: "clear",
          label: "See our components",

        }}
        imageSpacing
      />
      <TeaserBox
        topic="Count Up"
        image="img/recipes/icons/count-up.svg"
        ratio="none"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
        link={{
          hidden: true,
          variant: "clear",
          label: "See our components",

        }}
        imageSpacing
      />
      <TeaserBox
        topic="Divider"
        image="img/recipes/icons/divider.svg"
        ratio="none"
        text="Consetetur sadipscing elitr, sed diam nonumy eirmod."
        link={{
          hidden: true,
          variant: "clear",
          label: "See our components",

        }}
        imageSpacing
      />
      <TeaserBox
        topic="Divider"
        image="img/recipes/icons/divider.svg"
        ratio="none"
        text="Consetetur sadipscing elitr, sed diam nonumy eirmod."
        link={{
          hidden: true,
          variant: "clear",
          label: "See our components",

        }}
        imageSpacing
      />
      <TeaserBox
        topic="Headline"
        image="img/recipes/icons/headline.svg"
        ratio="none"
        text="Consetetur sadipscing elitr, sed diam nonumy eirmod."
        link={{
          hidden: true,
          variant: "clear",
          label: "See our components",

        }}
        imageSpacing
      />
      <TeaserBox
        topic="Quote Slider"
        image="img/recipes/icons/quote-slider.svg"
        ratio="none"
        text="Consetetur sadipscing elitr, sed diam nonumy eirmod."
        link={{
          hidden: true,
          variant: "clear",
          label: "See our components",

        }}
        imageSpacing
      />
      <TeaserBox
        topic="Section"
        image="img/recipes/icons/section.svg"
        ratio="none"
        text="Consetetur sadipscing elitr, sed diam nonumy eirmod."
        link={{
          hidden: true,
          variant: "clear",
          label: "See our components",

        }}
        imageSpacing
      />
      <TeaserBox
        topic="Slider"
        image="img/recipes/icons/slider.svg"
        ratio="none"
        text="Consetetur sadipscing elitr, sed diam nonumy eirmod."
        link={{
          hidden: true,
          variant: "clear",
          label: "See our components",

        }}
        imageSpacing
      />
      <TeaserBox
        topic="Storytelling"
        image="img/recipes/icons/storytelling.svg"
        ratio="none"
        text="Consetetur sadipscing elitr, sed diam nonumy eirmod."
        link={{
          hidden: true,
          variant: "clear",
          label: "See our components",

        }}
        imageSpacing
      />
      <TeaserBox
        topic="Tag Label"
        image="img/recipes/icons/tag-label.svg"
        ratio="none"
        text="Consetetur sadipscing elitr, sed diam nonumy eirmod."
        link={{
          hidden: true,
          variant: "clear",
          label: "See our components",

        }}
        imageSpacing
      />
      <TeaserBox
        topic="Text Media"
        image="img/recipes/icons/text-media.svg"
        ratio="none"
        text="Consetetur sadipscing elitr, sed diam nonumy eirmod."
        link={{
          hidden: true,
          variant: "clear",
          label: "See our components",

        }}
        imageSpacing
      />
    </Section>
  </>
);

export const Grid = Recipe.bind({});
