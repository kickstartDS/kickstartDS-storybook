/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run `yarn run schema` to regenerate this file.
 */

export type ButtonHighlightedStyle = boolean;
export type ButtonDekoStyle = boolean;
/**
 * Text used on button
 */
export type Label = string;
/**
 * Choose one of the styles from the list
 */
export type ButtonStyle = "solid" | "clear" | "outline";
export type Inverted = boolean;
/**
 * Choose a size between small, medium and large
 */
export type ButtonSize = "small" | "medium" | "large";
/**
 * Link used for button
 */
export type ButtonHref = string;
export type IconIdentifier = string;
export type AriaRole = string;
export type AdditionalClass = string;
/**
 * Optional custom component identifier
 */
export type KsComponentAttribute = string;
export type IconIdentifier1 = string;
export type AriaRole1 = string;
export type AdditionalClass1 = string;
/**
 * Optional custom component identifier
 */
export type KsComponentAttribute1 = string;
/**
 * Add fill animation on hover
 */
export type FillAnimation = boolean;
/**
 * Add icon animation on hover
 */
export type IconAnimation = boolean;
/**
 * Select the type attribute for the button
 */
export type TypeAttribute = "button" | "submit" | "reset";
/**
 * Define a value attribute for the button
 */
export type ValueAttribute = string;
/**
 * Define a name attribute for the button
 */
export type NameAttribute = string;
/**
 * Set the disabled attribute for the button
 */
export type DisabledAttribute = boolean;
/**
 * Open link in new Tab
 */
export type OpenLinkInNewTab = boolean;
/**
 * Add additional css classes that should be applied to the button
 */
export type AdditionalClasses = string;
/**
 * Optional custom component identifier
 */
export type KsComponentAttribute2 = string;
/**
 * Select the headline level to use, or p alternatively
 */
export type Level = "h1" | "h2" | "h3" | "h4" | "h5" | "p";
/**
 * Select the headline style to use
 */
export type Style = "none" | "h1" | "h2" | "h3" | "h4" | "h5" | "p";
/**
 * Add additional spacing to the bottom of the headline
 */
export type BottomSpacing = "minimum" | "small" | "large";
/**
 * Text content for the headline
 */
export type Text = string;
/**
 * Choose an alignment for the headline
 */
export type Alignment = "left" | "center" | "right";
/**
 * Text content for the optional subheadline
 */
export type Subheadline = string;
/**
 * Add additional css classes that should be applied to the headline
 */
export type AdditionalClasses1 = string;
/**
 * Optional custom component identifier
 */
export type KsComponentAttribute3 = string;
/**
 * Text content to display inside the element
 */
export type Text1 = string;
/**
 * Switch text alignment between left and center
 */
export type TextAlignment = "left" | "center";
/**
 * Overwrite the color to use for the text content
 */
export type TextColor = string;
/**
 * Select a vertical alignment for the box
 */
export type BoxVerticalAlignment = "center" | "top" | "bottom";
/**
 * Select a horizontal alignment for the box
 */
export type BoxHorizontalAlignment = "center" | "left" | "right";
/**
 * Text used on button
 */
export type Label1 = string;
/**
 * Choose one of the styles from the list
 */
export type ButtonStyle1 = "solid" | "clear" | "outline";
export type Inverted1 = boolean;
/**
 * Choose a size between small, medium and large
 */
export type ButtonSize1 = "small" | "medium" | "large";
/**
 * Link used for button
 */
export type ButtonHref1 = string;
export type IconIdentifier2 = string;
export type AriaRole2 = string;
export type AdditionalClass2 = string;
/**
 * Optional custom component identifier
 */
export type KsComponentAttribute4 = string;
export type IconIdentifier3 = string;
export type AriaRole3 = string;
export type AdditionalClass3 = string;
/**
 * Optional custom component identifier
 */
export type KsComponentAttribute5 = string;
/**
 * Add fill animation on hover
 */
export type FillAnimation1 = boolean;
/**
 * Add icon animation on hover
 */
export type IconAnimation1 = boolean;
/**
 * Select the type attribute for the button
 */
export type TypeAttribute1 = "button" | "submit" | "reset";
/**
 * Define a value attribute for the button
 */
export type ValueAttribute1 = string;
/**
 * Define a name attribute for the button
 */
export type NameAttribute1 = string;
/**
 * Set the disabled attribute for the button
 */
export type DisabledAttribute1 = boolean;
/**
 * Open link in new Tab
 */
export type OpenLinkInNewTab1 = boolean;
/**
 * Add additional css classes that should be applied to the button
 */
export type AdditionalClasses2 = string;
/**
 * Optional custom component identifier
 */
export type KsComponentAttribute6 = string;
/**
 * Background image for the whole element
 */
export type BackgroundImage = string;
/**
 * Background color for the whole element
 */
export type BackgroundColor = string;
/**
 * Display a full sized version of the image
 */
