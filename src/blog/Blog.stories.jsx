import { Blog } from "./HeaderComponent";

const Template = (args) => <Blog {...args} />;

export default {
  title: "Base/Blog",
  component: Blog,
};

export const Default = Template.bind({});
