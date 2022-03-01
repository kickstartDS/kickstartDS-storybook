import { Component, define } from "@kickstartds/core/lib/core";
import { navMainEvents, isDesktop } from "./navMainEvents";

class NavSkip extends Component {
  static identifier = "base.nav-skip";

  constructor(element) {
    super(element);

    this.skipToNav = element.querySelector('[href*="#nav"]');
    window.rm.radio.on(navMainEvents.change, () => this.updateSkipLinks());
    this.updateSkipLinks();
  }

  updateSkipLinks() {
    this.skipToNav.setAttribute(
      "href",
      window.location.href.split("#")[0] +
        (isDesktop() ? "#nav-main" : "#toggle-sidebar")
    );
  }
}

define(NavSkip.identifier, NavSkip);
