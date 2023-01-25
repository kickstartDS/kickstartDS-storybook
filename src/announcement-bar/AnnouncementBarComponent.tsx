import { Section } from "@kickstartds/base/lib/section";
import { Link } from "@kickstartds/base/lib/link";
import { LinkButton } from "@kickstartds/base/lib/link-button";
import { useSessionState } from "../hooks/useSessionState";
import { FC, HTMLAttributes } from "react";

const AlertIcon: FC<HTMLAttributes<SVGElement>> = (props) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.35334 12.4874L17.7592 3L39 12.4874L33.5185 35.6038L23.2407 39L2 31.5283L6.35334 12.4874Z"
      fill="#063946"
    />
    <path
      d="M3.36 7.4902L14.92 2L36 14.3529L30.9065 34.4878L21.72 37L2 30.8235L3.36 7.4902Z"
      fill="#ECFF00"
    />
    <path
      d="M18.6966 9L12 11.4226L16.545 25L19 24.6885L18.6966 9Z"
      fill="#06566A"
    />
    <path
      d="M18.7398 27L16.2015 27.2955L16 29.8053L18.5994 30L20 28.8423L18.7398 27Z"
      fill="#06566A"
    />
  </svg>
);

type AnnouncementBarProps = {
  content: string;
  linkLabel: string;
  linkHref: string;
  targetSessionStorageKey: string;
};

export const AnnouncementBar: FC<AnnouncementBarProps> = ({
  content,
  linkHref,
  linkLabel,
  targetSessionStorageKey,
}) => {
  const [hidden] = useSessionState(targetSessionStorageKey);

  return (
    <Section
      width="max"
      spaceBefore="none"
      spaceAfter="none"
      align="center"
      inverted="true"
      className="c-announcement-bar--section"
    >
      <div className="c-announcement-bar">
        <div className="c-announcement-bar__content">
          <AlertIcon className="c-announcement-bar__icon" />
          <span className="c-announcement-bar__text">{content}</span>
        </div>
        {hidden ? (
          ""
        ) : (
          <LinkButton
            label={linkLabel}
            href={linkHref}
            variant="solid"
            size="small"
            className="c-announcement-bar__link"
          />
        )}
      </div>
    </Section>
  );
};
