import { FunctionComponent, HTMLAttributes } from "react";

import { SourceSnippetProps } from "./SourceSnippetProps";
import React from "react";
import { Teaser } from "@kickstartds/base/lib/teaser";

export const SourceSnippet: FunctionComponent<
  SourceSnippetProps & HTMLAttributes<HTMLDivElement>
> = ({ title, url, link, ...props }) => (
  <Teaser
    className="c-source-snippet"
    topic={title}
    text={url}
    link={{
      href: link,
      label: "Go to source",
      iconAfter: true,
      icon: {
        icon: "chevron-down",
      },
      variant: "clear",
      size: "small",
    }}
  />
);
