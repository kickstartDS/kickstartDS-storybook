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

export const Section = ({
  pattern,
  background,
  deko,
  className,
  ...props
}) => (
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
      {...props}
    />
  </HeadlineProvider>
);

export const SectionProvider = (props) => (
  <SectionContext.Provider value={Section} {...props} />
);
