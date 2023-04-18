import { Appearance } from "./AppearanceComponent";
import { getArgsShared } from "@kickstartds/core/lib/storybook/helpers";
import schema from "./appearance.schema.dereffed.json";
import tokens from "./appearance-tokens.json";

const { defaultArgs: args, argTypes } = getArgsShared(schema);
const Template = (args) => <Appearance {...args} />;

export default {
  title: "Custom/Appearance",
  component: Appearance,
  args,
  argTypes,
  parameters: {
    cssprops: tokens,
    jsonschema: schema,
  },
};

export const Default = Template.bind({});
