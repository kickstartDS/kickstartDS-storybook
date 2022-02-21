import { Link } from "@kickstartds/base/lib/link";

export const Header = () => (
  <>
    <header data-component="kds.header">
      <div className="kds-header">
        <Link className="kds-header__logo" href="/">
          <img src="/logo.svg" alt="kickstartDS Logo" />
        </Link>
        <div className="kds-header__item">
          <Link
            className="kds-header__link c-button c-button--small c-button--outline"
            href="/blog"
          >
            Blog
          </Link>
        </div>
      </div>
    </header>
    <div className="main-header-spacer"></div>
  </>
);
