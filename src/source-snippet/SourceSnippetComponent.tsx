import React, { FunctionComponent, HTMLAttributes } from "react";

import { SourceSnippetProps } from "./SourceSnippetProps";
import { Teaser } from "@kickstartds/base/lib/teaser";
import { Button } from "../button/ButtonComponent";

export const SourceSnippet: FunctionComponent<
  SourceSnippetProps & HTMLAttributes<HTMLDivElement>
> = ({ title, url, link, ...props }) => (
  <Teaser
    className="c-source-snippet"
    topic={title}
    text={url}
    renderText={(url, link) => (
      <>
        <span>{url}</span>
        <Button
          label="Go to source"
          href={link}
          variant={"clear"}
          size={"small"}
          iconAfter
          icon={{
            icon: "chevron-down",
          }}
        />
      </>
    )}
    link={{
      href: link,
      label: "Go to source",
      hidden: true,
    }}
    {...props}
  />
);
