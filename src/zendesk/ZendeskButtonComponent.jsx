import { createElement, useEffect } from "react";
import { inBrowser } from "@kickstartds/core/lib/core";
import { Button } from "@kickstartds/base/lib/button";
import { zESettings } from "./zESettings";

const { defineProperty } = Object;
const waitForZendesk = () => {
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
    script.setAttribute("id", "ze-snippet");
    script.src =
      "https://static.zdassets.com/ekr/snippet.js?key=7f767236-672e-4632-997e-310b62ab340b";
    document.body.appendChild(script);
  });
  return promise;
};

const onClick = () => waitForZendesk().then((zE) => zE.activate());
const labels = {
  de: "Mehr erfahren",
  en: "Learn more",
};

export const ZendeskButton = () => {
  const language =
    inBrowser && window.navigator.language.includes("de") ? "de" : "en";
  useEffect(() => {
    if (inBrowser) {
      window.zESettings = zESettings;
      const rIC = window.requestIdleCallback || setTimeout;
      rIC(waitForZendesk);
    }
  }, []);
  return createElement(Button, {
    icon: { icon: "help" },
    iconBefore: true,
    label: labels[language],
    onClick,
    id: "zendesk-button",
    size: "small",
    variant: "solid",
  });
};
