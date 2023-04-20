import { FunctionComponent, HTMLAttributes } from "react";

import {
  SectionContextDefault,
  SectionContext,
  Section as KdsSection,
} from "@kickstartds/base/lib/section";
import classnames from "classnames";

import { SectionProps } from "./SectionProps";

const SectionComponent: FunctionComponent<
  SectionProps & HTMLAttributes<HTMLDivElement>
> = ({ pattern, inverted, background, variant, className, ...props }) => (
  <SectionContextDefault
    className={classnames(
      className,
      pattern &&
        pattern !== "none" &&
        `l-section__pattern l-section__pattern-${pattern} l-section__pattern-${pattern}--${
          inverted ? "dark" : "dark"
        }`,
      variant && variant !== "none" && `l-section-style--${variant}`
    )}
    background={background}
    inverted={inverted}
    {...props}
  />
);

export const SectionProvider = (props) => (
  <SectionContext.Provider value={SectionComponent} {...props} />
);

export const Section = KdsSection as typeof SectionComponent;
