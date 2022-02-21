import { Cta } from "./CtaComponent";
import { getArgsShared } from "@kickstartds/core/lib/storybook/helpers";
import schema from "./cta.schema.dereffed.json";
import tokens from "./cta-tokens.json";

const { defaultArgs: args, argTypes } = getArgsShared(schema);
const Template = (args) => <Cta {...args} />;

export default {
  title: "Base/Cta",
  component: Cta,
  args,
  argTypes,
  parameters: {
    cssprops: tokens,
    jsonschema: schema,
  },
};

export const Default = Template.bind({});
