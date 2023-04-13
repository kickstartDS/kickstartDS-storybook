import merge from "deepmerge";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook/helpers";
import ButtonStories, {
  Template,
} from "@kickstartds/base/lib/button/button.stories";
import tokens from "./button-tokens.json";
import schema from "./button.schema.dereffed.json";
const { args, argTypes } = getArgsShared(schema);

export default {
  ...ButtonStories,
  title: "Base/Button",
  args,
  argTypes,
  parameters: {
    cssprops: merge(ButtonStories.parameters.cssprops, tokens),
    jsonschema: schema,
  },
};

export const Solid = Template.bind({});
Solid.args = pack({
  variant: "solid",
  href: "#",
  label: "mehr erfahren",
});

export const Main = Template.bind({});
Main.args = pack({
  variant: "solid",
  highlighted: true,
  deko: true,
  href: "#",
  label: "Request a guided demo",
});

export const MitIcon = Template.bind({});
MitIcon.args = pack({
  ...Solid.args,
  iconAfter: true,
  icon: {
    icon: "chevron-right",
  },
});

export const Outline = Template.bind({});
Outline.args = pack({
  ...Solid.args,
  variant: "outline",
});

export const Clear = Template.bind({});
Clear.args = pack({
  ...Solid.args,
  variant: "clear",
});
