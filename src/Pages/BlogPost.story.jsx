import {
  Section,
  TeaserBox,
  ContentBox,
  Button,
  Divider,
} from "@kickstartds/base";

import { Header } from "../header/HeaderComponent";
import { Footer } from "../footer/FooterComponent";
import FooterStories from '../footer/Footer.stories';
import { Post } from "../post/PostComponent";

export default {
  title: "Blog Post",
};

const Page = () => (
  <>
    <Header />
    <Post />
    <Footer {...FooterStories.args} />
  </>
);

const Template = (args) => <Page {...args} />;
export const BlogPost = Template.bind({});