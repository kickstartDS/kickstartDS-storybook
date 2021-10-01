import { create, themes } from '@storybook/theming';

export const light = create({
  base: 'light',

  colorPrimary: themes.light.colorPrimary,
  colorSecondary: '#06566a',

  // UI
  appBg: '#eceff3',
  appContentBg: themes.light.appContentBg,
  appBorderColor: themes.light.appBorderColor,
  appBorderRadius: themes.light.appBorderRadius,

  // Typography
  fontBase: '"Helvetica Neue","Helvetica","Arial",sans-serif',
  fontCode: themes.light.fontCode,

  // Text colors
  textColor: '#444f52',
  textInverseColor: themes.light.textInverseColor,

  // Toolbar default and active colors
  barTextColor: '#74b2c1',
  barSelectedColor: '#06566a',
  barBg: themes.light.barBg,

  // Form colors
  inputBg: themes.light.inputBg,
  inputBorder: themes.light.inputBorder,
  inputTextColor: themes.light.inputTextColor,
  inputBorderRadius: themes.light.inputBorderRadius,

  brandTitle: 'kickstartDS Storybook',
  brandUrl: 'https://www.kickstartds.com',
  brandImage: '/logo.svg',
});
