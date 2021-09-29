import merge from "deepmerge";
import {
  pack,
  unpack,
  getArgsShared,
} from "@kickstartds/core/lib/storybook/helpers";
import sectionStories from "@kickstartds/base/lib/section/section.stories";
import { MitLink as ContentBoxWithLink } from "../content-box/ContentBox.stories";
import schema from "./section.schema.dereffed.json";
import tokens from "./section-tokens.json";

const Section = sectionStories.component;
ContentBoxWithLink.displayName = "ContentBox";
const Template = (args) => (
  <Section {...args}>
    <ContentBoxWithLink {...unpack(ContentBoxWithLink.args)} />
    <ContentBoxWithLink {...unpack(ContentBoxWithLink.args)} />
    <ContentBoxWithLink {...unpack(ContentBoxWithLink.args)} />
  </Section>
);

const { defaultArgs: args, argTypes } = getArgsShared(schema);

export default {
  ...sectionStories,
  args,
  argTypes,
  parameters: {
    cssprops: merge(sectionStories.parameters.cssprops, tokens),
  },
};

export const Inhaltsboxen = Template.bind({});
Inhaltsboxen.args = pack({
  mode: "tile",
});
