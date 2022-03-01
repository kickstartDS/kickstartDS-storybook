import { Link } from "@kickstartds/base/lib/link";

export const Logo = () => (
  <Link className="kds-logo" href="/">
    <img
      className="kds-logo__img kds-logo__img--light"
      src="/logo-dark.svg"
      alt="kdsore Logo"
      width={284}
      height={56}
    />
    <img
      className="kds-logo__img kds-logo__img--dark"
      src="/logo.svg"
      alt="kickstartds Logo"
      width={284}
      height={56}
    />
  </Link>
);
