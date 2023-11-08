import type { Meta, StoryObj } from "@storybook/react";
import { Concierge } from "./ConciergeComponent";
import { getArgsShared } from "@kickstartds/core/lib/storybook";
import schema from "./concierge.schema.dereffed.json";
import { useRef } from "react";
import { JSONSchema7 } from "json-schema";

const ConciergeTemplate = (args) => {
  const textAreaRef = useRef(null);

  return (
    <div ks-inverted={"true"} ks-theme={"dark"}>
      <Concierge {...args} ref={textAreaRef} />
    </div>
  );
};

const meta: Meta<typeof Concierge> = {
  title: "Custom / Concierge",
  component: Concierge,
  parameters: {
    jsonschema: schema,
  },
  render: ConciergeTemplate,
  ...getArgsShared(schema as JSONSchema7),
};
export default meta;
type Story = StoryObj<typeof Concierge>;

export const Default: Story = {};
