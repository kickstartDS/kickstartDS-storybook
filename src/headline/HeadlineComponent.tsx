import { FunctionComponent, HTMLAttributes } from "react";

import { HeadlineContext } from "@kickstartds/base/lib/headline";
import classnames from "classnames";
import { defaultRenderFn } from "@kickstartds/core/lib/core";

import { HeadlineProps } from "./HeadlineProps";

interface RenderFunctions {
  renderContent?: typeof defaultRenderFn;
  renderSubheadline?: typeof defaultRenderFn;
}

const Headline: FunctionComponent<
  HeadlineProps & RenderFunctions & HTMLAttributes<HTMLElement>
> = ({
  content,
  level = "h2",
  styleAs = "none",
  align = "left",
  pageHeader,
  subheadline,
  spaceAfter = "small",
  renderContent = defaultRenderFn,
  renderSubheadline = defaultRenderFn,
  className,
  switchOrder,
  ...props
}) => {
  const TagName = level;
  return (
    <>
      {content || subheadline ? (
        <>
          <header
            className={classnames(
              "c-headline",
              align && `c-headline--align-${align}`,
              spaceAfter && `c-headline--space-after-${spaceAfter}`,
              { "c-headline--page-header": pageHeader },
              className
            )}
            {...props}
          >
            {subheadline && switchOrder && (
              <p className="c-headline__subheadline">
                {renderSubheadline(subheadline)}
              </p>
            )}
            <TagName
              className={classnames(
                "c-headline__headline",
                styleAs !== "none" &&
                  styleAs !== level &&
                  `c-headline__${styleAs}`
              )}
            >
              {renderContent(content)}
            </TagName>
            {subheadline && !switchOrder && (
              <p className="c-headline__subheadline">
                {renderSubheadline(subheadline)}
              </p>
            )}
          </header>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export const HeadlineProvider = (props) => (
  <HeadlineContext.Provider value={Headline} {...props} />
);
