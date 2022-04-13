import { Component, define } from "@kickstartds/core/lib/core";
import { navMainEvents } from "./navMainEvents";
import body from "../../shared/body";

export default class NavToggle extends Component {
  static identifier = "base.nav-toggle";

  static actions = {
    open: `${NavToggle.identifier}.open`,
    close: `${NavToggle.identifier}.close`,
  };

  constructor(element) {
    super(element);

    this.isOpen = this.element.getAttribute("aria-expanded") === "true";
    this.nav = document.getElementById(
      this.element.getAttribute("aria-controls")
    );
    this.navMainDropdowns = [...document.querySelectorAll("#nav-main details")];

    this.element.addEventListener("click", this);

    window.rm.radio.on(navMainEvents.change, (_, desktop) => {
      if (desktop) {
        this.close();
      }
    });

    window.rm.radio.on('location.change', () => this.close());
  }

  open() {
    this.isOpen = true;
    body.lock();
    this.element.setAttribute("aria-expanded", this.isOpen);
    this.nav.focus();

    window.addEventListener("keydown", this);
  }

  close() {
    this.isOpen = false;
    body.reset();
    this.element.setAttribute("aria-expanded", this.isOpen);
    this.element.focus();

    window.removeEventListener("keydown", this);
  }

  onclick() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  onkeydown(event) {
    if (event.key === "Escape") {
      if (
        this.navMainDropdowns.every(
          (dropdown) => !dropdown.hasAttribute("open")
        )
      ) {
        this.close();
      }
    }
  }
}

define(NavToggle.identifier, NavToggle);
