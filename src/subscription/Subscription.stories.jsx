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
    action: "/",
    placeholder: "Enter your email",
    buttonLabel: "Subscribe",
  },
};

export const Default = Template.bind({});
