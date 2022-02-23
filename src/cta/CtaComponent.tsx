import { FunctionComponent, HTMLAttributes } from "react";
import classnames from "classnames";
import { Storytelling } from "@kickstartds/content/lib/storytelling";
import { CtaProps } from "./CtaProps";

export const Cta: FunctionComponent<CtaProps & HTMLAttributes<HTMLDivElement>> =
  ({ image = {}, className, ...props }) => {
    const { order, ...customImage } = image;
    const { desktopImageLast, ...customOrder } = customImage;
    return (
      <Storytelling
        className={classnames("cta", className)}
        image={{
          ...customImage,
          order: {
            ...customOrder,
            desktopImageLast: (desktopImageLast as boolean) || true,
          },
        }}
        {...props}
      />
    );
  };
