import { Section } from "@kickstartds/base/lib/section";
import { TeaserBox } from "@kickstartds/base/lib/teaser-box";

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
      {/* @ts-expect-error */}
      <TeaserBox
        topic="Button"
        image="img/recipes/icons/button.svg"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
        link={{
          hidden: true,
          variant: "clear",
          label: "Explore generators",
        }}
        imageSpacing
      />
      {/* @ts-expect-error */}
      <TeaserBox
        topic="Content Box"
        image="img/recipes/icons/content-box.svg"
        text="Consetetur sadipscing elitr, sed diam nonumy eirmod."
        link={{
          hidden: true,
          variant: "clear",
          label: "See our components",
        }}
        imageSpacing
      />
      {/* @ts-expect-error */}
      <TeaserBox
        topic="Count Up"
        image="img/recipes/icons/count-up.svg"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
        link={{
          hidden: true,
          variant: "clear",
          label: "See our components",
        }}
        imageSpacing
      />
      {/* @ts-expect-error */}
      <TeaserBox
        topic="Divider"
        image="img/recipes/icons/divider.svg"
        text="Consetetur sadipscing elitr, sed diam nonumy eirmod."
        link={{
          hidden: true,
          variant: "clear",
          label: "See our components",
        }}
        imageSpacing
      />
      {/* @ts-expect-error */}
      <TeaserBox
        topic="Divider"
        image="img/recipes/icons/divider.svg"
        text="Consetetur sadipscing elitr, sed diam nonumy eirmod."
        link={{
          hidden: true,
          variant: "clear",
          label: "See our components",
        }}
        imageSpacing
      />
      {/* @ts-expect-error */}
      <TeaserBox
        topic="Headline"
        image="img/recipes/icons/headline.svg"
        text="Consetetur sadipscing elitr, sed diam nonumy eirmod."
        link={{
          hidden: true,
          variant: "clear",
          label: "See our components",
        }}
        imageSpacing
      />
      {/* @ts-expect-error */}
      <TeaserBox
        topic="Quote Slider"
        image="img/recipes/icons/quote-slider.svg"
        text="Consetetur sadipscing elitr, sed diam nonumy eirmod."
        link={{
          hidden: true,
          variant: "clear",
          label: "See our components",
        }}
        imageSpacing
      />
      {/* @ts-expect-error */}
      <TeaserBox
        topic="Section"
        image="img/recipes/icons/section.svg"
        text="Consetetur sadipscing elitr, sed diam nonumy eirmod."
        link={{
          hidden: true,
          variant: "clear",
          label: "See our components",
        }}
        imageSpacing
      />
      {/* @ts-expect-error */}
      <TeaserBox
        topic="Slider"
        image="img/recipes/icons/slider.svg"
        text="Consetetur sadipscing elitr, sed diam nonumy eirmod."
        link={{
          hidden: true,
          variant: "clear",
          label: "See our components",
        }}
        imageSpacing
      />
      {/* @ts-expect-error */}
      <TeaserBox
        topic="Storytelling"
        image="img/recipes/icons/storytelling.svg"
        text="Consetetur sadipscing elitr, sed diam nonumy eirmod."
        link={{
          hidden: true,
          variant: "clear",
          label: "See our components",
        }}
        imageSpacing
      />
      {/* @ts-expect-error */}
      <TeaserBox
        topic="Tag Label"
        image="img/recipes/icons/tag-label.svg"
        text="Consetetur sadipscing elitr, sed diam nonumy eirmod."
        link={{
          hidden: true,
          variant: "clear",
          label: "See our components",
        }}
        imageSpacing
      />
      {/* @ts-expect-error */}
      <TeaserBox
        topic="Text Media"
        image="img/recipes/icons/text-media.svg"
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

export const Grid = {
  render: Recipe,
};
