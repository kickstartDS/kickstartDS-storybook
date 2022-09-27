/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run `yarn run schema` to regenerate this file.
 */

/**
 * Headline for the section
 */
export type Headline = string;
/**
 * Label for the link
 */
export type Label = string;
/**
 * Link target for link
 */
export type LinkTarget = string;
/**
 * Links to display for the section
 */
export type Links = {
  label: Label;
  href: LinkTarget;
  [k: string]: unknown;
}[];
/**
 * Sections of the footer
 */
export type Sections = {
  headline: Headline;
  links?: Links;
  [k: string]: unknown;
}[];

/**
 * Footer to be used in website layouts
 */
export interface FooterProps {
  sections?: Sections;
  subscriptionForm?: {
    hiddenFields?: [string, string][];
    honeypot: string;
    headline?: string;
    subheadline?: string;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
