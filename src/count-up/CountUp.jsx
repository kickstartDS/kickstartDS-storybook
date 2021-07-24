import { CountUp as OriginalCountUp } from "@kickstartds/content/lib/count-up";

export const CountUp = (props) => (
  <div className="kds-count-up">
    <svg
      className="kds-count-up__progress"
      viewBox={`0 0 200 200`}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        className="kds-count-up__rect"
        x={0}
        y={0}
        width="200px"
        height="200px"
        rx={0}
        ry={0}
        rotate={90}
        strokeWidth={10}
        strokeDashoffset={1600}
        strokeDasharray={0, 1600}
        fill="transparent"
      ></rect>
    </svg>
   
    <div className="kds-count-up__fill">
      <div class="bubbles">
      <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
      </div>
    </div>

    <OriginalCountUp {...props} />
  </div>
);
