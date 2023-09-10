import type { Meta, StoryObj } from "@storybook/react";
import { AnnouncementBar } from "./AnnouncementBarComponent";

const meta: Meta<typeof AnnouncementBar> = {
  title: "Recipes/Announcement Bar",
  component: AnnouncementBar,
  args: {
    content:
      "kickstartDS is Open Source now, learn more in our announcement blog post 🎉",
    linkLabel: "Read Post",
    linkHref: "#notification-subscribe",
    targetSessionStorageKey: "hideSubscriptionForm",
  },
};
export default meta;
type Story = StoryObj<typeof AnnouncementBar>;

export const Default: Story = {};
