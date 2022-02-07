import { Icon } from "@kickstartds/base/lib/icon";
import { Picture } from "@kickstartds/base/lib/picture";

export const PostMeta = () => (
  <>
    <div class="c-post-meta">
      <div className="c-post-meta__author">
        <Picture
          src="img/blog/web_profile_images-teaser.png"
        />
        <span>
          Daniel Ley
        </span>
      </div>
      {/* <div className="c-post-meta--divider"></div> */}
      <time datetime="2021-03-29">
        <Icon
          icon="date"
          className="icon"
        />
        29.03.2021
      </time>
      {/* <div className="c-post-meta--divider"></div> */}
      <span>
        <Icon
          icon="time"
          className="icon"
        />
        5 min read
      </span>
    </div>
  </>
);
