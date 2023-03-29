import { Person } from "./PersonComponent";
import { getArgsShared } from "@kickstartds/core/lib/storybook/helpers";
import schema from "./person.schema.dereffed.json";
import tokens from "./person-tokens.json";

const { defaultArgs: args, argTypes } = getArgsShared(schema);
const Template = (args) => <Person {...args} />;

export default {
  title: "Content/Person",
  component: Person,
  args,
  argTypes,
  parameters: {
    cssprops: tokens,
    jsonschema: schema,
  },
};

export const Default = Template.bind({});
