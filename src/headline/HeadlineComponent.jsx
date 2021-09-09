import {
  HeadlineContext,
} from "@kickstartds/base/lib/headline";
import classnames from "classnames";
import { defaultRenderFn } from '@kickstartds/core/lib/core';

export const Headline = ({
  content,
  level = 'h2',
  styleAs = 'none',
  align = 'left',
  pageHeader,
  subheadline,
  spaceAfter = 'none',
  renderContent = defaultRenderFn,
  renderSubheadline = defaultRenderFn,
  className,
  switchOrder,
  ...props
}) => {
  const TagName = level;
  return (
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
          styleAs !== "none" && styleAs !== level && `c-headline__${styleAs}`
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
  );
};

export const HeadlineProvider = (props) => (
  <HeadlineContext.Provider value={Headline} {...props} />
);
