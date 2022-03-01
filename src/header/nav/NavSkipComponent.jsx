import "./NavSkip";

export const NavSkip = () => (
  <nav
    className="nav-skip"
    aria-label="Sprungmarken"
    data-component="base.nav-skip"
  >
    <ul className="nav-skip__list">
      <li>
        <a href="#content" className="nav-skip__link">
          Zum Inhalt springen
        </a>
      </li>
      <li>
        <a href="#nav-main" className="nav-skip__link">
          Zur Hauptnavigation springen
        </a>
      </li>
    </ul>
  </nav>
);
