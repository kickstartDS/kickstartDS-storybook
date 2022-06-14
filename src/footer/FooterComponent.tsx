import { FunctionComponent, HTMLAttributes } from "react";

import { Link } from "@kickstartds/base/lib/link";
import { Section } from "@kickstartds/base/lib/section";

import { FooterProps } from "./FooterProps";

export const Footer: FunctionComponent<
FooterProps & HTMLAttributes<HTMLDivElement>
> = ({ sections }) => (
  <footer className="kds-footer">
    <Section
      mode="list"
      gutter="none"
      background="accent"
      spaceAfter="default"
      spaceBefore="default"
      className="kds-footer-main"
      width="wide"
    >
      <nav className="kds-footer-nav">
        {sections && sections.length > 0 && sections.map(({ headline, links }, navKey) => (
          <div key={navKey}>
            <p className="kds-footer-nav_headline">{headline}</p>
            <ul className="kds-footer-nav_list">
              {links && links.length > 0 && links.map(({ label, ...props }, itemKey) => (
                <li className="kds-footer-nav_list_item" key={itemKey}>
                  <Link {...props} className="kds-footer-nav_list_item_link">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <div className="kds-footer__logo-wrap">
        <Link href="/" className="kds-footer__logo">
          <img alt="kickstartDS Logo" src="/logo.svg" />
        </Link>
      </div>
    </Section>
  </footer>
);
