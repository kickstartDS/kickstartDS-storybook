import { pack, unpack } from "@kickstartds/core/lib/storybook/helpers";
import { Section } from "@kickstartds/base";
import sectionStories from "@kickstartds/base/lib/section/section.stories";
import { MitLink as ContentBoxWithLink } from "../content-box/ContentBox.stories";

Section.displayName = "Section";
ContentBoxWithLink.displayName = "Inhaltsboxen";
const Template = (args) => (
  <Section {...args}>
    <ContentBoxWithLink {...unpack(ContentBoxWithLink.args)} />
    <ContentBoxWithLink {...unpack(ContentBoxWithLink.args)} />
    <ContentBoxWithLink {...unpack(ContentBoxWithLink.args)} />
  </Section>
);

export default sectionStories;

export const Inhaltsboxen = Template.bind({});
Inhaltsboxen.args = pack({
  mode: "tile",
});
