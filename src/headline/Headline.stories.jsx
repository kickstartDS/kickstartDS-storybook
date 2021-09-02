import merge from "deepmerge";
import {
  pack,
  getArgsShared,
} from "@kickstartds/core/lib/storybook/helpers";
import { Headline } from "./HeadlineComponent";
import headlineStories from "@kickstartds/base/lib/headline/headline.stories";
import schema from "./headline.schema.dereffed.json";
import tokens from "./headline-tokens.json";

Headline.displayName = "Headline";
const Template = (args) => (
  <Headline {...args} />
);

const { defaultArgs: args, argTypes } = getArgsShared(schema);

export default {
  ...headlineStories,
  args,
  argTypes,
  parameters: {
    cssprops: merge(headlineStories.parameters.cssprops, tokens),
  },
};

export const H1 = Template.bind({});
H1.args = pack({
  level: "h1",
  content: "Lorem Ipsum",
  align: "left",
});

export const H2 = Template.bind({});
H2.args = pack({
  level: "h2",
  content: "Lorem Ipsum",
  align: "left",
});

export const H3 = Template.bind({});
H3.args = pack({
  level: "h3",
  content: "Lorem Ipsum",
  align: "left",
});

export const H4 = Template.bind({});
H4.args = pack({
  level: "h4",
  content: "Lorem Ipsum",
  align: "left",
});

export const MitSubheadline = Template.bind({});
MitSubheadline.args = pack({
  ...H2.args,
  subheadline: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
});
