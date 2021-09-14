import { Link } from "@kickstartds/base/lib/link";
import { Section } from "@kickstartds/base/lib/section";

export const Footer = ({ nav }) => (
  <footer className="kds-footer">
    <Section
      mode="list"
      gutter="none"
      background="accent"
      spaceAfter="default"
      spaceBefore="default"
      className="kds-footer-main"
    >
      <nav className="kds-footer-nav">
        {nav.map(({ headline, items }, navKey) => (
          <ul className="kds-footer-nav_list" key={navKey}>
            <p className="kds-footer-nav_headline">{headline}</p>
            {items.map(({ label, ...props }, itemKey) => (
              <li className="kds-footer-nav_list_item" key={itemKey}>
                <Link {...props} className="kds-footer-nav_list_item_link">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </nav>

      <div className="kds-footer__logo-wrap">
        <Link href="/" className="kds-footer__logo">
          <img src="/logo.svg" />
        </Link>
      </div>
    </Section>
  </footer>
);
