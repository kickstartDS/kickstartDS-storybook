import { getArgsShared, pack } from "@kickstartds/core/lib/storybook/helpers";
import { CountUp } from "./CountUp";
import schema from "@kickstartds/content/lib/count-up/count-up.schema.dereffed.json";

CountUp.displayName = "CountUp";
delete schema.properties.link

const { argTypes } = getArgsShared(schema.properties);
const Template = (args) => <CountUp {...args} />;

export default {
  title: "Content/Count Up",
  component: CountUp,
  argTypes,
};

export const Components = Template.bind({});
Components.args = pack({
  to: 41,
  topic: "Components",
  text: "Start with solid building blocks, adapt and improve as needed",
});

export const Properties = Template.bind({});
Properties.args = pack({
  to: 1255,
  topic: "Properties",
  text: "Every propertys' existence is rooted in a real-world decision",
});

export const Tokens = Template.bind({});
Tokens.args = pack({
  to: 695,
  topic: "Tokens",
  text: "Obviously we have design tokens – colors, fonts, sizes, iconography",
});
