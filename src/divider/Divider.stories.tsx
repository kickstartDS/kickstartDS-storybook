import type { Meta, StoryObj } from "@storybook/react";
import dividerStories from "@kickstartds/base/lib/divider/divider.stories";
import schema from "@kickstartds/base/lib/divider/divider.schema.dereffed.json";
import { Divider } from "@kickstartds/base/lib/divider";

const meta: Meta<typeof Divider> = {
  ...dividerStories,
  title: "Base / Divider",
  parameters: {
    jsonschema: schema,
  },
};
export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {};
