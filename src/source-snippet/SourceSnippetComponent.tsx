import { FunctionComponent, HTMLAttributes } from "react";

import { RichText } from "@kickstartds/base/lib/rich-text";
import { TagLabel } from "@kickstartds/base/lib/tag-label";

import { SourceSnippetProps } from "./SourceSnippetProps";
import { Headline } from "@kickstartds/base/lib/headline";
import React from "react";
import { Button, Teaser } from "@kickstartds/base";

export const SourceSnippet: FunctionComponent<
  SourceSnippetProps & HTMLAttributes<HTMLDivElement>
> = ({ title, text, link, ...props }) => (
  <Teaser
    className="c-source-snippet"
    topic={title}
    text={text}
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
