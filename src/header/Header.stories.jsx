import { Header } from "./HeaderComponent";
import { navEntries } from "./nav/navMainData";

const Template = (args) => <Header {...args} />;

export default {
  title: "Base/Header",
  component: Header,
  decorators: [
    (Story) => (
      <div style={{ height: "500vh" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    nav: {
      enabled: true,
      items: navEntries,
    },
    activeNavId: "about",
    cta: {
      label: "Get in contact",
      href: "#",
    },
  },
};

export const Default = Template.bind({});

// export const Light = Template.bind({});
// Light.parameters = {
//   backgrounds: { default: "dark" },
// };
// Light.args = {
//   light: true,
// };
