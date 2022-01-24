import {
  FunctionComponent,
  HTMLAttributes,
} from 'react';

import { Headline } from "@kickstartds/base/lib/headline";
import { Storytelling } from "@kickstartds/content/lib/storytelling";
import { LinkButton } from "@kickstartds/base/lib/link-button";

import { CtaProps } from "./CtaProps";

export const Cta: FunctionComponent<CtaProps & HTMLAttributes<HTMLDivElement>> = ({
  headline: headlineProps,
  storytelling: storytellingProps,
  button,
}) => {
  const { box, image, ...storytelling } = storytellingProps;
  const { headline, link, ...customBox } = box;
  const { order, ...customImage } = image;
  const { desktopImageLast, ...customOrder } = customImage;
  return (
    <div className="cta">
      <Headline {...headlineProps} align={headlineProps.align || "left"} />
      <Storytelling
        {...storytelling}
        box={customBox}
        image={{
          ...customImage,
          order: { ...customOrder, desktopImageLast: (desktopImageLast as boolean) || true },
        }}
      />
      <LinkButton {...button} />
    </div>
  );
};