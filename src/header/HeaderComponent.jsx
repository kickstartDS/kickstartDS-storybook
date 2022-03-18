import { NavMain } from "./nav/NavMainComponent";
import { NavSkip } from "./nav/NavSkipComponent";
import { Logo } from "../logo/LogoComponent";
import "./Header";

export const Header = ({ light, nav, cta, activeNavId }) => (
  <>
    <NavSkip />
    <header data-component="kds.header">
      <div className={`kds-header ${light ? "kds-header--light" : ""}`}>
        <Logo />
        {nav && nav.enabled && (
          <NavMain light={light} navEntries={nav.items} active={activeNavId} cta={cta} />
        )}
      </div>
    </header>
    {!light && <div className="kds-header--spacer"></div>}
  </>
);
