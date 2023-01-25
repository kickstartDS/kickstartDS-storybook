import { AnnouncementBar } from "./AnnouncementBarComponent";

const Template = (args) => <AnnouncementBar {...args} />;

export default {
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

export const Default = Template.bind({});
