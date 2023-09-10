import type { Meta, StoryObj } from "@storybook/react";
import { Showcase } from "./ShowcaseComponent";
import { getArgsShared } from "@kickstartds/core/lib/storybook";
import schema from "./showcase.schema.dereffed.json";
import tokens from "./showcase-tokens.json";
import { JSONSchema7 } from "json-schema";

const meta: Meta<typeof Showcase> = {
  title: "Custom/Showcase",
  component: Showcase,
  parameters: {
    cssprops: tokens,
    jsonschema: schema,
  },
  ...getArgsShared(schema as JSONSchema7),
};
export default meta;
type Story = StoryObj<typeof Showcase>;

export const Default: Story = {};
