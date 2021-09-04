import { Icon } from "@kickstartds/base/lib/icon";
import { Section } from "@kickstartds/base/lib/section";
import { Button } from "@kickstartds/base/lib/button";
import { ContentBox } from "@kickstartds/base/lib/content-box";

export const Footer = () => (
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
        <ul className="kds-footer-nav_list">
          <p className="kds-footer-nav_headline">
            Links
          </p>
          <li className="kds-footer-nav_list_item">
            <a href="/privacy" className="kds-footer-nav_list_item_link">
              Privacy
            </a>
          </li>
          <li className="kds-footer-nav_list_item">
            <a href="/legal" className="kds-footer-nav_list_item_link">
              Legal notice
            </a>
          </li>
        </ul>
        <ul className="kds-footer-nav_list">
          <p className="kds-footer-nav_headline">
            Get in touch
          </p>
          <li className="kds-footer-nav_list_item">
            <a href="https://twitter.com/kickstartDS" className="kds-footer-nav_list_item_link">
              Twitter
            </a>
          </li>
          <li className="kds-footer-nav_list_item">
            <a className="kds-footer-nav_list_item_link">
              WhatApp us
            </a>
          </li>
        </ul>
        <ul className="kds-footer-nav_list">
          <p className="kds-footer-nav_headline">
            Contact us
          </p>
          <li className="kds-footer-nav_list_item">
            <a href="mailto:hello@kickstartds.com" className="kds-footer-nav_list_item_link">
              hello@kickstartds.com
            </a>
          </li>
        </ul>
      </nav>

      <div className="kds-footer__logo-wrap">
        <a href="/" className="kds-footer__logo">
          <img src="/logo.svg" />
        </a>
        <p>
          © 2021 ruhmesmeile GmbH
        </p>
      </div>

    </Section>
  </footer>
);
