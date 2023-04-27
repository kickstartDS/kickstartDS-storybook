import { Header } from "./HeaderComponent";
import { getArgsShared } from "@kickstartds/core/lib/storybook/helpers";
import schema from "./header.schema.dereffed.json";
import tokens from "./header-tokens.json";

const { args, argTypes } = getArgsShared(schema);
const Template = (args) => <Header {...args} />;

export default {
  title: "Custom/Header",
  component: Header,
  args,
  argTypes,
  parameters: {
    cssprops: tokens,
    jsonschema: schema,
  },
  decorators: [
    (Story) => (
      <div style={{ height: "500vh" }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = Template.bind({});
