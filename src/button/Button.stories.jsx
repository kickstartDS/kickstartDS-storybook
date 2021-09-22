import merge from "deepmerge";
import { pack } from "@kickstartds/core/lib/storybook/helpers";
import ButtonStories, {
  Template,
} from "@kickstartds/base/lib/button/button.stories";
import tokens from "./button-tokens.json";

export default {
  ...ButtonStories,
  title: "Base/Button",
  parameters: {
    cssprops: merge(ButtonStories.parameters.cssprops, tokens),
  },
};

export const Solid = Template.bind({});
Solid.args = pack({
  variant: "solid",
  href: "#",
  label: "mehr erfahren",
});

export const SolidMain = Template.bind({});
SolidMain.args = pack({
  className: "c-button--main",
  variant: "solid",
  href: "#",
  label: "Request a guided demo",
});

export const MitIcon = Template.bind({});
MitIcon.args = pack({
  ...Solid.args,
  iconAfter: true,
  icon: {
    icon: "chevron-right",
  },
});

export const Inverted = Template.bind({});
Inverted.args = pack({
  ...Solid.args,
  variant: "solid-inverted",
  href: "#",
});
Inverted.parameters = {
  backgrounds: { default: "dark" },
};

export const Outline = Template.bind({});
Outline.args = pack({
  ...Solid.args,
  variant: "outline",
});

export const OutlineInverted = Template.bind({});
OutlineInverted.args = pack({
  ...Solid.args,
  variant: "outline-inverted",
});
OutlineInverted.parameters = {
  backgrounds: { default: "dark" },
};

export const Ghost = Template.bind({});
Ghost.args = pack({
  ...Solid.args,
  variant: "clear",
});
