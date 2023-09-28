import type { Meta, StoryObj } from "@storybook/react";
import merge from "deepmerge";
import { JSONSchema7 } from "json-schema";
import { pack, unpack, getArgsShared } from "@kickstartds/core/lib/storybook";
import sectionStories from "@kickstartds/base/lib/section/section.stories";
import contentBoxStory, {
  ImageWithButton,
} from "../content-box/ContentBox.stories";
import schema from "./section.schema.dereffed.json";
import tokens from "./section-tokens.json";
import { Section } from "./SectionComponent";
import { ContentBox } from "@kickstartds/base/lib/content-box";

const Template = (args) => (
  <Section {...args}>
    <ContentBox
      {...merge(contentBoxStory.args, unpack(ImageWithButton.args))}
    />
    <ContentBox
      {...merge(contentBoxStory.args, unpack(ImageWithButton.args))}
    />
    <ContentBox
      {...merge(contentBoxStory.args, unpack(ImageWithButton.args))}
    />
  </Section>
);

const { args, argTypes } = getArgsShared(schema as JSONSchema7);

const meta: Meta<typeof Section> = {
  ...sectionStories,
  title: "Base / Section",
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

export const ContentBoxes: Story = {
  args: pack({
    mode: "tile",
  }),
};
