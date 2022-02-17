import { PostTeaser } from "./PostTeaserComponent";

const Template = (args) => <PostTeaser {...args} />;

export default {
  title: "Blog/PostTeaser",
  component: PostTeaser,
};

export const Default = Template.bind({});
