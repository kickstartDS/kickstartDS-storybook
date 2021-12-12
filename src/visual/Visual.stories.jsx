import merge from "deepmerge";
import { pack } from "@kickstartds/core/lib/storybook/helpers";
import visualStories, {
  Template,
} from "@kickstartds/content/lib/visual/visual.stories";
import tokens from "./visual-tokens.json";
import schema from "@kickstartds/content/lib/visual/visual.schema.dereffed.json";

export default {
  ...visualStories,
  parameters: {
    cssprops: merge(visualStories.parameters.cssprops, tokens),
    jsonschema: schema,
  },
};

export const BoxLight = Template.bind({});
BoxLight.args = pack({
  backgroundColor: "transparent",
  height:"fullImage",
  box: {
    background: "light",
    link: {
      variant: "solid",
    },
  },
});

export const BoxDark = Template.bind({});
BoxDark.args = pack({
  backgroundColor: "transparent",
  height: "fullImage",
  box: {
    link: {
      variant: "solid-inverted"
    }
  }
});
