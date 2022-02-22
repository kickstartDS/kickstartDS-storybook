import { FunctionComponent, HTMLAttributes } from "react";

import {
  SectionContextDefault,
  SectionContext,
} from "@kickstartds/base/lib/section";
import classnames from "classnames";

import { SectionProps } from "./SectionProps";

const Section: FunctionComponent<
  SectionProps & HTMLAttributes<HTMLDivElement>
> = ({ pattern, background, deko, className, ...props }) => (
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
