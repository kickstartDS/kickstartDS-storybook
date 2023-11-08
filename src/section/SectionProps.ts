/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import type {ButtonProps} from "../button/ButtonProps";
import type {TagLabelProps} from "@kickstartds/base/lib/tag-label/typing";
import type {ContactProps} from "@kickstartds/base/lib/contact/typing";
import type {CollapsibleBoxProps} from "@kickstartds/base/lib/collapsible-box/typing";
import type {ContentBoxProps} from "@kickstartds/base/lib/content-box/typing";
import type {HeadlineProps} from "../headline/HeadlineProps";
import type {TextMediaProps} from "@kickstartds/base/lib/text-media/typing";
import type {TeaserBoxProps} from "@kickstartds/base/lib/teaser-box/typing";
import type {TeaserRowProps} from "@kickstartds/base/lib/teaser-row/typing";
import type {CountUpProps} from "../count-up/CountUpProps";
import type {LogoTilesProps} from "@kickstartds/content/lib/logo-tiles/typing";
import type {QuoteProps} from "@kickstartds/content/lib/quote/typing";
import type {QuotesSliderProps} from "@kickstartds/content/lib/quotes-slider/typing";
import type {RelatedProps} from "../related/RelatedProps";
import type {StorytellingProps} from "../storytelling/StorytellingProps";
import type {VisualSliderProps} from "@kickstartds/content/lib/visual-slider/typing";
import type {VisualProps} from "../visual/VisualProps";

/**
 * Width of section to use
 */
export type Width = "full" | "max" | "wide" | "default" | "narrow";
/**
 * Size of gutter to use
 */
export type Gutter = "large" | "default" | "small" | "none";
/**
 * Layout mode used for section contents
 */
export type Mode = "default" | "tile" | "list";
/**
 * Allowed content for the section
 */
export type Content = (
  | ButtonProps
  | TagLabelProps
  | ContactProps
  | CollapsibleBoxProps
  | ContentBoxProps
  | HeadlineProps
  | TextMediaProps
  | TeaserBoxProps
  | TeaserRowProps
  | CountUpProps
  | LogoTilesProps
  | QuoteProps
  | QuotesSliderProps
  | RelatedProps
  | StorytellingProps
  | VisualSliderProps
  | VisualProps
)[];
/**
 * Type of background
 */
export type Background = "default" | "accent" | "bold";
/**
 * Whether to invert the section
 */
export type Inverted = boolean;
/**
 * Amount of spacing before the section
 */
export type SpaceBefore = "default" | "small" | "none";
/**
 * Amount of spacing after the section
 */
export type SpaceAfter = "default" | "small" | "none";
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
 * Add additional css classes that should be applied to the section
 */
export type AdditionalClass = string;
/**
 * Optional custom component identifier
 */
export type KsComponentAttribute1 = string;

export interface SectionProps {
  width?: Width;
  gutter?: Gutter;
  mode?: Mode;
  content?: Content;
  background?: Background;
  inverted?: Inverted;
  spaceBefore?: SpaceBefore;
  spaceAfter?: SpaceAfter;
  headline?: Headline;
  className?: AdditionalClass;
  component?: KsComponentAttribute1;
  pattern?: "none" | "1" | "2" | "3" | "4" | "contact";
  variant?: "none" | "head" | "body" | "highlight" | "half";
  id?: string;
  [k: string]: unknown;
}
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
