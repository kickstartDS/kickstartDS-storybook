import {
  ForwardRefRenderFunction,
  ButtonHTMLAttributes,
  forwardRef,
  createElement,
  createContext,
  useContext,
} from "react";
import classnames from "classnames";
import { Icon } from "@kickstartds/base/lib/icon";
import { ButtonProps } from "./ButtonProps";
import { ButtonContext } from "@kickstartds/base/lib/button";

const ButtonComponent: ForwardRefRenderFunction<
  HTMLButtonElement,
  ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
> = (
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
    ...props
  },
  ref
) => (
  <button
    type={type}
    className={classnames(
      "c-button",
      `c-button--${variant}`,
      {
        "c-button--small": size === "small",
        "c-button--large": size === "large",
        "c-button--fill-animation": fillAnimation,
        "c-button--icon-animation": iconAnimation,
      },
      className
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
);

const Button = forwardRef(ButtonComponent);

export const ButtonProvider = (props) => (
  <ButtonContext.Provider value={Button} {...props} />
);
