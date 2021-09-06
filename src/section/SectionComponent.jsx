import {
  SectionContextDefault,
  SectionContext,
} from "@kickstartds/base/lib/section";

import { Headline } from "../headline/HeadlineComponent";
import { HeadlineContext } from "@kickstartds/base/lib/headline";

import classnames from "classnames";

const HeadlineProvider = (props) => (
  <HeadlineContext.Provider value={Headline} {...props} />
);

export const Section = ({ pattern, background, deko, className, headline, ...props }) => {
  if (headline && !headline.content && !headline.subheadline) {
    headline = undefined
  }
  return (
    <HeadlineProvider>
      <SectionContextDefault
        className={classnames(
          className,
          pattern &&
            pattern !== "none" &&
            `l-section__pattern l-section__pattern-${pattern} l-section__pattern-${pattern}--${
              background === "dark" ? "dark" : "light"
            }`,
          deko && "l-section--deko"
        )}
        background={background}
        headline={headline}
        {...props}
      />
    </HeadlineProvider>
  );
};

export const SectionProvider = (props) => (
  <SectionContext.Provider value={Section} {...props} />
);
