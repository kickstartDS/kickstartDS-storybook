import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./HeaderComponent";
import { getArgsShared } from "@kickstartds/core/lib/storybook";
import schema from "./header.schema.dereffed.json";
import tokens from "./header-tokens.json";
import { JSONSchema7 } from "json-schema";

const meta: Meta<typeof Header> = {
  title: "Custom/Header",
  component: Header,
  ...getArgsShared(schema as JSONSchema7),
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
export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {};
