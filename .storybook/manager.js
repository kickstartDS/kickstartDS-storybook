import React from "react";
import { render } from "react-dom";
import { addons } from "@storybook/addons";
import { light } from "./themes";
import { zESettings } from "../src/zendesk/zESettings";
import { IconSprite } from '../src/icon-sprite/IconSpriteComponent';
import { ZendeskButton } from "../src/zendesk/ZendeskButtonComponent";

addons.setConfig({ theme: light });

window.zESettings = zESettings;
const zendeskWrapper = document.createElement("div");
document.body.appendChild(zendeskWrapper);
render(<><IconSprite /><ZendeskButton /></>, zendeskWrapper);
