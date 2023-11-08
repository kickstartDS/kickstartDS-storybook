import { FC, HTMLAttributes } from "react";
import { Link } from "@kickstartds/base/lib/link";
import { LogoProps } from "./LogoProps";

export const Logo: FC<LogoProps & HTMLAttributes<HTMLElement>> = ({
  dark,
  homeLink,
  ...props
}) => (
  <>
    {homeLink ? (
      <Link className="kds-logo" href={homeLink}>
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
    ) : (
      <div className="kds-logo">
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
      </div>
    )}
  </>
);
