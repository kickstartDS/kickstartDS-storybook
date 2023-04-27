import { Concierge } from "./ConciergeComponent";
import { getArgsShared } from "@kickstartds/core/lib/storybook/helpers";
import schema from "./concierge.schema.dereffed.json";
import { useRef } from "react";

const { args, argTypes } = getArgsShared(schema);

const Template = (args) => {
  const textAreaRef = useRef(null);

  return (
    <div ks-inverted={"true"} ks-theme={"dark"}>
      <Concierge {...args} ref={textAreaRef} />
    </div>
  );
};

export default {
  title: "Custom / Concierge",
  component: Concierge,
  args,
  argTypes,
  parameters: {
    jsonschema: schema,
  },
};

export const Default = Template.bind({});
