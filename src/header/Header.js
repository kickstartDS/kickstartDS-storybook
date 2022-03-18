import { Component, define } from "@kickstartds/core/lib/core";
import { windowEvents } from "@kickstartds/core/lib/utils";

const identifier = "kds.header";

class Header extends Component {
  static identifier = identifier;

  constructor(element) {
    super(element);

    this.lastScrollPosition = window.scrollY;
    this.scrollUpDiff = 0;

    window.rm.radio.on(windowEvents.scroll, () => this.changeHeader());

    this.changeHeader();
  }

  changeHeader() {
    const currentScrollPosition = window.pageYOffset;

    requestAnimationFrame(() => {
      if (currentScrollPosition > 80) {
        document.body.classList.add("header-is-scrolling");

        if (currentScrollPosition > this.lastScrollPosition) {
          // Scroll down
          this.scrollUpDiff = 0;
          document.body.classList.remove("header-is-scrolling-up");
        } else {
          // Scroll up
          this.scrollUpDiff += currentScrollPosition - this.lastScrollPosition;

          if (this.scrollUpDiff < -100) {
            this.scrollUpDiff = 0;
            document.body.classList.add("header-is-scrolling-up");
          }
        }
      } else {
        document.body.classList.remove("header-is-scrolling");
        document.body.classList.remove("header-is-scrolling-up");
      }
      this.lastScrollPosition = currentScrollPosition;
    });
  }
}

define(identifier, Header);
