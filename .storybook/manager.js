import { addons } from "@storybook/addons";
import { light } from "./themes";
import { waitForZendesk, storageKey } from "../src/zendesk/zELoader";

addons.setConfig({ theme: light });

if (!window.zE) {
  if (sessionStorage.getItem(storageKey)) {
    waitForZendesk();
  } else {
    setTimeout(waitForZendesk, 10000);
  }
}
