import React, { FC, HTMLAttributes } from "react";
import { Headline } from "@kickstartds/base/lib/headline";
import { TextField } from "@kickstartds/form/lib/text-field";
import { Button } from "@kickstartds/base/lib/button";
import { useSessionState } from "../hooks/useSessionState";

type SubscriptionProps = HTMLAttributes<HTMLFormElement> & {
  tags?: string[];
  honeypot: string;
  sessionStorageKey: string;
  buttonLabel: string;
  placeholder?: string;
  headline?: string;
  subheadline?: string;
};

export const Subscription: FC<SubscriptionProps> = ({
  tags = [],
  honeypot,
  sessionStorageKey,
  headline,
  subheadline,
  id,
  placeholder,
  buttonLabel,
  ...props
}) => {
  const [hidden, setHidden] = useSessionState(sessionStorageKey);
  const onSubmit = () => {
    requestAnimationFrame(() => {
      setHidden("1");
    });
  };

  return hidden ? null : (
    <div id={id}>
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
        {tags.map((value, key) => (
          <input type="hidden" name="tags" value={value} key={key} />
        ))}
        <div aria-hidden="true" className="hidden-visually">
          <input type="text" name={honeypot} tabIndex={-1} />
        </div>
        <TextField
          placeholder={placeholder}
          label="Email Address"
          hideLabel
          required
          type="email"
          name="EMAIL"
          className="c-subscription__input"
        />
        <Button
          label={buttonLabel}
          variant="solid"
          size="medium"
          type="submit"
        />
      </form>
    </div>
  );
};
