import { AnnouncementBar } from "./AnnouncementBarComponent";

const Template = (args) => <AnnouncementBar {...args} />;

export default {
  title: "Recipes/Announcement Bar",
  component: AnnouncementBar,
  args: {
    content:
      "We are on a mission to democratize design systems. That's why we will go open source soon.",
    linkLabel: "Get notified",
    linkHref: "#notification-subscribe",
    targetSessionStorageKey: "hideSubscriptionForm",
  },
};

export const Default = Template.bind({});
