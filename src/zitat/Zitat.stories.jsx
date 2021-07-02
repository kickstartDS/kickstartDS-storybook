import { pack } from "@kickstartds/core/lib/storybook/helpers";
import { QuotesSlider } from "@kickstartds/content/lib/quotes-slider";
import quoteStories, {
  Template,
} from "@kickstartds/content/lib/quote/quote.stories";

export default {
  ...quoteStories,
  title: "Content/Zitat",
};

export const MitBild = Template.bind({});
MitBild.args = pack({
  text:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
  source: "Max Mustermann, ABC GmbH",
  date: undefined,
});

export const OhneBild = Template.bind({});
OhneBild.args = pack({
  text:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
  source: "Max Mustermann, ABC GmbH",
  image: undefined,
  date: undefined,
});

const SliderTemplate = (args) => <QuotesSlider {...args} />;
export const Slider = SliderTemplate.bind({});
Slider.args = pack({
  slides: [
    {
      source: "Max Muster, Key Account Manager Strategic Account Business",
      text:
        "Eum dolorem deleniti cumque officiis quod. Quibusdam velit rerum nihil dolor. Tenetur est quae aut explicabo ut ducimus in. Nihil maxime omnis consequatur sit quasi. Recusandae laborum accusantium accusantium illum sunt. Eius enim quod dolores ratione nobis.",
    },
    {
      source: "Max Muster, Key Account Manager Strategic Account Business",
      text:
        "Eum dolorem deleniti cumque officiis quod. Quibusdam velit rerum nihil dolor. Tenetur est quae aut explicabo ut ducimus in. Nihil maxime omnis consequatur sit quasi. Recusandae laborum accusantium accusantium illum sunt. Eius enim quod dolores ratione nobis.",
    },
    {
      source: "Max Muster, Key Account Manager Strategic Account Business",
      text:
        "Eum dolorem deleniti cumque officiis quod. Quibusdam velit rerum nihil dolor. Tenetur est quae aut explicabo ut ducimus in. Nihil maxime omnis consequatur sit quasi. Recusandae laborum accusantium accusantium illum sunt. Eius enim quod dolores ratione nobis.",
    },
  ],
});