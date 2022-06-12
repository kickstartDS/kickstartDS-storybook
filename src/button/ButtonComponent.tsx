import {
  ForwardRefExoticComponent,
  RefAttributes,
  ButtonHTMLAttributes,
  FunctionComponent,
  forwardRef,
} from "react";
import classnames from "classnames";
import { Icon } from "@kickstartds/base/lib/icon";
import { ButtonProps } from "./ButtonProps";
import {
  ButtonContext,
  Button as KdsButton,
} from "@kickstartds/base/lib/button";

const ButtonComponent: ForwardRefExoticComponent<
  RefAttributes<HTMLButtonElement> &
    ButtonProps &
    ButtonHTMLAttributes<HTMLButtonElement>
> = forwardRef(
  (
    {
      label,
      type = "button",
      variant = "solid",
      size,
      className,
      fillAnimation,
      iconAnimation,
      dataComponent,
      icon,
      iconBefore,
      iconAfter,
      highlighted,
      deko,
      ...props
    },
    ref
  ) => (
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
      <button
        type={type}
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
      </button>
      {deko && (
        <div className="c-button__deko-right">
          <div className="c-button__deko"></div>
        </div>
      )}
    </span>
  )
);

export const ButtonProvider: FunctionComponent<unknown> = (props) => (
  <ButtonContext.Provider value={ButtonComponent} {...props} />
);
export const Button = KdsButton as typeof ButtonComponent;
