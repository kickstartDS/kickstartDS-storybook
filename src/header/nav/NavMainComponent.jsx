import classnames from "classnames";
import { NavToggle } from "./NavToggleComponent";
import { Link } from "@kickstartds/base/lib/link";
import { LinkButton } from "@kickstartds/base/lib/link-button";
import { Logo } from "../../logo/LogoComponent";

export const NavMain = ({ active, navEntries = [], cta, light }) => (
  <div className="nav-main__wrap">
    <NavToggle />
    <nav className="nav-main" id="nav-main" aria-label="Hauptnavigation">
      <Logo />
      <ul className="nav-main__list">
        {navEntries.map(({ label, href, id }, index) => (
          <li
            className={classnames(
              "nav-main__item",
              active === id && "nav-main__item--active"
            )}
            key={index}
          >
            <Link href={href} className="nav-main__item__link">
              {label}
            </Link>
          </li>
        ))}
        {cta && (
          <LinkButton
            className="nav-main--contact-button"
            size="small"
            icon={{
              icon: "contact",
            }}
            {...cta}
            variant={light?"solid-inverted":cta.variant}
          />
        )}
      </ul>
    </nav>
  </div>
);
