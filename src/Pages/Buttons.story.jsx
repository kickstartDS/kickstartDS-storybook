import {
  Button,
  Section,
} from "@kickstartds/base";

export default {
  title: "Buttons",
};

const Page = () => (
  <>
    <Section
      width="narrow"
    >
      <button class="c-button c-button--large c-button--outline">
        <span class="c-button__content">
          <span>Button Large</span>
        </span>
        <span class="c-button__border"></span>
      </button>
      <button class="c-button c-button--outline">
        <span class="c-button__content">
          <span>Button Medium</span>
        </span>
        <span class="c-button__border"></span>
      </button>
      <button class="c-button c-button--small c-button--outline">
        <span class="c-button__content">
          <span>Button Small</span>
        </span>
        <span class="c-button__border"></span>
      </button>
    </Section >
    <Section
      width="narrow"
      background="dark"
    >
      <button class="c-button c-button--large c-button--outline-inverted">
        <span class="c-button__content">
          <span>Button Large</span>
        </span>
        <span class="c-button__border"></span>
      </button>
      <button class="c-button c-button--outline-inverted">
        <span class="c-button__content">
          <span>Button Medium</span>
        </span>
        <span class="c-button__border"></span>
      </button>
      <button class="c-button c-button--small c-button--outline-inverted">
        <span class="c-button__content">
          <span>Button Small</span>
        </span>
        <span class="c-button__border"></span>
      </button>
    </Section >
    <Section
      width="narrow"
    >
      <Button
        size="large"
        label="Button Large"
      />
      <Button
        label="Button Medium"
      />
      <Button
        size="small"
        label="Button Small"
      />
    </Section >
    <Section
      width="narrow"
      background="dark"
    >
      <Button
        size="large"
        label="Button Large"
        variant="solid-inverted"
      />
      <Button
        label="Button Medium"
        variant="solid-inverted"
      />
      <Button
        size="small"
        label="Button Small"
        variant="solid-inverted"
      />
    </Section >
    <Section
      width="narrow"
    >
      <Button
        size="large"
        className="c-button--main"
        label="Button Main Large"
      />
      <Button
        className="c-button--main"
        label="Button Main Medium"
      />
      <Button
        size="small"
        className="c-button--main"
        label="Button Main Small"
      />
    </Section >
  </>
);

const Template = (args) => <Page {...args} />;
export const Buttons = Template.bind({});
