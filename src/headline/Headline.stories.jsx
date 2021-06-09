import { getArgsShared, pack } from "@kickstartds/core/lib/storybook/helpers";
import { Headline } from "@kickstartds/base";
import schema from "@kickstartds/base/lib/headline/headline.schema.dereffed.json";

Headline.displayName = "Headline";
const { argTypes } = getArgsShared(schema.properties);
const Template = (args) => <Headline {...args} />;

export default {
  title: "Base/Headline",
  component: Headline,
  argTypes,
};

export const H1 = Template.bind({});
H1.args = pack({
  level: "h1",
  content: "Lorem Ipsum",
  align: "left",
});

export const H2 = Template.bind({});
H2.args = pack({
  level: "h2",
  content: "Lorem Ipsum",
  align: "left",
});

export const H3 = Template.bind({});
H3.args = pack({
  level: "h3",
  content: "Lorem Ipsum",
  align: "left",
});

export const H4 = Template.bind({});
H4.args = pack({
  level: "h4",
  content: "Lorem Ipsum",
  align: "left",
});

export const MitSubheadline = Template.bind({});
MitSubheadline.args = pack({
  ...H2.args,
  subheadline: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
});
