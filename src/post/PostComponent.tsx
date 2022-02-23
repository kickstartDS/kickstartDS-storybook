import { FunctionComponent } from "react";
import { Divider } from "@kickstartds/base/lib/divider";
import { Section } from "@kickstartds/base/lib/section";
import { PostHead } from "@kickstartds/blog/lib/post-head";
import { PostAside } from "@kickstartds/blog/lib/post-aside";
import { PostShareBar } from "@kickstartds/blog/lib/post-share-bar";

import { PostProps } from "./PostProps";

export const Post: FunctionComponent<PostProps> = ({
  aside,
  head,
  shareBar,
  children,
}) => (
  <>
    <Section
      spaceBefore="small"
      spaceAfter="default"
      mode="list"
      width="wide"
      className="l-section--blog"
    >
      {aside && <PostAside {...aside} />}

      <div className="c-post__content">
        {head && <PostHead {...head} />}
        <div className="c-html c-rich-text c-post-text">{children}</div>
        {shareBar && <PostShareBar {...shareBar} />}
      </div>
    </Section>
    <Section width="wide" spaceBefore="none" spaceAfter="none" align="center">
      <Divider />
    </Section>
  </>
);
