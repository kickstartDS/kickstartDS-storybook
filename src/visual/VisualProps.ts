/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Height = "small" | "default" | "fullImage" | "fullScreen";
/**
 * Choose a media type between image, video and none
 */
export type MediaType = "image" | "video" | "none";
/**
 * Background image source for small screens
 */
export type MobileImageSource = string;
/**
 * Background image source for medium screens
 */
export type TabletImageSource = string;
/**
 * Background image source for large screens
 */
export type DesktopImageSource = string;
/**
 * Override for img tag of picture element, if needed
 */
export type OptionalSource = string;
/**
 * Choose to indent the image horizontally on small screens
 */
export type ImageIndent = "none" | "left" | "right";
/**
 * Alt text to display for picture
 */
export type AltText = string;
/**
 * Background video source for small screens
 */
export type MobileVideoSource = string;
/**
 * Background video source for medium screens
 */
export type TabletVideoSource = string;
/**
 * Background video source for large screens
 */
export type DesktopVideoSource = string;
/**
 * Enable grid layer
 */
export type GridLayer = boolean;
/**
 * Toggles visibility of the box
 */
export type DisplayBox = boolean;
/**
 * Select the headline level to use, or p alternatively
 */
export type Level = "h1" | "h2" | "h3" | "h4" | "h5" | "p";
/**
 * Select the headline style to use
 */
export type Style = "none" | "h1" | "h2" | "h3" | "h4" | "h5" | "p";
/**
 * Choose an alignment for the headline
 */
export type Alignment = "left" | "center" | "right";
/**
 * Text content for the headline
 */
export type Text = string;
/**
 * Text content for the optional subheadline
 */
export type Subheadline = string;
/**
 * Add additional spacing to the bottom of the headline
 */
export type BottomSpacing = "minimum" | "small" | "large";
/**
 * Add additional css classes that should be applied to the headline
 */
export type AdditionalClasses = string;
/**
 * Optional custom component identifier
 */
export type KsComponentAttribute = string;
/**
 * Text box copy text
 */
export type Text1 = string;
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
export type KsComponentAttribute1 = string;
export type IconIdentifier1 = string;
export type AriaRole1 = string;
export type AdditionalClass1 = string;
/**
 * Optional custom component identifier
 */
export type KsComponentAttribute2 = string;
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
export type AdditionalClasses1 = string;
/**
 * Optional custom component identifier
 */
export type KsComponentAttribute3 = string;
export type ButtonHighlightedStyle = boolean;
export type ButtonDekoStyle = boolean;
/**
 * Toggles visibility of the link
 */
export type DisplayLink = boolean;
/**
 * The text box is aligned inside the content grid
 */
export type Indent = boolean;
/**
 * Horizontal orientation of the box inside the keyvisual
 */
export type HorizontalOrientation = "left" | "center" | "right";
/**
 * Vertical orientation of the box inside the keyvisual
 */
export type VerticalOrientation = "top" | "center" | "bottom";
/**
 * Choose a style for the box
 */
export type StyleOfTheBox = "solid" | "transparent";
export type Inverted1 = boolean;
/**
 * Choose one of the styles from the list
 */
export type ButtonStyle1 = "solid" | "clear" | "outline";
export type Inverted2 = boolean;
/**
 * Text used on button
 */
export type Label1 = string;
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
export type ButtonHighlightedStyle1 = boolean;
export type ButtonDekoStyle1 = boolean;
/**
 * Custom css background color
 */
export type CustomBackgroundColor = string;
/**
 * The text box is in front of the image on small screens
 */
export type Inbox = boolean;
/**
 * Show skip button
 */
export type SkipButton = boolean;
export type AdditionalClasses3 = string;
/**
 * Optional custom component identifier
 */
export type KsComponentAttribute7 = string;

export interface VisualProps {
  height?: Height;
  media?: MediaWrapper;
  overlay?: GridLayer;
  box?: TextBox;
  backgroundColor?: CustomBackgroundColor;
  inbox?: Inbox;
  skipButton?: SkipButton;
  className?: AdditionalClasses3;
  component?: KsComponentAttribute7;
  [k: string]: unknown;
}
/**
 * Wrapper for all media types
 */
export interface MediaWrapper {
  mode?: MediaType;
  image?: BackgroundImage;
  video?: BackgroundVideo;
}
/**
 * Sources of background images for different screen sizes
 */
export interface BackgroundImage {
  srcMobile: MobileImageSource;
  srcTablet?: TabletImageSource;
  srcDesktop?: DesktopImageSource;
  src?: OptionalSource;
  indent?: ImageIndent;
  alt?: AltText;
}
/**
 * Sources of background videos for different screen sizes
 */
export interface BackgroundVideo {
  srcMobile: MobileVideoSource;
  srcTablet?: TabletVideoSource;
  srcDesktop?: DesktopVideoSource;
}
/**
 * Content and style configuration for the text box
 */
export interface TextBox {
  enabled?: DisplayBox;
  headline?: Headline;
  text?: Text1;
  link?: Button;
  indent?: Indent;
  horizontal?: HorizontalOrientation;
  vertical?: VerticalOrientation;
  background?: StyleOfTheBox;
  inverted?: Inverted1;
  links?: Button1[];
}
/**
 * Headline for the box
 */
export interface Headline {
  /**
   * Show subheadline first
   */
  switchOrder?: boolean;
  level?: Level;
  styleAs?: Style;
  align?: Alignment;
  content?: Text;
  subheadline?: Subheadline;
  spaceAfter?: BottomSpacing;
  className?: AdditionalClasses;
  component?: KsComponentAttribute;
  [k: string]: unknown;
}
export interface Button {
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
  className?: AdditionalClasses1;
  component?: KsComponentAttribute3;
  highlighted?: ButtonHighlightedStyle;
  deko?: ButtonDekoStyle;
  enabled?: DisplayLink;
  [k: string]: unknown;
}
/**
 * Icon identifier for icon before the button text
 */
export interface IconBeforeButton {
  icon: IconIdentifier;
  role?: AriaRole;
  className?: AdditionalClass;
  component?: KsComponentAttribute1;
}
/**
 * Icon identifier for icon after the button text
 */
export interface IconAfterButton {
  icon: IconIdentifier1;
  role?: AriaRole1;
  className?: AdditionalClass1;
  component?: KsComponentAttribute2;
}
export interface Button1 {
  variant?: ButtonStyle1;
  inverted?: Inverted2;
  label?: Label1;
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
  highlighted?: ButtonHighlightedStyle1;
  deko?: ButtonDekoStyle1;
  [k: string]: unknown;
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
