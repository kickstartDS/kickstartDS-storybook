import {
  ListHead,
} from "@kickstartds/blog";

import {
  Contact,
} from "@kickstartds/content";

import {
  Section,
  TeaserBox,
  ContentBox,
  Button,
} from "@kickstartds/base";

import {
  TextField,
} from "@kickstartds/form";

import { Header } from "../header/HeaderComponent";
import { Footer } from "../footer/FooterComponent";
import FooterStories from '../footer/Footer.stories';
import { Headline } from "@kickstartds/base/lib/headline";

export default {
  title: "Blog List",
};

const Page = () => (
  <>
    <Header />
    <Section
      spaceBefore="default"
      width="wide"
      className="l-section--blog"
    >
  
    </Section>
    <Footer {...FooterStories.args} />
  </>
);

const Template = (args) => <Page {...args} />;
export const BlogList = Template.bind({});