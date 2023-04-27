import React, { FunctionComponent, HTMLAttributes } from "react";

import { TagLabel } from "@kickstartds/base/lib/tag-label";
import { Picture } from "@kickstartds/base/lib/picture";
import { RichText } from "@kickstartds/base/lib/rich-text";

import { RelatedProps } from "./RelatedProps";

export const Related: FunctionComponent<
  RelatedProps & HTMLAttributes<HTMLDivElement>
> = ({ url, title, excerpt, image, tags, typeLabel, ...props }) => {
  return (
    <a href={url} className="kds-related">
      <div className="kds-related--image-wrapper">
        {typeLabel ? (
          <>
            <span className="kds-related--type">{typeLabel}</span>
          </>
        ) : (
          ""
        )}

        <Picture className="kds-related--image" src={image} />
      </div>
      <div className="kds-related--topic-wrapper">
        <span className="kds-related--topic">{title}</span>
      </div>
      <RichText text={excerpt} />
      {tags && tags.length > 0 && (
        <div className="tag-label-container">
          {tags?.map((tags, i) => (
            <TagLabel
              link={tags.link}
              label={tags.label}
              size="s"
              key={i}
            />
          ))}
        </div>
      )}
    </a>
  );
};
