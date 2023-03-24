import { FunctionComponent, HTMLAttributes } from "react";

import { RichText } from "@kickstartds/base/lib/rich-text";
import { TagLabel } from "@kickstartds/base/lib/tag-label";

import { SourceSnippetProps } from "./SourceSnippetProps";
import { Headline } from "@kickstartds/base/lib/headline";
import React from "react";
import { Button } from "@kickstartds/base";

export const SourceSnippet: FunctionComponent<
  SourceSnippetProps & HTMLAttributes<HTMLDivElement>
> = ({ title, text, ...props }) => (
  <div className="c-source-snippet">
    <span className="c-source-snippet__title">{title}</span>
    <p className="c-source-snippet__text">{text}</p>
    <Button
      className="c-source-snippet__link"
      label="Go there"
      iconAfter
      icon={{
        icon: "chevron-right",
      }}
      variant={"clear"}
      size={"small"}
    />
  </div>
);
