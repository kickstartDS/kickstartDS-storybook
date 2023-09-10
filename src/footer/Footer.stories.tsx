import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "./FooterComponent";
import { getArgsShared } from "@kickstartds/core/lib/storybook";
import schema from "./footer.schema.dereffed.json";
import { JSONSchema7 } from "json-schema";

const meta: Meta<typeof Footer> = {
  title: "Custom/Footer",
  component: Footer,
  ...getArgsShared(schema as JSONSchema7),
  parameters: {
    jsonschema: schema,
  },
};
export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {};
