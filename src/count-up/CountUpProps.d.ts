/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run `yarn run schema` to regenerate this file.
 */
/**
 * Final number to count to
 */
export declare type Number = number;
export declare type IconIdentifier = string;
export declare type AriaRole = string;
export declare type AdditionalClass = string;
/**
 * Topic for the count-up box. Displayed before the text, in bold
 */
export declare type Topic = string;
/**
 * Copy text for the element
 */
export declare type TextContent = string;
/**
 * Toggles visibility of the link
 */
export declare type DisplayLink = boolean;
/**
 * Text used on button
 */
export declare type Label = string;
/**
 * Choose one of the styles from the list
 */
export declare type ButtonStyle = "solid" | "solid-inverted" | "clear" | "clear-inverted" | "outline" | "outline-inverted";
/**
 * Choose a size between small, medium and large
 */
export declare type ButtonSize = "small" | "medium" | "large";
/**
 * Add additional css classes that should be applied to the button
 */
export declare type AdditionalClasses = string;
export declare type IconIdentifier1 = string;
export declare type AriaRole1 = string;
export declare type AdditionalClass1 = string;
/**
 * Display icon before the button text
 */
export declare type IconBeforeButton = boolean;
/**
 * Display icon after the button text
 */
export declare type IconAfterButton = boolean;
/**
 * Overwrite the data-component to use for rendering
 */
export declare type DataComponentAttribute = string;
/**
 * Add fill animation on hover
 */
export declare type FillAnimation = boolean;
/**
 * Add icon animation on hover
 */
export declare type IconAnimation = boolean;
/**
 * Link used for button
 */
export declare type ButtonHref = string;
/**
 * Open link in new Tab
 */
export declare type OpenLinkInNewTab = boolean;
/**
 * Additional css classes attached to the wrapping element
 */
export declare type Class = string;
/**
 * Component to to increase a number up to a final value
 */
export interface CountUpProps {
    to: Number;
    icon?: Icon;
    topic?: Topic;
    text?: TextContent;
    link?: Link;
    className?: Class;
    /**
     * See https://github.com/aFarkas/lazysizes/blob/gh-pages/README.md#data-expand-attribute
     */
    expand?: number;
    graphic?: "none" | "tokens" | "components" | "properties";
    [k: string]: unknown;
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
/**
 * link-button
 */
export interface Link {
    enabled?: DisplayLink;
    label: Label;
    variant: ButtonStyle;
    size: ButtonSize;
    className?: AdditionalClasses;
    icon?: Icon1;
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
export interface Icon1 {
    icon?: IconIdentifier1;
    role?: AriaRole1;
    className?: AdditionalClass1;
    [k: string]: unknown;
}