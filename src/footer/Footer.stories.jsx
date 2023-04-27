import { Footer } from "./FooterComponent";
import { getArgsShared } from "@kickstartds/core/lib/storybook/helpers";
import schema from "./footer.schema.dereffed.json";

const { args, argTypes } = getArgsShared(schema);
const Template = (args) => <Footer {...args} />;

export default {
  title: "Custom/Footer",
  component: Footer,
  args,
  argTypes,
  parameters: {
    jsonschema: schema,
  },
};

export const Default = Template.bind({});
