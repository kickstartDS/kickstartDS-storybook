import { Cta } from "./CtaComponent";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook/helpers";
import schema from "./cta.schema.dereffed.json";
import tokens from "./cta-tokens.json";

const { defaultArgs: args, argTypes } = getArgsShared(schema);
for (const prop in args) {
  if (prop.startsWith("box.link.")) {
    delete args[prop];
    delete argTypes[prop];
  }
}
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
