import { pack } from "@kickstartds/core/lib/storybook/helpers";
import visualStories, {
  Template,
} from "@kickstartds/content/lib/visual/visual.stories";

export default visualStories;

export const BoxHell = Template.bind({});
BoxHell.args = pack({
  box: {
    background: "light",
    link: {
      variant: 'solid'
    }
  },
});

export const BoxDunkel = Template.bind({});
BoxDunkel.args = pack({

});
