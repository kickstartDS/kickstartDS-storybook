import merge from "deepmerge";
import { pack } from "@kickstartds/core/lib/storybook/helpers";
import visualStories, {
  Template,
} from "@kickstartds/content/lib/visual/visual.stories";
import tokens from "./visual-tokens.json";

export default {
  ...visualStories,
  parameters: {
    cssprops: merge(visualStories.parameters.cssprops, tokens),
  },
};

export const BoxHell = Template.bind({});
BoxHell.args = pack({
  box: {
    background: "light",
    link: {
      variant: "solid",
    },
  },
});

export const BoxDunkel = Template.bind({});
BoxDunkel.args = pack({});
