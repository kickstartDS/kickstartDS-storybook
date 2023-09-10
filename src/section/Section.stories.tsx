import type { Meta, StoryObj } from "@storybook/react";
import merge from "deepmerge";
import { pack, unpack, getArgsShared } from "@kickstartds/core/lib/storybook";
import sectionStories from "@kickstartds/base/lib/section/section.stories";
import contentBoxStory, {
  ImageWithButton,
} from "../content-box/ContentBox.stories";
import schema from "./section.schema.dereffed.json";
import tokens from "./section-tokens.json";
import { Section } from "./SectionComponent";

ImageWithButton.displayName = "ContentBox";
const Template = (args) => (
  <Section {...args}>
    <ImageWithButton
      {...merge(contentBoxStory.args, unpack(ImageWithButton.args))}
    />
    <ImageWithButton
      {...merge(contentBoxStory.args, unpack(ImageWithButton.args))}
    />
    <ImageWithButton
      {...merge(contentBoxStory.args, unpack(ImageWithButton.args))}
    />
  </Section>
);

const { args, argTypes } = getArgsShared(schema);

const meta: Meta<typeof Section> = {
  ...sectionStories,
  args,
  argTypes,
  parameters: {
    cssprops: merge(sectionStories.parameters.cssprops, tokens),
    jsonschema: schema,
  },
  render: Template,
};
export default meta;
type Story = StoryObj<typeof Section>;

export const ContentBoxes: Story = {};
ContentBoxes.args = pack({
  mode: "tile",
});
