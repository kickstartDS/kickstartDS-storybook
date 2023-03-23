import React, { FC, HTMLAttributes } from "react";
import { Link } from "@kickstartds/base/lib/link";
import { LinkButton } from "@kickstartds/base/lib/link-button";

type GithubLinkProps = {};

export const GithubLink: FC<GithubLinkProps> = ({}) => {
  return (
    <Link href="https://github.com/kickstartDS/kickstartDS">
      <svg
        className="github-corner"
        width="86"
        height="86"
        viewBox="0 0 86 86"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1763_3977)">
          <path
            d="M6 -2H1.17157L4.58579 1.41421L84.5858 81.4142L88 84.8284V80V0V-2H86H6Z"
            fill="var(--ks-color-primary-to-bg-9)"
            stroke="var(--ks-color-primary-to-bg-5)"
            stroke-width="4"
          />
          <path
            d="M47.0561 34.8799C42.4161 31.9039 44.0801 28.6719 44.0801 28.6719C45.0401 26.4639 44.5601 25.1519 44.5601 25.1519C44.1441 23.0399 45.4881 24.4159 45.4881 24.4159C46.7361 25.8879 46.1601 27.9359 46.1601 27.9359C45.3281 31.2319 47.7921 32.6079 49.0081 33.0239"
            fill="#06566A"
            className="octo-arm"
          />
          <path
            d="M42.7999 36.8C42.7679 36.832 43.9839 37.28 44.3359 36.928L48.7839 32.512C49.8079 31.744 50.7679 31.488 51.5039 31.552C48.8159 28.16 46.7999 23.808 52.0159 18.56C53.5199 17.088 55.2799 16.384 57.1039 16.32C57.2959 15.808 58.2239 13.952 60.8479 12.832C60.8479 12.832 62.3519 13.6 63.2159 17.984C64.5919 18.752 65.9039 19.776 67.0879 20.928C68.2399 22.08 69.2639 23.424 70.0319 24.832C74.4159 25.664 75.2159 27.168 75.2159 27.168C74.0639 29.792 72.2079 30.72 71.7279 30.912C71.6319 32.768 70.9599 34.496 69.4559 36C64.2079 41.248 59.8559 39.2 56.4639 36.512C56.5279 37.408 56.1439 38.688 54.8639 39.968L51.1199 43.68C50.7359 44.064 51.3119 45.408 51.3759 45.376L42.7999 36.8Z"
            fill="#06566A"
          />
        </g>
        <defs>
          <clipPath id="clip0_1763_3977">
            <rect width="86" height="86" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </Link>
  );
};
