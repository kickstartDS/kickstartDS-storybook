import React, { FC, HTMLAttributes } from "react";
import { Section } from "@kickstartds/base/lib/section";
import { LinkButton } from "@kickstartds/base/lib/link-button";

type AnnouncementBarProps = {
  content: string;
  linkLabel: string;
  linkHref: string;
};

const AlertIcon: FC<HTMLAttributes<SVGElement>> = (props) => (
  <svg
    width="41"
    height="40"
    viewBox="0 0 41 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.9299 12.9838L19.2531 6L34.7531 12.9838L30.7531 30L23.2531 32.5L7.75314 27L10.9299 12.9838Z"
      fill="#063946"
    />
    <path
      d="M8.75313 9L17.2531 5L32.7531 14L29.0079 28.6697L22.2531 30.5L7.75313 26L8.75313 9Z"
      fill="#ECFF00"
    />
    <path
      d="M20.0077 10L14.8889 11.7597L18.363 21.622L20.2396 21.3957L20.0077 10Z"
      fill="#06566A"
    />
    <path
      d="M20.466 23.2723L18.5893 23.4986L18.4403 25.4205L20.3622 25.5696L21.3977 24.6831L20.466 23.2723Z"
      fill="#06566A"
    />
  </svg>
);

export const AnnouncementBar: FC<AnnouncementBarProps> = ({
  content,
  linkHref,
  linkLabel,
}) => (
  <Section width="max" spaceBefore="none" spaceAfter="none" inverted="true">
    <div className="c-announcement-bar">
      <AlertIcon className="c-announcement-bar__icon" />
      <span>{content}</span>
      <LinkButton
        label={linkLabel}
        href={linkHref}
        variant="solid"
        size="small"
        className="c-announcement-bar__link"
      />
    </div>
  </Section>
);
