import { Section } from "@kickstartds/base/lib/section";
import { TextField } from "@kickstartds/form/lib/text-field";
import { Button } from "@kickstartds/base/lib/button";

export const Subscription = ({}) => (
  <>
    <div className="c-form">
      <TextField placeholder="Enter your email" hideLabel />
      <Button label="subscribe" variant="solid" size="medium" />
    </div>
  </>
);
