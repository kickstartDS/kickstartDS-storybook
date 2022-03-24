import {
  TeaserBox,
  Section,
} from "@kickstartds/base";

export default {
  title: "Card Grid",
};

const Page = () => (
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
        image="img/examples/icons/button.svg"
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
        image="img/examples/icons/content-box.svg"
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
        image="img/examples/icons/count-up.svg"
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
        image="img/examples/icons/divider.svg"
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
        image="img/examples/icons/divider.svg"
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
        image="img/examples/icons/headline.svg"
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
        image="img/examples/icons/quote-slider.svg"
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
        image="img/examples/icons/section.svg"
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
        image="img/examples/icons/slider.svg"
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
        image="img/examples/icons/storytelling.svg"
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
        image="img/examples/icons/tag-label.svg"
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
        image="img/examples/icons/text-media.svg"
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

const Template = (args) => <Page {...args} />;
export const TeaserGrid = Template.bind({});
