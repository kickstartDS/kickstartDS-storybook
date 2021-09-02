import merge from "deepmerge";
import { pack } from "@kickstartds/core/lib/storybook/helpers";
import countUpStories, {
  Template,
} from "@kickstartds/content/lib/count-up/count-up.stories";
import tokens from "./count-up-tokens.json";

export default {
  ...countUpStories,
  parameters: {
    cssprops: merge(countUpStories.parameters.cssprops, tokens),
  },
};

export const Components = Template.bind({});
Components.args = pack({
  to: 41,
  topic: "Components",
  text: `
Use our components as **solid building blocks**, adapt and improve them as you need. From quickly adding design tokens to full customization. Utilizing all existing best practices!

Benefit from **15+ years of frontend experience!**
`,
});

export const Properties = Template.bind({});
Properties.args = pack({
  to: 1255,
  topic: "Properties",
  text: `
Every propertys' existence is **rooted in a real-world** decision; solving everyday problems for content creators.

Quick discovery through Storybooks' rich interface, combined with **kickstartDS** rigorous JSON schema underneath.
`,
});

export const Tokens = Template.bind({});
Tokens.args = pack({
  to: 695,
  topic: "Tokens",
  text: `
Obviously we have **design tokens** – colors, fonts, sizes, iconography.

Additionally every components has several layers of component tokens, encoding a solid base layer for you to depend upon. And for all the exciting cases: re-use the general tokens for **automatic brand compliance!**
`,
});
