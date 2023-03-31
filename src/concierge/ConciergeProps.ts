/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run `yarn run schema` to regenerate this file.
 */

/**
 * Placeholder to use for question prompt
 */
export type QuestionPlaceholder = string;
export type AnswerToThePromptedQuestion = string;
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
export type Relevance = number;
export type Sections = {
  excerpt: Excerpt;
  relevance: Relevance;
  [k: string]: unknown;
}[];
/**
 * Pages referenced for the given answer
 */
export type Pages = Source[];
/**
 * Title of the domain
 */
export type Title1 = string;
/**
 * Link to the domain
 */
export type Link = string;
/**
 * Domains that are indexed in our knowledge base
 */
export type DomainIndex = Domain[];
/**
 * Currently idle
 */
export type Idle = string;
/**
 * Currently loading
 */
export type Loading = string;
/**
 * Currently responding
 */
export type Responding = string;
/**
 * There was an error
 */
export type Errored = string;
/**
 * Concierge can't help with prompt
 */
export type CanTHelp = string;
/**
 * Code for the current status
 */
export type Code = "idle" | "loading" | "responding" | "error" | "canthelp";
/**
 * Single question that can be asked to the concierge
 */
export type Question = string;
/**
 * Questions that can be asked to the concierge
 */
export type DemoQuestions = Question[];

/**
 * Your helpful Design System Concierge
 */
export interface ConciergeProps {
  placeholder: QuestionPlaceholder;
  answer?: AnswerToThePromptedQuestion;
  sources?: Pages;
  index?: DomainIndex;
  status: Status;
  questions?: DemoQuestions;
  [k: string]: unknown;
}
/**
 * Display one showcase entry with all its details
 */
export interface Source {
  title: Title;
  id: ID;
  url: URL;
  thumbnail: Thumbnail;
  sections: Sections;
  [k: string]: unknown;
}
/**
 * Single domain which contents were scraped and indexed
 */
export interface Domain {
  title: Title1;
  url: Link;
  [k: string]: unknown;
}
/**
 * Current status
 */
export interface Status {
  idle: Idle;
  loading: Loading;
  responding: Responding;
  error: Errored;
  canthelp: CanTHelp;
  code: Code;
  [k: string]: unknown;
}
