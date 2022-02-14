import { FunctionComponent, HTMLAttributes } from "react";
import { format } from "date-fns";

import { Icon } from "@kickstartds/base/lib/icon";
import { Picture } from "@kickstartds/base/lib/picture";

import { PostMetaProps } from "./PostMetaProps";

export const PostMeta: FunctionComponent<
  PostMetaProps & HTMLAttributes<HTMLDivElement>
> = ({ avatar, author, date, readingTime, ...props }) => (
  <div className="c-post-meta" {...props}>
    <div className="c-post-meta__author">
      {avatar && <Picture {...avatar} />}

      <span>{author}</span>
    </div>

    {date && (
      <time dateTime={format(new Date(date), "yyy-MM-dd")}>
        <Icon icon="date" className="icon" />
        {format(new Date(date), "dd.MM.yyyy")}
      </time>
    )}

    {readingTime && (
      <span>
        <Icon icon="time" className="icon" />
        {readingTime}
      </span>
    )}
  </div>
);
