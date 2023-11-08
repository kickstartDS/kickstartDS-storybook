/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Title of the Source
 */
export type Title = string;
/**
 * URL of the referenced page
 */
export type URL = string;
/**
 * Link to the source component
 */
export type Link = string;

/**
 * Display one showcase entry with all its details
 */
export interface SourceSnippetProps {
  title: Title;
  url: URL;
  link: Link;
  [k: string]: unknown;
}
