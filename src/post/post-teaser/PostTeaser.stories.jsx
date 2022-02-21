import { PostTeaser } from "./PostTeaserComponent";

const Template = (args) => <PostTeaser {...args} />;

export default {
  title: "Blog/Post Teaser",
  component: PostTeaser,
};

export const Default = Template.bind({});
