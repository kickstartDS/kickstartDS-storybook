/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run `yarn run schema` to regenerate this file.
 */

/**
 * Title of the source
 */
export type Title = string;
/**
 * HTML ID of the component
 */
export type ID = string;
/**
 * URL of the referenced page
 */
export type URL = string;
/**
 * Small image preview of the references site
 */
export type Thumbnail = string;
/**
 * Excerpt of the source text
 */
export type Excerpt = string;
/**
 * Percentile value that determines the relevance of the given section
 */
export type Relevance = string;
export type Sections = {
  excerpt: Excerpt;
  relevance: Relevance;
  [k: string]: unknown;
}[];

/**
 * Display one showcase entry with all its details
 */
export interface SourceProps {
  title?: Title;
  id?: ID;
  url?: URL;
  thumbnail?: Thumbnail;
  sections?: Sections;
  [k: string]: unknown;
}