import { Footer } from "./FooterComponent";

const Template = (args) => <Footer {...args} />;

export default {
  title: "Base/Footer",
  component: Footer,
  args: {
    nav: [
      {
        headline: "Links",
        items: [
          {
            label: "Blog",
            href: "/blog",
          },
          {
            label: "Storybook",
            href: "/storybook/",
          },
        ],
      },
      {
        headline: "Get in touch",
        items: [
          {
            label: "Twitter",
            href: "https://twitter.com/kickstartDS",
          },
          {
            label: "WhatsApp us",
            href: "https://wa.me/491752131879?text=Hi!%20I%20am%20interested%20to%20know%20more%20about%20kickstartDS.",
          },
          {
            label: "Send a Mail",
            href: "mailto:hello@kickstartds.com",
          },
        ],
      },
      {
        headline: "Data & Compliance",
        items: [
          {
            label: "Privacy",
            href: "/privacy",
          },
          {
            label: "Cookie List",
            href: "/cookies",
          },
          {
            label: "Legal notice",
            href: "/legal",
          },
        ],
      },
    ],
  },
};

export const Default = Template.bind({});
