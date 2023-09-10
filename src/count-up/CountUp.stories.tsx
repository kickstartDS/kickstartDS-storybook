import type { Meta, StoryObj } from "@storybook/react";
import merge from "deepmerge";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";
import countUpStories from "@kickstartds/content/lib/count-up/count-up.stories";
import tokens from "./count-up-tokens.json";
import schema from "./count-up.schema.dereffed.json";
import { CountUp } from "@kickstartds/content/lib/count-up";
import { JSONSchema7 } from "json-schema";

const meta: Meta<typeof CountUp> = {
  ...countUpStories,
  parameters: {
    cssprops: merge(countUpStories.parameters.cssprops, tokens),
    jsonschema: schema,
  },
  ...getArgsShared(schema as JSONSchema7),
};
export default meta;
type Story = StoryObj<typeof CountUp>;

export const Components: Story = {};
Components.args = pack({
  to: 41,
  graphic: "components",
  topic: "Components",
  text: `
Use our components as **solid building blocks**, adapt and improve them as you need. From quickly adding design tokens to full customization. Utilizing all existing best practices!

Benefit from **15+ years of frontend experience!**
`,
});

export const Properties: Story = {};
Properties.args = pack({
  to: 1255,
  graphic: "properties",
  topic: "Properties",
  text: `
Every propertys' existence is **rooted in a real-world** decision; solving everyday problems for content creators.

Quick discovery through Storybooks' rich interface, combined with **kickstartDS** rigorous JSON schema underneath.
`,
});

export const Tokens: Story = {};
Tokens.args = pack({
  to: 695,
  graphic: "tokens",
  topic: "Tokens",
  text: `
Obviously we have **design tokens** – colors, fonts, sizes, iconography.

Additionally every components has several layers of component tokens, encoding a solid base layer for you to depend upon. And for all the exciting cases: re-use the general tokens for **automatic brand compliance!**
`,
});

export const WithoutGraphic: Story = {};
WithoutGraphic.args = pack({
  to: 42,
  graphic: "none",
  topic: "Tokens",
  text: `
Obviously we have **design tokens** – colors, fonts, sizes, iconography.

Additionally every components has several layers of component tokens, encoding a solid base layer for you to depend upon. And for all the exciting cases: re-use the general tokens for **automatic brand compliance!**
`,
});
