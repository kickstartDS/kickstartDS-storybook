import type { Meta, StoryObj } from "@storybook/react";
import merge from "deepmerge";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";
import buttonStories from "@kickstartds/base/lib/button/button.stories";
import { Button } from "./ButtonComponent";
import tokens from "./button-tokens.json";
import schema from "./button.schema.dereffed.json";
import { JSONSchema7 } from "json-schema";

const meta: Meta<typeof Button> = {
  ...buttonStories,
  title: "Base/Button",
  parameters: {
    cssprops: merge(buttonStories.parameters.cssprops, tokens),
    jsonschema: schema,
  },
  ...getArgsShared(schema as JSONSchema7),
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Solid: Story = {};
Solid.args = pack({
  variant: "solid",
  href: "#",
  label: "mehr erfahren",
});

export const Main: Story = {};
Main.args = pack({
  variant: "solid",
  highlighted: true,
  deko: true,
  href: "#",
  label: "Request a guided demo",
});

export const MitIcon: Story = {};
MitIcon.args = pack({
  ...Solid.args,
  iconAfter: true,
  icon: {
    icon: "chevron-right",
  },
});

export const Outline: Story = {};
Outline.args = pack({
  ...Solid.args,
  variant: "outline",
});

export const Clear: Story = {};
Clear.args = pack({
  ...Solid.args,
  variant: "clear",
});
