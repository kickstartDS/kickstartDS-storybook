import { Link } from '@kickstartds/base/lib/link';

export const Header = () => (
  <>
    <header data-component="kds.header">
      <div className="kds-header">
        <div className="kds-header__inner kds-header__inner">
          <Link className="kds-header__logo" href="/">
            <img src="/logo.svg" />
          </Link>
          <div className="kds-nav-main">
            <ul className="kds-nav-main__list">
              <li className="kds-nav-main__item">
                <Link className="kds-nav-main__link c-button c-button--small c-button--outline" href="/blog">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    <div className="main-header-spacer"></div>
  </>
);
