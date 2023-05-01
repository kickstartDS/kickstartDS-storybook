import "./NavToggle";

export const NavToggle = () => (
  <button
    type="button"
    className="nav-toggle"
    id="toggle-sidebar"
    aria-controls="nav-main"
    aria-expanded="false"
    ks-component="base.nav-toggle"
  >
    <span className="nav-toggle__label">Navigation öffnen/schließen</span>
    <div className="nav-toggle__icon">
      <div className="nav-toggle__icon__middle"></div>
    </div>
  </button>
);
