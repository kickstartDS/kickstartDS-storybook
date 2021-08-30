import {
  pack,
  unpack,
  getArgsShared,
} from "@kickstartds/core/lib/storybook/helpers";
import { Section } from "./SectionComponent";
import sectionStories from "@kickstartds/base/lib/section/section.stories";
import { MitLink as ContentBoxWithLink } from "../content-box/ContentBox.stories";
import schema from "./section.schema.dereffed.json";

Section.displayName = "Section";
ContentBoxWithLink.displayName = "Inhaltsboxen";
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
};

export const Inhaltsboxen = Template.bind({});
Inhaltsboxen.args = pack({
  mode: "tile",
});
