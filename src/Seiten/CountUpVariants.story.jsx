import { Section } from "@kickstartds/base";
import { CountUp } from "../count-up/CountUpComponent";
import { Components, Properties, Tokens } from "../count-up/CountUp.stories";

export default {
  title: "CountUpVariants",
};

const Page = () => (
  <>
    <Section
      gutter="default"
      headline={{
        align: "center",
        content: "Dark Background",
        level: "h2",
        pageHeader: false,
        spaceAfter: "none",
      }}
      background="dark"
      mode="tile"
      deko={true}
      pattern={1}
    >
      <CountUp {...Components.args} />
      <CountUp {...Properties.args} />
      <CountUp {...Tokens.args} />
    </Section>
    <Section
      gutter="default"
      headline={{
        align: "center",
        content: "Light Background",
        level: "h2",
        pageHeader: false,
        spaceAfter: "none",
      }}
      mode="tile"
      deko={true}
      pattern={2}
    >
      <CountUp {...Components.args} />
      <CountUp {...Properties.args} />
      <CountUp {...Tokens.args} />
    </Section>
  </>
);

const Template = (args) => <Page {...args} />;
export const CountUpVariants = Template.bind({});
