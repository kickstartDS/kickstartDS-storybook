import { Icon } from "@kickstartds/base/lib/icon";
import { Picture } from "@kickstartds/base/lib/picture";
import { PostMeta } from "../../post/post-meta/PostMetaComponent";

export const PostTeaser = () => (
  <>
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
  </>
);
