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
            <a href="/blog" className="kds-footer-nav_list_item_link">
              Blog
            </a>
          </li>
          <li className="kds-footer-nav_list_item">
            <a href="/storybook" className="kds-footer-nav_list_item_link">
              Storybook
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
            <a href="https://wa.me/491752131879?text=Hi!%20I%20am%20interested%20to%20know%20more%20about%20kickstart%20DS." className="kds-footer-nav_list_item_link">
              WhatsApp us
            </a>
          </li>
          <li className="kds-footer-nav_list_item">
            <a href="mailto:hello@kickstartds.com" className="kds-footer-nav_list_item_link">
              Send a Mail
            </a>
          </li>
        </ul>
        <ul className="kds-footer-nav_list">
          <p className="kds-footer-nav_headline">
            Data &amp; Compliance
          </p>
          <li className="kds-footer-nav_list_item">
            <a href="/privacy" className="kds-footer-nav_list_item_link">
              Privacy
            </a>
          </li>
          <li className="kds-footer-nav_list_item">
            <a href="/cookies" className="kds-footer-nav_list_item_link">
              Cookie List
            </a>
          </li>
          <li className="kds-footer-nav_list_item">
            <a href="/legal" className="kds-footer-nav_list_item_link">
              Legal notice
            </a>
          </li>
        </ul>
      </nav>

      <div className="kds-footer__logo-wrap">
        <a href="/" className="kds-footer__logo">
          <img src="/logo.svg" />
        </a>
      </div>

    </Section>
  </footer>
);
