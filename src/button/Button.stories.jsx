import { pack } from "@kickstartds/core/lib/storybook/helpers";
import ButtonStories, {
  Template,
} from "@kickstartds/base/lib/button/button.stories";

export default {
  ...ButtonStories,
  title: "Base/Button",
};

export const Default = Template.bind({});
Default.args = pack({
  variant: "solid",
  href: "#",
  label: "mehr erfahren",
});

export const MitIcon = Template.bind({});
MitIcon.args = pack({
  ...Default.args,
  iconAfter: true,
  icon: {
    icon: "chevron-right",
  },
});

export const Inverted = Template.bind({});
Inverted.args = pack({
  ...Default.args,
  variant: "solid-inverted",
  href: "#",
});
Inverted.parameters = {
  backgrounds: { default: "dark" },
};

export const Outline = Template.bind({});
Outline.args = pack({
  ...Default.args,
  variant: "outline",
});

export const OutlineInverted = Template.bind({});
OutlineInverted.args = pack({
  ...Default.args,
  variant: "outline-inverted",
});
OutlineInverted.parameters = {
  backgrounds: { default: "dark" },
};

export const Ghost = Template.bind({});
Ghost.args = pack({
  ...Default.args,
  variant: "clear",
});
