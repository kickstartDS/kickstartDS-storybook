import { Button } from "@kickstartds/base/lib/button";
import { Section } from "@kickstartds/base/lib/section";

export default {
  title: "Buttons",
};

const Page = () => (
  <>
    <Section width="narrow">
      <Button
        className="no-stretch"
        variant="outline"
        size="large"
        label="Button Large"
      />
      <Button
        className="no-stretch"
        variant="outline"
        size="medium"
        label="Button Medium"
      />
      <Button
        className="no-stretch"
        variant="outline"
        size="small"
        label="Button Small"
      />
    </Section>

    <Section width="narrow" ks-inverted="true">
      <Button
        className="no-stretch"
        variant="outline"
        size="large"
        label="Button Large"
      />
      <Button
        className="no-stretch"
        variant="outline"
        size="medium"
        label="Button Medium"
      />
      <Button
        className="no-stretch"
        variant="outline"
        size="small"
        label="Button Small"
      />
    </Section>

    <Section width="narrow">
      <Button
        className="no-stretch"
        variant="solid"
        size="large"
        label="Button Large"
      />
      <Button
        className="no-stretch"
        variant="solid"
        size="medium"
        label="Button Medium"
      />
      <Button
        className="no-stretch"
        variant="solid"
        size="small"
        label="Button Small"
      />
    </Section>

    <Section width="narrow" ks-inverted="true">
      <Button
        className="no-stretch"
        variant="solid"
        size="large"
        label="Button Large"
      />
      <Button
        className="no-stretch"
        variant="solid"
        size="medium"
        label="Button Medium"
      />
      <Button
        className="no-stretch"
        variant="solid"
        size="small"
        label="Button Small"
      />
    </Section>

    <Section width="narrow">
      <Button
        className="no-stretch"
        variant="clear"
        size="large"
        label="Button Large"
      />
      <Button
        className="no-stretch"
        variant="clear"
        size="medium"
        label="Button Medium"
      />
      <Button
        className="no-stretch"
        variant="clear"
        size="small"
        label="Button Small"
      />
    </Section>

    <Section width="narrow" ks-inverted="true">
      <Button
        className="no-stretch"
        variant="clear"
        size="large"
        label="Button Large"
      />
      <Button
        className="no-stretch"
        variant="clear"
        size="medium"
        label="Button Medium"
      />
      <Button
        className="no-stretch"
        variant="clear"
        size="small"
        label="Button Small"
      />
    </Section>

    <Section width="narrow">
      <Button
        highlighted
        size="large"
        label="Button Main Large"
        className="no-stretch"
      />
      <Button highlighted label="Button Main Medium" className="no-stretch" />
      <Button
        className="no-stretch"
        highlighted
        size="small"
        label="Button Main Small"
      />
    </Section>
  </>
);

const Template = (args) => <Page {...args} />;
export const Buttons = Template.bind({});
