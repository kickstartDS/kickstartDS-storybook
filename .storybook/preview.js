import { actions } from '@storybook/addon-actions';
// @see https://github.com/aFarkas/lazysizes/tree/gh-pages/plugins/attrchange
import 'lazysizes/plugins/attrchange/ls.attrchange';
import { unpackDecorator } from '@kickstartds/core/lib/storybook/helpers';

import '@kickstartds/base/lib/global/base.js';
import '@kickstartds/base/lib/global/base.css';
import '../src/index.js';
import '../static/index.css';
import { HeadlineProvider } from '../src/headline/HeadlineComponent';
import { SectionProvider } from '../src/section/SectionComponent';
import { IconSprite } from '../src/icon-sprite/IconSpriteComponent';

const tokenContext = require.context("!!raw-loader!../src/design-tokens", false, /design-tokens\.css$/);
const tokenFiles = tokenContext
  .keys()
  .map((filename) => ({
    filename,
    content: tokenContext(filename).default
  }));

const myActions = actions('radio');
window.rm.radio.on('*', myActions.radio);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  html: {
    prettier: {
      tabWidth: 4,
    },
  },
  designToken: {
    files: tokenFiles,
  },
}

export const decorators = [
  unpackDecorator,
  (Story) => (
    <>
    <IconSprite />
    <HeadlineProvider>
      <SectionProvider>
        <Story />
      </SectionProvider>
    </HeadlineProvider>
    </>
  ),
];
