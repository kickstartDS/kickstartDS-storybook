import { Subscription } from "./SubscriptionComponent";

const Template = (args) => <Subscription {...args} />;

export default {
  title: "Form/Subscription",
  component: Subscription,
  args: {
    headline: "Subscribe to our newsletter",
    subheadline: "Stay up to date",
    tags: ["hey"],
    honeypot: "",
    sessionStorageKey: "hideSubscriptionForm",
    id: "notification-subscribe",
    action: "/"
  },
};

export const Default = Template.bind({});
