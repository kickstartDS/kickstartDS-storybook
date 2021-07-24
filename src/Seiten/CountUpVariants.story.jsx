import {
  Section,
} from "@kickstartds/base";

import {
  CountUp
} from "../count-up/CountUp";

export default {
  title: "CountUpVariants",
};

const Page = () => (
  <>
    <Section
      gutter="default"
      headline={{
        align: 'center',
        content: 'Style Dark Background Dark',
        level: 'h2',
        pageHeader: false,
        spaceAfter: 'none'
      }}
      background="dark"
      mode="tile"
      spaceAfter="default"
      spaceBefore="default"
      width="default"
    >
      <CountUp
        text="Start with solid building blocks, adapt and improve as needed"
        to={41}
        topic="Components"
      />

      <CountUp
        text="Every propertys' existence is rooted in a real-world decision"
        to={1255}
        topic="Properties"
      />

      <CountUp
        text="Obviously we have design tokens – colors, fonts, sizes, iconography"
        to={695}
        topic="Tokens"
      />
    </Section>
  </>
);

const Template = (args) => <Page {...args} />;
export const CountUpVariants = Template.bind({});
