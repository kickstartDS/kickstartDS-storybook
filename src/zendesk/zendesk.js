import { inBrowser } from "@kickstartds/core/lib/core";
import { zESettings } from "./zESettings";

const scriptId = "ze-snippet";
const storageKey = "zd_loaded";
const load = () => {
  const script = document.createElement("script");
  script.setAttribute("id", scriptId);
  script.src =
    "https://static.zdassets.com/ekr/snippet.js?key=7f767236-672e-4632-997e-310b62ab340b";
  document.body.appendChild(script);
  sessionStorage.setItem(storageKey, true);
};

if (inBrowser) {
  if (!window.zE) {
    window.zESettings = zESettings;
    if (sessionStorage.getItem(storageKey)) {
      load();
    } else {
      setTimeout(load, 10000);
    }
  }
}
