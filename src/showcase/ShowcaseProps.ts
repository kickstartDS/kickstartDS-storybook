/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run `yarn run schema` to regenerate this file.
 */

/**
 * Link to the showcase / example / demo project
 */
export type LinkToShowcase = string;
/**
 * Title that should be shown for this appearance
 */
export type TitleForTheShowcase = string;
/**
 * Description of the type and content of the appearance
 */
export type DescriptionOfTheAppearance = string;
/**
 * Url to main image for this showcase entry
 */
export type Url = string;
/**
 * Title of the showcase cover
 */
export type Caption = string;
/**
 * Select a media asset for this showcase entry
 */
export type UrlForTheMediaAsset = string;
/**
 * Title of the showcase image
 */
export type CaptionForTheImage = string;
/**
 * Media assets to display for this showcase entry
 */
export type Media = MediaAsset[];
/**
 * Name of the tag
 */
export type Tag = string;
/**
 * Tags for this showcase entry
 */
export type Tags = Tag[];
/**
 * Title of the related showcase
 */
export type Title = string;
/**
 * Excerpt for the related showcase
 */
export type Excerpt = string;
/**
 * Url for the related showcase
 */
export type Url1 = string;
/**
 * Image for the related showcase
 */
export type Image = string;
/**
 * Entries related to this showcase entry
 */
export type RelatedEntries = RelatedEntry[];

/**
 * Display one showcase entry with all its details
 */
export interface ShowcaseProps {
  link: LinkToShowcase;
  title: TitleForTheShowcase;
  description: DescriptionOfTheAppearance;
  cover: CoverImage;
  media?: Media;
  tags?: Tags;
  related?: RelatedEntries;
  [k: string]: unknown;
}
/**
 * Add main image to represent this showcase entry
 */
export interface CoverImage {
  src?: Url;
  caption?: Caption;
  [k: string]: unknown;
}
/**
 * Single media asset
 */
export interface MediaAsset {
  src?: UrlForTheMediaAsset;
  caption?: CaptionForTheImage;
  [k: string]: unknown;
}
/**
 * Single related entry
 */
export interface RelatedEntry {
  title: Title;
  excerpt?: Excerpt;
  url: Url1;
  image?: Image;
  [k: string]: unknown;
}