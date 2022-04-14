import { Link } from "@kickstartds/base/lib/link";

export const Logo = ({ home }) => (
  <Link className="kds-logo" href={home}>
    <img
      className="kds-logo__img kds-logo__img--light"
      src="/logo-light.svg"
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
