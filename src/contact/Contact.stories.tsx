import type { Meta, StoryObj } from "@storybook/react";
import { pack } from "@kickstartds/core/lib/storybook";
import contactStories from "@kickstartds/base/lib/contact/contact.stories";
import schema from "@kickstartds/base/lib/contact/contact.schema.dereffed.json";
import { Contact } from "@kickstartds/base/lib/contact";

const meta: Meta<typeof Contact> = {
  ...contactStories,
  title: "Base/Contact",
  component: Contact,
  parameters: {
    jsonschema: schema,
  },
};
export default meta;
type Story = StoryObj<typeof Contact>;

export const Default: Story = {
  args: pack({
    title: "Max Mütze",
    subtitle: "CEO",
    links: [
      {
        icon: "twitter",
        label: "@kickstartds",
        href: "https://twitter.com/kickstartds",
      },
      {
        icon: "email",
        label: "mail@example.com",
        href: "mailto:mail@example.com",
      },
    ],
    copy: `
Sed enim dolore cumque voluptatibus quis. Soluta quia aspernatur sit eius aut eligendi.

Asperiores et labore sit ipsa mollitia illum labore. Asperiores quos voluptatem dolor magnam omnis. Tempore beatae ex veritatis occaecati sit repellendus.

Voluptatem assumenda similique ut error deleniti natus reprehenderit dolorem.
  `.trim(),
  }),
};
