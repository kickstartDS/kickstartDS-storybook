import { Link } from '@kickstartds/base/lib/link';
import { Section } from "@kickstartds/base/lib/section";

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
            <Link href="/blog" className="kds-footer-nav_list_item_link">
              Blog
            </Link>
          </li>
          <li className="kds-footer-nav_list_item">
            <Link href="/storybook" className="kds-footer-nav_list_item_link">
              Storybook
            </Link>
          </li>
        </ul>
        <ul className="kds-footer-nav_list">
          <p className="kds-footer-nav_headline">
            Get in touch
          </p>
          <li className="kds-footer-nav_list_item">
            <Link href="https://twitter.com/kickstartDS" className="kds-footer-nav_list_item_link">
              Twitter
            </Link>
          </li>
          <li className="kds-footer-nav_list_item">
            <Link href="https://wa.me/491752131879?text=Hi!%20I%20am%20interested%20to%20know%20more%20about%20kickstartDS." className="kds-footer-nav_list_item_link">
              WhatsApp us
            </Link>
          </li>
          <li className="kds-footer-nav_list_item">
            <Link href="mailto:hello@kickstartds.com" className="kds-footer-nav_list_item_link">
              Send a Mail
            </Link>
          </li>
        </ul>
        <ul className="kds-footer-nav_list">
          <p className="kds-footer-nav_headline">
            Data &amp; Compliance
          </p>
          <li className="kds-footer-nav_list_item">
            <Link href="/privacy" className="kds-footer-nav_list_item_link">
              Privacy
            </Link>
          </li>
          <li className="kds-footer-nav_list_item">
            <Link href="/cookies" className="kds-footer-nav_list_item_link">
              Cookie List
            </Link>
          </li>
          <li className="kds-footer-nav_list_item">
            <Link href="/legal" className="kds-footer-nav_list_item_link">
              Legal notice
            </Link>
          </li>
        </ul>
      </nav>

      <div className="kds-footer__logo-wrap">
        <Link href="/" className="kds-footer__logo">
          <img src="/logo.svg" />
        </Link>
      </div>

    </Section>
  </footer>
);
