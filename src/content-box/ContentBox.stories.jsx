import merge from "deepmerge";
import { pack } from "@kickstartds/core/lib/storybook/helpers";
import contentBoxStories, {
  Template,
} from "@kickstartds/base/lib/content-box/content-box.stories";
import tokens from "./content-box-tokens.json";
import schema from "@kickstartds/base/lib/content-box/content-box.schema.dereffed.json";

export default {
  ...contentBoxStories,
  title: "Base/Content Box",
  parameters: {
    cssprops: merge(contentBoxStories.parameters.cssprops, tokens),
    jsonschema: schema,
  },
};

export const Image = Template.bind({});
Image.args = pack({
  ratio: "16:9",
  topic: "Lorem Ipsum",
  text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ispum dolor distinctio minima unde voluptatum aut. Lorem ipsum dolor sit amet.",
});

export const ImageWithButton = Template.bind({});
ImageWithButton.args = pack({
  ...Image.args,
  link: {
    enabled: true,
    variant: "solid",
    href: "#",
    label: "Learn more",
  },
});

export const Icon = Template.bind({});
Icon.args = pack({
  ...Image.args,
  link: {
    enabled: false,
  },
  ratio:"none",
  alignement: "center",
  image: "img/icons/tokens.svg",
  text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
});
