import tagLabelStories, {
  Template,
} from "@kickstartds/base/lib/tag-label/tag-label.stories";
import schema from "@kickstartds/base/lib/tag-label/tag-label.schema.dereffed.json";

export default {
  ...tagLabelStories,
  parameters: {
    jsonschema: schema,
  },
};

export const Small = Template.bind({});
Small.args = {
  label: "Lorem Ipsum",
  link: "#",
  size: "s"
};

export const Medium = Template.bind({});
Medium.args = {
  label: "Lorem Ipsum",
  link: "#",
  size: "m"
};

export const Large = Template.bind({});
Large.args = {
  label: "Lorem Ipsum",
  link: "#",
  size: "l"
};

export const WithoutLink = Template.bind({});
WithoutLink.args = {
  label: "Lorem Ipsum",
  size: "m"
};

export const Removable = Template.bind({});
Removable.args = {
  label: "Lorem Ipsum",
  link: "#",
  removable: true,
  size: "m"
};
