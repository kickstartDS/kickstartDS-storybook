import { Subscription } from "./SubscriptionComponent";

const Template = (args) => <Subscription {...args} />;

export default {
  title: "Form/Subscription",
  component: Subscription,
  args: {
    action: "",
    hiddenFields: [],
    honeypot: "",
    localStorageKey: "hideSubscriptionForm",
  },
};

export const Default = Template.bind({});
