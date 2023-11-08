import {
  ForwardRefExoticComponent,
  RefAttributes,
  FunctionComponent,
  forwardRef,
  HTMLAttributes,
  ElementType,
  PropsWithChildren,
} from "react";
import classnames from "classnames";
import { Icon } from "@kickstartds/base/lib/icon";
import { Link } from "@kickstartds/base/lib/link";
import { ButtonProps } from "./ButtonProps";
import {
  ButtonContext,
  Button as KdsButton,
} from "@kickstartds/base/lib/button";

const ButtonComponent: ForwardRefExoticComponent<
  RefAttributes<HTMLButtonElement | HTMLAnchorElement> &
    ButtonProps &
    HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>
> = forwardRef(
  (
    {
      label,
      type = "button",
      variant = "solid",
      inverted,
      size,
      href,
      newTab,
      className,
      fillAnimation,
      iconAnimation,
      component,
      iconBefore,
      iconAfter,
      disabled,
      highlighted,
      deko,
      ...props
    },
    ref
  ) => {
    const isLink = !!href;
    const Tag = isLink ? Link : ("button" as ElementType);

    return (
      <span
        className={classnames(
          "c-button--wrapper",
          deko && "c-button--deko-wrapper",
          className
        )}
      >
        {deko && (
          <div className="c-button__deko-left">
            <div className="c-button__deko"></div>
          </div>
        )}
        <Tag
          type={isLink ? undefined : type}
          href={isLink ? href : undefined}
          className={classnames(
            "c-button",
            `c-button--${variant}`,
            highlighted && "c-button--highlighted",
            {
              "c-button--small": size === "small",
              "c-button--large": size === "large",
              "c-button--fill-animation": fillAnimation,
              "c-button--icon-animation": iconAnimation,
              "c-button--disabled": isLink && disabled,
            }
          )}
          ks-inverted={inverted?.toString()}
          ks-component={component}
          {...(isLink && newTab ? { target: "_blank", rel: "noopener" } : {})}
          disabled={isLink ? undefined : disabled}
          ref={ref}
          {...props}
        >
          <span className="c-button__content">
            {label ? (
              <>
                {iconBefore?.icon && <Icon {...iconBefore} />}
                <span>{label}</span>
                {iconAfter?.icon && <Icon {...iconAfter} />}
              </>
            ) : iconBefore?.icon ? (
              <Icon {...iconBefore} />
            ) : (
              ""
            )}
            <span className="c-button__border" />
          </span>
        </Tag>
        {deko && (
          <div className="c-button__deko-right">
            <div className="c-button__deko"></div>
          </div>
        )}
      </span>
    );
  }
);

export const ButtonProvider: FunctionComponent<PropsWithChildren<any>> = (
  props
) => <ButtonContext.Provider value={ButtonComponent} {...props} />;
export const Button = KdsButton as typeof ButtonComponent;
