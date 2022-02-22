import { pack } from "@kickstartds/core/lib/storybook/helpers";
import { Default as PostAsideStory} from "../post-aside/PostAside.stories"
import { Post } from "./PostComponent";

const Template = (args) => <Post {...args} />;

export default {
  title: "Blog/Post",
  component: Post,
};

export const Default = Template.bind({});
Default.args = pack({
  aside: PostAsideStory.args,
});
