import { FunctionComponent, HTMLAttributes } from "react";

import { TextMedia } from "@kickstartds/base/lib/text-media";
import { TagLabel } from "@kickstartds/base/lib/tag-label";
import { Section } from "@kickstartds/base/lib/section";
import { ContentBox } from "@kickstartds/base/lib/content-box";

import { RelatedProps } from "./RelatedProps";
import { LinkButton } from "../link-button/LinkButtonComponent";
import React from "react";
import { Button, Picture, RichText } from "@kickstartds/base";

export const Related: FunctionComponent<
  RelatedProps & HTMLAttributes<HTMLDivElement>
> = ({ url, title, excerpt, image, tags, ...props }) => {
  return (
    <a href={url} className="kds-related">
      {tags && tags.length > 0 && (
        <div className="tag-label-container">
          {tags?.map((tag, i) => (
            <div>
              <TagLabel label={tag} size="s" key={i} />
            </div>
          ))}
        </div>
      )}
      <Picture src={image} />
      <span className="kds-related--topic">{title}</span>
      <RichText text={excerpt} />
    </a>
  );
};
