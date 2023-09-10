import type { Meta, StoryObj } from "@storybook/react";
import { Subscription } from "./SubscriptionComponent";

const meta: Meta<typeof Subscription> = {
  title: "Form/Subscription",
  component: Subscription,
  args: {
    headline: "Subscribe to our newsletter",
    subheadline: "Stay up to date",
    tags: ["hey"],
    honeypot: "",
    sessionStorageKey: "hideSubscriptionForm",
    id: "notification-subscribe",
    placeholder: "Enter your email",
    buttonLabel: "Subscribe",
  },
};
export default meta;
type Story = StoryObj<typeof Subscription>;

export const Default: Story = {};
