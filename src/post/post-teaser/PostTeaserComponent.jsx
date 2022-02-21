import { Picture } from "@kickstartds/base/lib/picture";
import { PostMeta } from "../post-meta/PostMetaComponent";

export const PostTeaser = () => (
  <>
    <article className="c-post-teaser">
      <div className="c-post-teaser__body">
        <div className="tag-label-container">
          <div className="c-tag-label c-tag-label--s">
            <span className="c-tag-label__content">About kickstartDS</span>
          </div>
          <div className="c-tag-label c-tag-label--s">
            <span className="c-tag-label__content">Background</span>
          </div>
        </div>
        <div className="c-post-teaser__content">
          <h2 className="c-post-teaser__headline" id="news-header-undefined">
            Why we are creating kickstartDS
          </h2>
          <div className="c-rich-text">
            <p>
              #tldr: We want to support you to create one library of components,
              patterns and tokens to be used in any frontend you need to give
              your digital touch points a consistent interface...
            </p>
          </div>
        </div>
        <PostMeta />
      </div>
      <div className="c-post-teaser__image">
        <Picture src="img/blog/Blog-Post01-5.webp" />
      </div>
    </article>
  </>
);
