import { FunctionComponent, HTMLAttributes } from "react";
import { Picture } from "@kickstartds/base/lib/picture";
import classnames from "classnames";
import { PersonProps } from "./PersonProps";

export const Person: FunctionComponent<
  PersonProps & HTMLAttributes<HTMLDivElement>
> = ({ name, avatar, size, title, className, ...props }) => {
  return (
    <div
      className={classnames(
        "kds-person",
        size && `kds-person kds-person--${size}`,
        className
      )}
    >
      {avatar ? (
        <>
          <Picture className="kds-person__avatar" src={avatar} />
        </>
      ) : (
        ""
      )}
      <div className="kds-person__info">
        <span className="kds-person__name">{name}</span>

        {title ? (
          <>
            <span className="kds-person__title">{title}</span>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
