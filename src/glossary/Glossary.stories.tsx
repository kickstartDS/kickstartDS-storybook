import type { Meta, StoryObj } from "@storybook/react";
import { Glossary } from "./GlossaryComponent";
import { getArgsShared } from "@kickstartds/core/lib/storybook";
import schema from "./glossary.schema.dereffed.json";
import tokens from "./glossary-tokens.json";
import { JSONSchema7 } from "json-schema";

const { args, argTypes } = getArgsShared(schema as JSONSchema7);
args["cta.image.order.desktopImageLast"] = true;

const meta: Meta<typeof Glossary> = {
  title: "Custom/Glossary",
  component: Glossary,
  args,
  argTypes,
  parameters: {
    cssprops: tokens,
    jsonschema: schema,
  },
};
export default meta;
type Story = StoryObj<typeof Glossary>;

export const Default: Story = {};
