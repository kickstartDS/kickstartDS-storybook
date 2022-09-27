import React, { FC, HTMLAttributes } from "react";
import { Headline } from "@kickstartds/base/lib/headline";
import { TextField } from "@kickstartds/form/lib/text-field";
import { Button } from "@kickstartds/base/lib/button";
import { useSessionState } from "../hooks/useSessionState";

type SubscriptionProps = HTMLAttributes<HTMLFormElement> & {
  hiddenFields: [string, string][];
  honeypot: string;
  sessionStorageKey: string;
  headline?: string;
  subheadline?: string;
};

export const Subscription: FC<SubscriptionProps> = ({
  hiddenFields,
  honeypot,
  sessionStorageKey,
  headline,
  subheadline,
  ...props
}) => {
  const [hidden, setHidden] = useSessionState(sessionStorageKey);
  const onSubmit = () => {
    requestAnimationFrame(() => {
      setHidden("1");
    });
  };

  return hidden ? null : (
    <div>
      <Headline
        content={headline}
        level="h3"
        align="center"
        subheadline={subheadline}
      />
      <form
        {...props}
        className="c-form"
        target="_blank"
        method="post"
        onSubmit={onSubmit}
      >
        {hiddenFields.map(([name, value], index) => (
          <input type="hidden" name={name} value={value} key={index} />
        ))}
        <div aria-hidden="true" className="hidden-visually">
          <input type="text" name={honeypot} tabIndex={-1} />
        </div>
        <TextField
          placeholder="Enter your email"
          label="Email Address"
          hideLabel
          required
          type="email"
          name="EMAIL"
        />
        <Button label="subscribe" variant="solid" size="medium" type="submit" />
      </form>
    </div>
  );
};
