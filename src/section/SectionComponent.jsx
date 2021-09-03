import {
  SectionContextDefault,
  SectionContext,
} from "@kickstartds/base/lib/section";
import classnames from "classnames";

export const Section = ({ pattern, background, deko, className, ...props }) => (
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
);

export const SectionProvider = (props) => (
  <SectionContext.Provider value={Section} {...props} />
);
