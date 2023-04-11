import React, { FunctionComponent, HTMLAttributes } from "react";
import { RichText } from "@kickstartds/base/lib/rich-text";
import { CollapsibleBox } from "@kickstartds/base/lib/collapsible-box";
import { SourceProps } from "./SourceProps";
import { Picture } from "@kickstartds/base/lib/picture";
import { Link } from "@kickstartds/base/lib/link";

import { Button } from "../button/ButtonComponent";

export const Source: FunctionComponent<
  SourceProps & HTMLAttributes<HTMLDivElement>
> = ({ title, thumbnail, id, sections = [], url, ...props }) => (
  <CollapsibleBox
    {...props}
    className="c-source"
    id={id}
    summary="Creating Themeable Design Systems | Brad Frost"
    text={`Design Tokens and a Multi-Tiered Variable System From Salesforce’s Lightning Design System, which popularized the term “design tokens” in design systems: Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. We use them in place of hard-coded values (such as hex values for color or pixel values for spacing) in order to maintain a scalable and consistent visual system for UI development. Design tokens move variables to a higher level, making it easier to manage brand attributes without diving deep into a codebase. For a design system powering multiple brands, each brand defines their own design tokens, which then hook into the design system’s codebase. To accomplish this in my own work, I tend to break these variables into several tiers.   

**Relevance:** 75%`}
    renderSummary={(summary) => (
      <>
        <div className="c-source__head">
          <span className="c-source__title">{title}</span>
          <span className="c-source__url">{url}</span>
        </div>
      </>
    )}
    renderText={(text) => (
      <>
        <div className="c-source__content">
          {sections.length ? (
            <div className="c-source__sections">
              {sections.map(({ relevance, excerpt }, i) => (
                <div className="c-source__section">
                  <span className="c-source__relevance">
                    Identified Section with high relevance: {relevance}%
                  </span>
                  <RichText text={excerpt} />
                </div>
              ))}
            </div>
          ) : (
            ""
          )}

          <div className="c-source__aside">
            <Link className="c-source__thumbnail" target="_blank" href={url}>
              <Picture src={thumbnail} />
            </Link>
            <Button
              label={"Visit Source"}
              variant={"clear"}
              size={"medium"}
              iconAfter
              newTab
              href={url}
              icon={{
                icon: "chevron-right",
              }}
            />
          </div>
        </div>
      </>
    )}
  />
);
