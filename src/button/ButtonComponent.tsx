import {
  ForwardRefExoticComponent,
  RefAttributes,
  ButtonHTMLAttributes,
  FunctionComponent,
  forwardRef,
  ElementType,
} from "react";
import classnames from "classnames";
import { renderFn, defaultRenderFn } from "@kickstartds/core/lib/core";
import { Icon } from "@kickstartds/base/lib/icon";
import { Link } from "@kickstartds/base/lib/link";
import { ButtonProps } from "./ButtonProps";
import {
  ButtonContext,
  Button as KdsButton,
} from "@kickstartds/base/lib/button";

interface RenderFunctions {
  renderLabel?: renderFn;
}

const ButtonComponent: ForwardRefExoticComponent<
  RefAttributes<HTMLButtonElement | HTMLAnchorElement> &
    ButtonProps &
    RenderFunctions &
    ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement>
> = forwardRef(
  (
    {
      label,
      href,
      type = "button",
      variant = "solid",
      inverted,
      size,
      className,
      fillAnimation,
      iconAnimation,
      dataComponent,
      newTab,
      icon,
      iconBefore,
      iconAfter,
      highlighted,
      deko,
      renderLabel = defaultRenderFn,
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
            <div className="c-button__deko" />
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
            }
          )}
          data-component={dataComponent}
          {...(isLink && newTab ? { target: "_blank", rel: "noopener" } : {})}
          ks-inverted={inverted?.toString()}
          ref={ref}
          {...props}
        >
          <span className="c-button__content">
            {label ? (
              <>
                {icon && iconBefore && <Icon {...icon} />}
                <span>{label}</span>
                {icon && iconAfter && <Icon {...icon} />}
              </>
            ) : icon ? (
              <Icon {...icon} />
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

export const ButtonProvider: FunctionComponent<unknown> = (props) => (
  <ButtonContext.Provider value={ButtonComponent} {...props} />
);
export const Button = KdsButton as typeof ButtonComponent;
