import { pack } from "@kickstartds/core/lib/storybook/helpers";
import contentBoxStories, {
  Template,
} from "@kickstartds/base/lib/content-box/content-box.stories";

export default {
  ...contentBoxStories,
  title: "Base/Inhaltsbox",
};

export const Default = Template.bind({});
Default.args = pack({
  ratio: "16:9",
  topic: "Lorem Ipsum",
  text:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ispum dolor distinctio minima unde voluptatum aut. Lorem ipsum dolor sit amet.",
});

export const MitLink = Template.bind({});
MitLink.args = pack({
  ...Default.args,
  link: {
    enabled: true,
    variant: "outline",
    href: "#",
    label: "Mehr erfahren",
  },
});
