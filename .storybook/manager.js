import React from "react";
import { render } from "react-dom";
import { addons } from "@storybook/addons";
import { light } from "./themes";
import { IconSprite } from '../src/icon-sprite/IconSpriteComponent';
import { ZendeskButton } from "../src/zendesk/ZendeskButtonComponent";

addons.setConfig({ theme: light });

const zendeskWrapper = document.createElement("div");
document.body.appendChild(zendeskWrapper);
render(<><IconSprite /><ZendeskButton /></>, zendeskWrapper);
