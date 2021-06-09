import { actions } from '@storybook/addon-actions';
// @see https://github.com/aFarkas/lazysizes/tree/gh-pages/plugins/attrchange
import 'lazysizes/plugins/attrchange/ls.attrchange';
import { unpackDecorator } from '@kickstartds/core/lib/storybook/helpers';

import '@kickstartds/core/lib/design-tokens/tokens.css';
import '@kickstartds/base/lib/global/base.js';
import '@kickstartds/base/lib/global/base.css';
import '../static/index.css';

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
}

export const decorators = [unpackDecorator];
