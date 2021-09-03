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
      <nav class="kds-footer-nav">
        <ul class="kds-footer-nav_list">
          <p class="kds-footer-nav_headline">
            Links
          </p>
          <li class="kds-footer-nav_list_item">
            <a class="kds-footer-nav_list_item_link">
              Privacy
            </a>
          </li>
          <li class="kds-footer-nav_list_item">
            <a class="kds-footer-nav_list_item_link">
              Imprint
            </a>
          </li>
        </ul>
        <ul class="kds-footer-nav_list">
          <p class="kds-footer-nav_headline">
            Get in touch
          </p>
          <li class="kds-footer-nav_list_item">
            <a class="kds-footer-nav_list_item_link">
              Twitter
            </a>
          </li>
          <li class="kds-footer-nav_list_item">
            <a class="kds-footer-nav_list_item_link">
              WhatApp us
            </a>
          </li>
        </ul>
        <ul class="kds-footer-nav_list">
          <p class="kds-footer-nav_headline">
            Contact us
          </p>
          <li class="kds-footer-nav_list_item">
            <a class="kds-footer-nav_list_item_link">
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
          © 2021 kickstartDS
        </p>
      </div>

    </Section>
  </footer>
);
