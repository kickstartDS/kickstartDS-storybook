import merge from "deepmerge";
import {
  pack,
  unpack,
  getArgsShared,
} from "@kickstartds/core/lib/storybook/helpers";
import sectionStories from "@kickstartds/base/lib/section/section.stories";
import ContentBoxStory, {
  ImageWithButton,
} from "../content-box/ContentBox.stories";
import schema from "./section.schema.dereffed.json";
import tokens from "./section-tokens.json";

const Section = sectionStories.component;
ImageWithButton.displayName = "ContentBox";
const Template = (args) => (
  <Section {...args}>
    <ImageWithButton
      {...merge(ContentBoxStory.args, unpack(ImageWithButton.args))}
    />
    <ImageWithButton
      {...merge(ContentBoxStory.args, unpack(ImageWithButton.args))}
    />
    <ImageWithButton
      {...merge(ContentBoxStory.args, unpack(ImageWithButton.args))}
    />
  </Section>
);

const { args, argTypes } = getArgsShared(schema);

export default {
  ...sectionStories,
  args,
  argTypes,
  parameters: {
    cssprops: merge(sectionStories.parameters.cssprops, tokens),
    jsonschema: schema,
  },
};

export const ContentBoxes = Template.bind({});
ContentBoxes.args = pack({
  mode: "tile",
});
