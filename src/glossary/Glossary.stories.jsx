import { Glossary } from "./GlossaryComponent";
import { getArgsShared } from "@kickstartds/core/lib/storybook/helpers";
import schema from "./glossary.schema.dereffed.json";
import tokens from "./glossary-tokens.json";

const { defaultArgs: args, argTypes } = getArgsShared(schema);
const Template = (args) => <Glossary {...args} />;

export default {
  title: "Content/Glossary",
  component: Glossary,
  args,
  argTypes,
  parameters: {
    cssprops: tokens,
    jsonschema: schema,
  },
};

export const Default = Template.bind({});
