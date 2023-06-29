import { Related } from "./RelatedComponent";
import { getArgsShared } from "@kickstartds/core/lib/storybook/helpers";
import schema from "./related.schema.dereffed.json";
import tokens from "./related-tokens.json";

const { args, argTypes } = getArgsShared(schema);
const Template = (args) => <Related {...args} />;

export default {
  title: "Custom/Related",
  component: Related,
  args,
  argTypes,
  parameters: {
    cssprops: tokens,
    jsonschema: schema,
  },
};

export const Default = Template.bind({});