export type FullSizeImage = boolean;
/**
 * Image source to use
 */
export type ImageSource = string;
/**
 * Select an aspect ratio to use for cropping and displaying the image
 */
export type ImageAspectRatio = "4:3" | "3:2" | "16:9" | "1:1" | "none";
/**
 * Select a vertical alignment for the image
 */
export type ImageVerticalAlignment = "center" | "top" | "top-edge" | "bottom" | "bottom-edge";
/**
 * Select a horizontal alignment for the image
 */
export type ImageHorizontalAlignment = "center" | "left" | "left-edge" | "right" | "right-edge";
/**
 * Switch to displaying the image after the text on mobile
 */
export type MobileImageAfterText = boolean;
/**
 * Switch to displaying the image after the text on desktop
 */
export type DesktopImageAfterText = boolean;
/**
 * Image description
 */
export type AltText = string;
/**
 * Additional css classes attached to the wrapping element
 */
export type Class = string;
export type Inverted2 = boolean;
/**
 * Optional custom component identifier
 */
export type KsComponentAttribute7 = string;

/**
 * Component to present rich combinations of text and media, best used sequentially
 */
export interface StorytellingProps {
  box: TextBox;
  backgroundImage?: BackgroundImage;
  backgroundColor?: BackgroundColor;
  full?: FullSizeImage;
  image?: Image;
  className?: Class;
  inverted?: Inverted2;
  component?: KsComponentAttribute7;
}
/**
 * Text content to display
 */
export interface TextBox {
  links?: Button[];
  headline?: Headline;
  text?: Text1;
  textAlign?: TextAlignment;
  textColor?: TextColor;
  vAlign?: BoxVerticalAlignment;
  hAlign?: BoxHorizontalAlignment;
  link?: Button1;
}
/**
 * Component to display links and call-to-actions
 */
export interface Button {
  highlighted?: ButtonHighlightedStyle;
  deko?: ButtonDekoStyle;
  label?: Label;
  variant?: ButtonStyle;
  inverted?: Inverted;
  size?: ButtonSize;
  href?: ButtonHref;
  iconBefore?: IconBeforeButton;
  iconAfter?: IconAfterButton;
  fillAnimation?: FillAnimation;
  iconAnimation?: IconAnimation;
  type?: TypeAttribute;
  value?: ValueAttribute;
  name?: NameAttribute;
  disabled?: DisabledAttribute;
  newTab?: OpenLinkInNewTab;
  className?: AdditionalClasses;
  component?: KsComponentAttribute2;
}
/**
 * Icon identifier for icon before the button text
 */
export interface IconBeforeButton {
  icon: IconIdentifier;
  role?: AriaRole;
  className?: AdditionalClass;
  component?: KsComponentAttribute;
}
/**
 * Icon identifier for icon after the button text
 */
export interface IconAfterButton {
  icon: IconIdentifier1;
  role?: AriaRole1;
  className?: AdditionalClass1;
  component?: KsComponentAttribute1;
}
/**
 * Headline for the box
 */
export interface Headline {
  level?: Level;
  styleAs?: Style;
  spaceAfter?: BottomSpacing;
  content: Text;
  align?: Alignment;
  subheadline?: Subheadline;
  className?: AdditionalClasses1;
  component?: KsComponentAttribute3;
}
/**
 * Component to display links and call-to-actions
 */
export interface Button1 {
  label?: Label1;
  variant?: ButtonStyle1;
  inverted?: Inverted1;
  size?: ButtonSize1;
  href?: ButtonHref1;
  iconBefore?: IconBeforeButton1;
  iconAfter?: IconAfterButton1;
  fillAnimation?: FillAnimation1;
  iconAnimation?: IconAnimation1;
  type?: TypeAttribute1;
  value?: ValueAttribute1;
  name?: NameAttribute1;
  disabled?: DisabledAttribute1;
  newTab?: OpenLinkInNewTab1;
  className?: AdditionalClasses2;
  component?: KsComponentAttribute6;
}
/**
 * Icon identifier for icon before the button text
 */
export interface IconBeforeButton1 {
  icon: IconIdentifier2;
  role?: AriaRole2;
  className?: AdditionalClass2;
  component?: KsComponentAttribute4;
}
/**
 * Icon identifier for icon after the button text
 */
export interface IconAfterButton1 {
  icon: IconIdentifier3;
  role?: AriaRole3;
  className?: AdditionalClass3;
  component?: KsComponentAttribute5;
}
/**
 * Image displayed alongside the text content
 */
export interface Image {
  source?: ImageSource;
  ratio?: ImageAspectRatio;
  vAlign?: ImageVerticalAlignment;
  hAlign?: ImageHorizontalAlignment;
  order?: Order;
  alt?: AltText;
}
/**
 * Choose what comes first on mobile and desktop: image or text
 */
export interface Order {
  mobileImageLast?: MobileImageAfterText;
  desktopImageLast?: DesktopImageAfterText;
}
