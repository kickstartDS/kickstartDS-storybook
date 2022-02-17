import { Picture } from "@kickstartds/base/lib/picture";

import {
  Contact,
} from "@kickstartds/content";

import {
  Divider,
  Button,
} from "@kickstartds/base";

import {
  TextField,
} from "@kickstartds/form";

import { Headline } from "@kickstartds/base/lib/headline";
import { PostMeta } from "../post-meta/PostMetaComponent";
import { ShareBar } from "../../share-bar/ShareBarComponent";

export const PostAside = () => (
  <>
    <div className="c-post-aside">
      <div className="c-post-aside__author">
        <Contact
          image={{
            src: "/img/blog/web_profile_images.png",
            width: "250",
            height: "250",
          }}
          title="Daniel Ley"
          twitter="DLey_de"
          email="daniel.ley@kickstartds.com"
          copy={
            `Co-Founder + UX Strategist with heart & soul`}
        />
      </div>
      <Divider />
      <PostMeta />
      <Divider />
      <ShareBar />
    </div>
  </>
);
