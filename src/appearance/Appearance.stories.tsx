import type { Meta, StoryObj } from "@storybook/react";
import { Appearance } from "./AppearanceComponent";
import { getArgsShared } from "@kickstartds/core/lib/storybook";
import schema from "./appearance.schema.dereffed.json";
import tokens from "./appearance-tokens.json";
import { JSONSchema7 } from "json-schema";

const meta: Meta<typeof Appearance> = {
  title: "Custom/Appearance",
  component: Appearance,
  ...getArgsShared(schema as JSONSchema7),
  parameters: {
    cssprops: tokens,
    jsonschema: schema,
  },
};
export default meta;
type Story = StoryObj<typeof Appearance>;

export const Default: Story = {};
