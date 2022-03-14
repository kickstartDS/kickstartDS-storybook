import { Link } from "@kickstartds/base/lib/link";
import { Button } from "@kickstartds/base/lib/button";

export const Header = () => (
  <>
    <header data-component="kds.header">
      <div className="kds-header">
        <Link className="kds-header__logo" href="/">
          <img src="/logo.svg" alt="kickstartDS Logo" />
        </Link>
        <div className="kds-header__item">
          <Button
            variant="outline"
            size="small"
            label="Contact us"
          />
        </div>
      </div>
    </header>
    <div className="main-header-spacer"></div>
  </>
);
