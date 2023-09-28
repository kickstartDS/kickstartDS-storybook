import type { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import merge from "deepmerge";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";
import headlineStories from "@kickstartds/base/lib/headline/headline.stories";
import schema from "./headline.schema.dereffed.json";
import tokens from "./headline-tokens.json";
import { Headline } from "@kickstartds/base/lib/headline";

const meta: Meta<typeof Headline> = {
  ...headlineStories,
  ...getArgsShared(schema as JSONSchema7),
  title: "Base/Headline",
  parameters: {
    cssprops: merge(headlineStories.parameters?.cssprops, tokens),
    jsonschema: schema,
  },
};
export default meta;
type Story = StoryObj<typeof Headline>;

export const H1: Story = {
  args: pack({
    level: "h1",
    content: "Lorem Ipsum",
    align: "left",
  }),
};

export const H2: Story = {
  args: pack({
    level: "h2",
    content: "Lorem Ipsum",
    align: "left",
  }),
};

export const H3: Story = {
  args: pack({
    level: "h3",
    content: "Lorem Ipsum",
    align: "left",
  }),
};

export const H4: Story = {
  args: pack({
    level: "h4",
    content: "Lorem Ipsum",
    align: "left",
  }),
};

export const Subheadline: Story = {
  args: pack({
    ...H2.args,
    subheadline: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  }),
};

export const SubheadlineOrderSwapped: Story = {
  args: pack({
    ...H2.args,
    subheadline: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    switchOrder: true,
  }),
};
