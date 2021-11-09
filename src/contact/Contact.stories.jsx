import { pack, getArgsShared } from "@kickstartds/core/lib/storybook/helpers";
import contactStories, {
  Template,
} from "@kickstartds/content/lib/contact/contact.stories";
import schema from "./contact.schema.dereffed.json";

const { defaultArgs: args, argTypes } = getArgsShared(schema);

export default {
  ...contactStories,
  args,
  argTypes,
};

export const Default = Template.bind({});
Default.args = pack({
  title: "Max Mütze",
  subtitle: "CEO",
  twitter: "kickstartds",
  mail: "mail@example.com",
  copy: `
Sed enim dolore cumque voluptatibus quis. Soluta quia aspernatur sit eius aut eligendi.

Asperiores et labore sit ipsa mollitia illum labore. Asperiores quos voluptatem dolor magnam omnis. Tempore beatae ex veritatis occaecati sit repellendus.

Voluptatem assumenda similique ut error deleniti natus reprehenderit dolorem.
`,
});
