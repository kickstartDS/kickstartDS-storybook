import { JSONSchema7 } from "json-schema";
import type { Meta, StoryObj } from "@storybook/react";
import { getArgsShared } from "@kickstartds/core/lib/storybook";
import { Person } from "./PersonComponent";
import schema from "./person.schema.dereffed.json";
import tokens from "./person-tokens.json";

const meta: Meta<typeof Person> = {
  title: "Content/Person",
  component: Person,
  parameters: {
    cssprops: tokens,
    jsonschema: schema,
  },
  ...getArgsShared(schema as JSONSchema7),
};
export default meta;
type Story = StoryObj<typeof Person>;

export const Default: Story = {};

export const AnotherPerson: Story = {
  args: {
    name: "John Doe",
    avatar: "https://example.com/avatar.jpg",
    title: "Software Engineer",
  },
};
