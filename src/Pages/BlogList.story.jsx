import { PostTeaser } from "@kickstartds/blog/lib/post-teaser";
import { Picture } from "@kickstartds/base/lib/picture";

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
import { PostMeta } from "../post/post-meta/PostMetaComponent";

export default {
  title: "Blog List",
};

const Page = () => (
  <>
    <Header />
    <Section
      headline={{
        content: "Welcome to the kickstartDS Blog",
        level:"h1",
        subheadline: "Here we keep you up to date on releases, updates and background info",
        align:"center",
      }}
      width="wide"
      pattern="3"
      spaceAfter="none"
    >

    </Section>
    <Section
      spaceBefore="default"
      width="narrow"
      mode="list"
      gutter="large"
    >
      <article class="c-post-teaser">
        <div class="c-post-teaser__body">
          <div class="tag-label-container">
            <div class="c-tag-label c-tag-label--s">
              <span class="c-tag-label__content">
                About kickstartDS
              </span>
            </div>
            <div class="c-tag-label c-tag-label--s">
              <span class="c-tag-label__content">
                Background
              </span>
            </div>
          </div>
          <div class="c-post-teaser__content">
            <h2 class="c-post-teaser__headline" id="news-header-undefined">
              Why we are creating kickstartDS
            </h2>
            <div class="c-rich-text">
              <p>
                #tldr: We want to support you to create one library of components, patterns and tokens to be used in any frontend you need to give your digital touch points a consistent interface...
              </p>
            </div>
          </div>
          <PostMeta />
        </div>
        <div class="c-post-teaser__image">
          <Picture src="img/blog/Blog-Post01-5.webp" />
        </div>
      </article>


    </Section>
    <Footer {...FooterStories.args} />
  </>
);

const Template = (args) => <Page {...args} />;
export const BlogList = Template.bind({});
