/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run `yarn run schema` to regenerate this file.
 */

/**
 * Title of the term being defined
 */
export type Term = string;
/**
 * Select an image to display inside the content box, at the top
 */
export type Definition = string;
/**
 * Url to main image for this glossary entry
 */
export type UrlForTheMainImage = string;
/**
 * Title of the term being defined
 */
export type CaptionForTheMainImage = string;
/**
 * Select a media asset for this glossary entry
 */
export type UrlForTheMediaAsset = string;
/**
 * Title of the term being defined
 */
export type CaptionForTheMainImage1 = string;
/**
 * Media assets to display for this glossary entry
 */
export type Media = MediaAsset[];
/**
 * Name of the tag
 */
export type Tag = string;
/**
 * Tags for this glossary entry
 */
export type Tags = Tag[];
/**
 * Title of the related term
 */
export type Title = string;
/**
 * Excerpt for the related term
 */
export type Excerpt = string;
/**
 * Url for the related term
 */
export type Url = string;
/**
 * Image for the related term
 */
export type Image = string;
/**
 * Entries related to this glossary entry
 */
export type RelatedEntries = RelatedEntry[];
/**
 * Link to the related StacKShare discussion
 */
export type StackShareUrl = string;
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
export type BottomSpacing = "none" | "small" | "large";
/**
 * Set the headline as a page header, triggering special css treatment
 */
export type PageHeader = boolean;
/**
 * Add additional css classes that should be applied to the headline
 */
export type AdditionalClasses = string;
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
export type Label = string;
/**
 * Choose one of the styles from the list
 */
export type ButtonStyle = "solid" | "solid-inverted" | "clear" | "clear-inverted" | "outline" | "outline-inverted";
/**
 * Choose a size between small, medium and large
 */
export type ButtonSize = "small" | "medium" | "large";
/**
 * Add additional css classes that should be applied to the button
 */
export type AdditionalClasses1 = string;
export type IconIdentifier = string;
export type AriaRole = string;
export type AdditionalClass = string;
/**
 * Display icon before the button text
 */
export type IconBeforeButton = boolean;
/**
 * Display icon after the button text
 */
export type IconAfterButton = boolean;
/**
 * Overwrite the data-component to use for rendering
 */
export type DataComponentAttribute = string;
/**
 * Add fill animation on hover
 */
export type FillAnimation = boolean;
/**
 * Add icon animation on hover
 */
export type IconAnimation = boolean;
/**
 * Link used for button
 */
export type ButtonHref = string;
/**
 * Open link in new Tab
 */
export type OpenLinkInNewTab = boolean;
/**
 * Additional css classes attached to the wrapping element
 */
export type Class = string;

export interface GlossaryProps {
  term: Term;
  definition?: Definition;
  cover?: CoverImage;
  media?: Media;
  tags?: Tags;
  related?: RelatedEntries;
  stackshare?: StackShareUrl;
  cta?: Storytelling;
  [k: string]: unknown;
}
/**
 * Add main image to represent this glossary entry
 */
export interface CoverImage {
  src?: UrlForTheMainImage;
  caption?: CaptionForTheMainImage;
  [k: string]: unknown;
}
/**
 * Single media asset
 */
export interface MediaAsset {
  src?: UrlForTheMediaAsset;
  caption?: CaptionForTheMainImage1;
  [k: string]: unknown;
}
/**
 * Single related entry
 */
export interface RelatedEntry {
  title?: Title;
  excerpt?: Excerpt;
  url?: Url;
  image?: Image;
  [k: string]: unknown;
}
/**
 * Component to present rich combinations of text and media, best used sequentially
 */
export interface Storytelling {
  backgroundImage?: BackgroundImage;
  backgroundColor?: BackgroundColor;
  full?: FullSizeImage;
  image: Image1;
  box: TextBox;
  className?: Class;
  [k: string]: unknown;
}
/**
 * Image displayed alongside the text content
 */
export interface Image1 {
  source?: ImageSource;
  ratio?: ImageAspectRatio;
  vAlign?: ImageVerticalAlignment;
  hAlign?: ImageHorizontalAlignment;
  order?: Order;
  [k: string]: unknown;
}
/**
 * Choose what comes first on mobile and desktop: image or text
 */
export interface Order {
  mobileImageLast?: MobileImageAfterText;
  desktopImageLast?: DesktopImageAfterText;
  [k: string]: unknown;
}
/**
 * Text content to display
 */
export interface TextBox {
  headline?: Headline;
  text?: Text1;
  textAlign?: TextAlignment;
  textColor?: TextColor;
  vAlign?: BoxVerticalAlignment;
  hAlign?: BoxHorizontalAlignment;
  link?: LinkButton;
  [k: string]: unknown;
}
/**
 * Headline for the box
 */
export interface Headline {
  level: Level;
  styleAs?: Style;
  align: Alignment;
  content?: Text;
  subheadline?: Subheadline;
  spaceAfter: BottomSpacing;
  pageHeader?: PageHeader;
  className?: AdditionalClasses;
  [k: string]: unknown;
}
/**
 * link-button
 */
export interface LinkButton {
  label: Label;
  variant: ButtonStyle;
  size: ButtonSize;
  className?: AdditionalClasses1;
  icon?: Icon;
  iconBefore?: IconBeforeButton;
  iconAfter?: IconAfterButton;
  dataComponent?: DataComponentAttribute;
  fillAnimation?: FillAnimation;
  iconAnimation?: IconAnimation;
  href: ButtonHref;
  newTab?: OpenLinkInNewTab;
}
/**
 * Icon
 */
export interface Icon {
  icon?: IconIdentifier;
  role?: AriaRole;
  className?: AdditionalClass;
  [k: string]: unknown;
}
