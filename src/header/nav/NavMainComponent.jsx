import classnames from "classnames";
import { NavToggle } from "./NavToggleComponent";
import { Link } from "@kickstartds/base/lib/link";
import { Button } from "@kickstartds/base/lib/button";
import { Logo } from "../../logo/LogoComponent";

export const NavMain = ({ activeEntry, navEntries = [], cta, light }) => (
  <div className="nav-main__wrap">
    <NavToggle />
    <nav className="nav-main" id="nav-main" aria-label="Hauptnavigation">
      <Logo />
      <ul className="nav-main__list">
        {navEntries.map(({ label, href, id }, index) => (
          <li
            className={classnames(
              "nav-main__item",
              activeEntry === id && "nav-main__item--active"
            )}
            key={index}
          >
            <Link href={href} className="nav-main__item__link">
              {label}
            </Link>
          </li>
        ))}
        {cta && (
          <Button
            className="nav-main--button"
            size="small"
            icon={{
              icon: "chevron-right",
            }}
            {...cta}
            variant="outline"
          />
        )}
      </ul>
    </nav>
  </div>
);
