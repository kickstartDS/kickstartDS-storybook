import { Button, Section } from "@kickstartds/base";

export default {
  title: "Buttons",
};

const Page = () => (
  <>
    <Section width="narrow">
      <Button variant="outline" size="large" label="Button Large" />
      <Button variant="outline" size="medium" label="Button Medium" />
      <Button variant="outline" size="small" label="Button Small" />
    </Section>

    <Section width="narrow" background="dark">
      <Button variant="outline-inverted" size="large" label="Button Large" />
      <Button variant="outline-inverted" size="medium" label="Button Medium" />
      <Button variant="outline-inverted" size="small" label="Button Small" />
    </Section>

    <Section width="narrow">
      <Button variant="solid" size="large" label="Button Large" />
      <Button variant="solid" size="medium" label="Button Medium" />
      <Button variant="solid" size="small" label="Button Small" />
    </Section>

    <Section width="narrow" background="dark">
      <Button variant="solid-inverted" size="large" label="Button Large" />
      <Button variant="solid-inverted" size="medium" label="Button Medium" />
      <Button variant="solid-inverted" size="small" label="Button Small" />
    </Section>

    <Section width="narrow">
      <Button
        size="large"
        className="c-button--main"
        label="Button Main Large"
      />
      <Button className="c-button--main" label="Button Main Medium" />
      <Button
        size="small"
        className="c-button--main"
        label="Button Main Small"
      />
    </Section>
  </>
);

const Template = (args) => <Page {...args} />;
export const Buttons = Template.bind({});
