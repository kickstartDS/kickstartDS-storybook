import { zESettings } from "./zESettings";

const { defineProperty } = Object;
const scriptId = "ze-snippet";
export const storageKey = "zd_loaded";

export const waitForZendesk = () => {
  if (!window.zESettings) {
    window.zESettings = zESettings;
  }

  const promise = new Promise((resolve) => {
    if (window.zE) {
      if (typeof window.zE === "function") {
        return resolve(window.zE);
      }
      return window.zE.then(resolve);
    }
    defineProperty(window, "zE", {
      configurable: true,
      get() {
        return promise;
      },
      set(value) {
        defineProperty(window, "zE", {
          configurable: true,
          enumerable: true,
          writable: true,
          value,
        });
        resolve(window.zE);
      },
    });
    const script = document.createElement("script");
    script.setAttribute("id", scriptId);
    script.src =
      "https://static.zdassets.com/ekr/snippet.js?key=7f767236-672e-4632-997e-310b62ab340b";
    document.body.appendChild(script);
    sessionStorage.setItem(storageKey, true);
  });
  return promise;
};
