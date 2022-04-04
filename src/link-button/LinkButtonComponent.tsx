import {
  ForwardRefRenderFunction,
  AnchorHTMLAttributes,
  forwardRef,
} from "react";
import classnames from "classnames";
import { renderFn, defaultRenderFn } from "@kickstartds/core/lib/core";
import { Icon } from "@kickstartds/base/lib/icon";
import { Link } from "@kickstartds/base/lib/link";
import { LinkButtonContext } from "@kickstartds/base/lib/link-button";
import { LinkButtonProps } from "./LinkButtonProps";

interface RenderFunctions {
  renderLabel?: renderFn;
}

const LinkButtonComponent: ForwardRefRenderFunction<
  HTMLAnchorElement,
  LinkButtonProps & RenderFunctions & AnchorHTMLAttributes<HTMLAnchorElement>
> = (
  {
    label,
    href,
    variant = "solid",
    size,
    className,
    fillAnimation,
    iconAnimation,
    dataComponent,
    newTab,
    icon,
    iconBefore,
    iconAfter,
    deko,
    highlighted,
    renderLabel = defaultRenderFn,
    ...props
  },
  ref
) => (
  <span
    className={classnames(
      "c-button--wrapper",
      deko && "c-button--deko-wrapper"
    )}
  >
    <Link
      href={href}
      className={classnames(
        "c-button",
        `c-button--${variant}`,
        highlighted && "c-button--highlighted",
        {
          "c-button--small": size === "small",
          "c-button--large": size === "large",
          "c-button--fill-animation": fillAnimation,
          "c-button--icon-animation": iconAnimation,
        },
        className
      )}
      data-component={dataComponent}
      {...(newTab ? { target: "_blank", rel: "noopener" } : {})}
      ref={ref}
      {...props}
    >
      <span className="c-button__content">
        {label ? (
          <>
            {icon && iconBefore && <Icon {...icon} />}
            <span>{renderLabel(label)}</span>
            {icon && iconAfter && <Icon {...icon} />}
          </>
        ) : icon ? (
          <Icon {...icon} />
        ) : (
          ""
        )}
        <span className="c-button__border" />
      </span>
    </Link>
  </span>
);

const LinkButton = forwardRef(LinkButtonComponent);

export const LinkButtonProvider = (props) => (
  <LinkButtonContext.Provider value={LinkButton} {...props} />
);
