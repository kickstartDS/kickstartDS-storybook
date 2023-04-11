import React, { FunctionComponent, HTMLAttributes } from "react";

import { Link } from "@kickstartds/base/lib/link";
import { Section } from "@kickstartds/base/lib/section";

import { FooterProps } from "./FooterProps";
import { Logo } from "../logo/LogoComponent";

export const Footer: FunctionComponent<
  FooterProps & HTMLAttributes<HTMLDivElement>
> = ({ sections, dark, homeLink }) => (
  <>
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
          {sections &&
            sections.length > 0 &&
            sections.map(({ headline, links }, navKey) => (
              <div key={navKey}>
                <p className="kds-footer-nav_headline">{headline}</p>
                <ul className="kds-footer-nav_list">
                  {links &&
                    links.length > 0 &&
                    links.map(({ label, ...props }, itemKey) => (
                      <li className="kds-footer-nav_list_item" key={itemKey}>
                        <Link
                          {...props}
                          className="kds-footer-nav_list_item_link"
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
        </nav>

        <div className="kds-footer__logo-wrap">
          <Logo dark={dark} homeLink={homeLink} />
        </div>
      </Section>
    </footer>
  </>
);
