import type { Meta, StoryObj } from "@storybook/react";
import tagLabelStories from "@kickstartds/base/lib/tag-label/tag-label.stories";
import schema from "@kickstartds/base/lib/tag-label/tag-label.schema.dereffed.json";
import { TagLabel } from "@kickstartds/base/lib/tag-label";

const meta: Meta<typeof TagLabel> = {
  ...tagLabelStories,
  title: "Base/Tag Label",
  parameters: {
    jsonschema: schema,
  },
};
export default meta;
type Story = StoryObj<typeof TagLabel>;

export const Small: Story = {
  args: {
    label: "Lorem Ipsum",
    link: "#",
    size: "s",
  },
};

export const Medium: Story = {
  args: {
    label: "Lorem Ipsum",
    link: "#",
    size: "m",
  },
};

export const Large: Story = {
  args: {
    label: "Lorem Ipsum",
    link: "#",
    size: "l",
  },
};

export const WithoutLink: Story = {
  args: {
    label: "Lorem Ipsum",
    size: "m",
  },
};

export const Removable: Story = {
  args: {
    label: "Lorem Ipsum",
    link: "#",
    removable: true,
    size: "m",
  },
};
