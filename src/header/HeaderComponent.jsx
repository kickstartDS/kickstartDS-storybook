export const Header = () => (
  <>
    <header data-component="kds.header">
      <div className="kds-header">
        <div className="kds-header__inner kds-header__inner">
          <a href="/" className="kds-header__logo">
            <img src="/logo.svg" />
          </a>
          <div className="kds-nav-main">
            <ul className="kds-nav-main__list">
              <li className="kds-nav-main__item">
                <a className="kds-nav-main__link c-button c-button--small c-button--outline" href="#">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    <div className="main-header-spacer"></div>
  </>
);
