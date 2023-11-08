import type { Meta, StoryObj } from "@storybook/react";
import { Related } from "./RelatedComponent";
import { getArgsShared } from "@kickstartds/core/lib/storybook";
import schema from "./related.schema.dereffed.json";
import tokens from "./related-tokens.json";
import { JSONSchema7 } from "json-schema";

const meta: Meta<typeof Related> = {
  title: "Custom/Related",
  component: Related,
  parameters: {
    cssprops: tokens,
    jsonschema: schema,
  },
  ...getArgsShared(schema as JSONSchema7),
};
export default meta;
type Story = StoryObj<typeof Related>;

export const Default: Story = {};
