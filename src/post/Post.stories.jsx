import { Post } from "./PostComponent";

const Template = (args) => <Post {...args} />;

export default {
  title: "Blog/Post",
  component: Post,
};

export const Default = Template.bind({});
