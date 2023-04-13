import { inBrowser } from "@kickstartds/core/lib/core";

export const navMainEvents = {
  change: "nav-main.change",
};

let mm;
if (inBrowser) {
  mm = window.matchMedia("(min-width: 60em)");
  mm.addEventListener("change", (event) =>
    window._ks.radio.emit(navMainEvents.change, event.matches)
  );
}

export const isDesktop = () => mm.matches;
