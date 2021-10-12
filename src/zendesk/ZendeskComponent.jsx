import { useEffect, useRef, createContext } from "react";
import { inBrowser } from "@kickstartds/core/lib/core";
import { waitForZendesk, storageKey } from "./zELoader";

export const ZendeskContext = createContext();

export const ZendeskProvider = (props) => {
  const timeoutRef = useRef();
  const zEWrapper = (...args) => {
    clearTimeout(timeoutRef.current);
    waitForZendesk().then((zE) => zE(...args));
  };

  useEffect(() => {
    if (inBrowser) {
      if (!window.zE) {
        if (sessionStorage.getItem(storageKey)) {
          waitForZendesk();
        } else {
          timeoutRef.current = setTimeout(waitForZendesk, 10000);
        }
      }
    }
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);
  return <ZendeskContext.Provider {...props} value={zEWrapper} />;
};
