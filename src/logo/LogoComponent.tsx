import { FC, HTMLAttributes } from "react";
import { Container } from "@kickstartds/core/lib/container";
import { Link } from "@kickstartds/base/lib/link";
import classnames from "classnames";
import { LogoProps } from "./LogoProps";
import React from "react";

export const Logo: FC<LogoProps & HTMLAttributes<HTMLElement>> = ({
  dark,
  home,
  ...props
}) => (
  <>
    <Link className="kds-logo" href={home}>
      {dark ? (
        <img
          className="kds-logo__img kds-logo__img--dark"
          src="/logo-dark.svg"
          alt="kdsore Logo"
          width={284}
          height={56}
        />
      ) : (
        <img
          className="kds-logo__img"
          src="/logo.svg"
          alt="kickstartds Logo"
          width={284}
          height={56}
        />
      )}
    </Link>
  </>
);
