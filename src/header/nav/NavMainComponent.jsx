import classnames from "classnames";
import { NavToggle } from "./NavToggleComponent";
import { Link } from "@kickstartds/base/lib/link";
import { Button } from "@kickstartds/base/lib/button";
import { Logo } from "../../logo/LogoComponent";
import { Icon } from "@kickstartds/base/lib/icon";

export const NavMain = ({
  activeEntry,
  dark,
  navEntries = [],
  secondaryNavEntries = [],
  cta,
}) => (
  <div className="nav-main__wrap">
    <NavToggle />
    <nav className="nav-main" id="nav-main" aria-label="Hauptnavigation">
      <Logo dark={dark} />
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
        <li className="nav-main__item nav-main__item--icon">
          <Link
            href="https://github.com/kickstartDS/kickstartDS"
            className="nav-main__item__link"
          >
            <Icon icon="github" />
          </Link>
        </li>
        <li className="nav-main__item nav-main__item--icon">
          <Link href="/concierge" className="nav-main__item__link">
            <Icon icon="concierge" />
          </Link>
        </li>
        {cta && (
          <Button
            className="nav-main--button"
            size="small"
            variant="outline"
            {...cta}
          />
        )}
      </ul>
      {secondaryNavEntries.length ? (
        <ul className="nav-main-secondary__list">
          {secondaryNavEntries.map(({ label, href, id, icon }) => (
            <li
              className={classnames(
                "nav-main-secondary__item",
                activeEntry === id && "nav-main-secondary__item--active"
              )}
              key={id}
            >
              <Link href={href} className="nav-main-secondary__item__link">
                <Icon icon={icon} />
                <span>{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </nav>
  </div>
);
