import { PostTeaser } from "@kickstartds/blog/lib/post-teaser";

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
      width="narrow"
      mode="list"
      gutter="large"
    >
      <PostTeaser
        title="Why we are creating kickstartDS"
        body="#tldr: We want to support you to create one library of components, patterns and tokens to be used in any frontend you need to give your digital touch points a consistent interface. Even shorter: we want to kickstart your design system implementation. 😎 Now you might wonder if or why you need that. Let me… Continue reading Why we are creating kickstartDS"
        categories={[
          {
            label: "About kickstartDS",
          },
          {
            label: "Background",
          },
        ]}
        date="2021-03-29"
        image={{
          src: "img/blog/Blog-Post01-5.webp",
        }}
        link={{
          label: "read more...",
        }}
        variant="image-first"
      />
      <PostTeaser
        title="Great components inside kickstartDS"
        body="#tldr: in this post I’ll try to provide some background info on the power of kickstartDS components. They are especially powerful once customized to your brands corporate design. They come with lots of options, so you don’t need to either invent or deal with limitless variants like in other frameworks. You can even specify or limit design variations based on different token sets or across multiple brands or layers."
        categories={[
          {
            label: "Components",
          },
        ]}
        date="2021-03-29"
        image={{
          src: "img/blog/Blog-Post_great-components-1.webp",
        }}
        link={{
          label: "read more...",
        }}
        variant="image-first"
      />
      <PostTeaser
        title="Great components inside kickstartDS"
        body="#tldr: in this post I’ll try to provide some background info on the power of kickstartDS components. They are especially powerful once customized to your brands corporate design. They come with lots of options, so you don’t need to either invent or deal with limitless variants like in other frameworks. You can even specify or limit design variations based on different token sets or across multiple brands or layers."
        categories={[
          {
            label: "Components",
          },
        ]}
        date="2021-03-29"
        image={{
          src: "https://picsum.photos/seed/kdsnewslatest/900/380",
        }}
        link={{
          label: "read more...",
        }}
        variant="image-first"
      />
      <PostTeaser
        title="Great components inside kickstartDS"
        body="#tldr: in this post I’ll try to provide some background info on the power of kickstartDS components. They are especially powerful once customized to your brands corporate design. They come with lots of options, so you don’t need to either invent or deal with limitless variants like in other frameworks. You can even specify or limit design variations based on different token sets or across multiple brands or layers."
        categories={[
          {
            label: "Components",
          },
        ]}
        date="2021-03-29"
        image={{
          src: "img/blog/Blog-Post_great-components-1.webp",
        }}
        link={{
          label: "read more...",
        }}
        variant="image-first"
      />
      <PostTeaser
        title="Great components inside kickstartDS"
        body="#tldr: in this post I’ll try to provide some background info on the power of kickstartDS components. They are especially powerful once customized to your brands corporate design. They come with lots of options, so you don’t need to either invent or deal with limitless variants like in other frameworks. You can even specify or limit design variations based on different token sets or across multiple brands or layers."
        categories={[
          {
            label: "Components",
          },
        ]}
        date="2021-03-29"
        image={{
          src: "https://picsum.photos/seed/kdsnewslatest/900/380",
        }}
        link={{
          label: "read more...",
        }}
        variant="image-first"
      />
    </Section>
    <Footer {...FooterStories.args} />
  </>
);

const Template = (args) => <Page {...args} />;
export const BlogList = Template.bind({});
