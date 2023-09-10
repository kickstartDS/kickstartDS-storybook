import type { Meta, StoryObj } from "@storybook/react";
import merge from "deepmerge";
import { pack } from "@kickstartds/core/lib/storybook";
import { QuotesSlider } from "@kickstartds/content/lib/quotes-slider";
import quoteStories from "@kickstartds/content/lib/quote/quote.stories";
import tokens from "./quote-tokens.json";
import schema from "@kickstartds/content/lib/quotes-slider/quotes-slider.schema.dereffed.json";

const meta: Meta<typeof QuotesSlider> = {
  ...quoteStories,
  title: "Content/Quote",
  parameters: {
    cssprops: merge(quoteStories.parameters.cssprops, tokens),
    jsonschema: schema,
  },
};
export default meta;
type Story = StoryObj<typeof QuotesSlider>;

export const Image: Story = {};
Image.args = pack({
  text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
  source: "Max Mustermann, ABC GmbH",
  // image:"img/example/portrait.png",
  date: undefined,
});

const SliderTemplate = (args) => <QuotesSlider {...args} />;
export const Slider: Story = {};
Slider.render = SliderTemplate;
Slider.args = pack({
  slides: [
    {
      source: "Max Muster, Key Account Manager Strategic Account Business",
      text: "Eum dolorem deleniti cumque officiis quod. Quibusdam velit rerum nihil dolor. Tenetur est quae aut explicabo ut ducimus in. Nihil maxime omnis consequatur sit quasi. Recusandae laborum accusantium accusantium illum sunt. Eius enim quod dolores ratione nobis.",
    },
    {
      source: "Max Muster, Key Account Manager Strategic Account Business",
      text: "Eum dolorem deleniti cumque officiis quod. Quibusdam velit rerum nihil dolor. Tenetur est quae aut explicabo ut ducimus in. Nihil maxime omnis consequatur sit quasi. Recusandae laborum accusantium accusantium illum sunt. Eius enim quod dolores ratione nobis.",
    },
    {
      source: "Max Muster, Key Account Manager Strategic Account Business",
      text: "Eum dolorem deleniti cumque officiis quod. Quibusdam velit rerum nihil dolor. Tenetur est quae aut explicabo ut ducimus in. Nihil maxime omnis consequatur sit quasi. Recusandae laborum accusantium accusantium illum sunt. Eius enim quod dolores ratione nobis.",
    },
  ],
});
