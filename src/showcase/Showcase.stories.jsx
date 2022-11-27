import { Showcase } from "./ShowcaseComponent";
import { getArgsShared } from "@kickstartds/core/lib/storybook/helpers";
import schema from "./showcase.schema.dereffed.json";
import tokens from "./showcase-tokens.json";

const { defaultArgs: args, argTypes } = getArgsShared(schema);
const Template = (args) => <Showcase {...args} />;

export default {
  title: "Content/Showcase",
  component: Showcase,
  args,
  argTypes,
  parameters: {
    cssprops: tokens,
    jsonschema: schema,
  },
};

export const Default = Template.bind({});
