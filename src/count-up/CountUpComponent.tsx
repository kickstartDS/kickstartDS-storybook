import { FunctionComponent, HTMLAttributes } from "react";

import classnames from "classnames";
import {
  CountUpContext,
  CountUpContextDefault,
} from "@kickstartds/content/lib/count-up";
import { defaultRenderFn } from "@kickstartds/core/lib/core";
import { defaultRenderFn as richTextDefaultRenderFn } from "@kickstartds/base/lib/rich-text";

import { CountUpProps } from "./CountUpProps";

interface RenderFunctions {
  renderTo?: typeof defaultRenderFn;
  renderTopic?: typeof defaultRenderFn;
  renderText?: typeof richTextDefaultRenderFn;
  renderLinkLabel?: typeof defaultRenderFn;
}

const CountUp: FunctionComponent<
  CountUpProps & RenderFunctions & HTMLAttributes<HTMLDivElement>
> = ({ graphic, icon, ...rest }) => (
  <div
    className={classnames(
      "kds-count-up ",
      graphic && graphic !== "none" && `kds-count-up--${graphic}`
    )}
  >
    {graphic !== "none" && (
      <>
        <svg
          className="kds-count-up__progress"
          viewBox="0 0 200 200"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            className="kds-count-up__rect"
            x={0}
            y={0}
            width={200}
            height={200}
            rx={0}
            ry={0}
            rotate={90}
            strokeWidth={10}
            strokeDashoffset={1600}
            strokeDasharray={"(0, 1600)"}
            fill="transparent"
          ></rect>
        </svg>

        <div className="kds-count-up__fill-wrapper">
          <div className="kds-count-up__fill">
            <div className="bubbles">
              {[...Array(20)].map((_, i) => (
                <div className="bubble" key={i}></div>
              ))}
            </div>
          </div>
        </div>
      </>
    )}
    <CountUpContextDefault icon={graphic === "none" ? icon : {}} {...rest} />
  </div>
);

export const CountUpProvider = (props) => (
  <CountUpContext.Provider value={CountUp} {...props} />
);
