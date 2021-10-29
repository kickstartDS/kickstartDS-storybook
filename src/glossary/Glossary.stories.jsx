import { Glossary } from "./GlossaryComponent";
import merge from "deepmerge";
import {
  pack,
  getArgsShared,
} from "@kickstartds/core/lib/storybook/helpers";
import schema from "./glossary.schema.dereffed.json";
import tokens from "./glossary-tokens.json";

const { defaultArgs: args, argTypes } = getArgsShared(schema);
const Template = (args) => <Glossary {...args} />;

export default {
  title: "Content/Glossary",
  component: Glossary,
  args,
  argTypes,
};

export const Default = Template.bind({});
