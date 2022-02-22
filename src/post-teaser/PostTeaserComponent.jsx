import { Picture } from "@kickstartds/base/lib/picture";
import { RichText } from "@kickstartds/base/lib/rich-text";
import { TagLabel } from "@kickstartds/base/lib/tag-label"
import { PostMeta } from "../post-meta/PostMetaComponent";

export const PostTeaser = ({ tags = [], headline, content, meta }) => (
  <article className="c-post-teaser">
    <div className="c-post-teaser__body">
      {tags.length ? (
        <div className="tag-label-container">
          {tags.map((label, i) => (
            <TagLabel key={i} label={label} size="s" />
          ))}
        </div>
      ) : (
        ""
      )}
      <div className="c-post-teaser__content">
        <h2 className="c-post-teaser__headline">
          {headline}
        </h2>
        <RichText text={content} />
      </div>
      <PostMeta {...meta} />
    </div>
    <div className="c-post-teaser__image">
      <Picture src="img/blog/Blog-Post01-5.webp" />
    </div>
  </article>
);
