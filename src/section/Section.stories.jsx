import merge from "deepmerge";
import {
  pack,
  unpack,
  getArgsShared,
} from "@kickstartds/core/lib/storybook/helpers";
import sectionStories from "@kickstartds/base/lib/section/section.stories";
import { ImageLink } from "../content-box/ContentBox.stories";
import schema from "./section.schema.dereffed.json";
import tokens from "./section-tokens.json";

const Section = sectionStories.component;
ImageLink.displayName = "ContentBox";
const Template = (args) => (
  <Section {...args}>
    <ImageLink {...unpack(ImageLink.args)} />
    <ImageLink {...unpack(ImageLink.args)} />
    <ImageLink {...unpack(ImageLink.args)} />
  </Section>
);

const { defaultArgs: args, argTypes } = getArgsShared(schema);

export default {
  ...sectionStories,
  args,
  argTypes,
  parameters: {
    cssprops: merge(sectionStories.parameters.cssprops, tokens),
    jsonschema: schema,
  },
};

export const Inhaltsboxen = Template.bind({});
Inhaltsboxen.args = pack({
  mode: "tile",
});
