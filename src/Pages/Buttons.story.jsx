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
      <button class="c-button c-button--outline">
        <div class="c-button__content">
          <span>Button Medium</span>
        </div>
        <span class="c-button__border"></span>
      </button>
      <button class="c-button c-button--large c-button--outline">
        <div class="c-button__content">
          <span>Button Large</span>
        </div>
        <span class="c-button__border"></span>
      </button>
      <button class="c-button c-button--small c-button--outline">
        <div class="c-button__content">
          <span>Button Small</span>
        </div>
        <span class="c-button__border"></span>
      </button>
    </Section >
    <Section
      width="narrow"
      background="dark"
    >
      <button class="c-button c-button--outline-inverted">
        <div class="c-button__content">
          <span>Button Medium</span>
        </div>
        <span class="c-button__border"></span>
      </button>
      <button class="c-button c-button--large c-button--outline-inverted">
        <div class="c-button__content">
          <span>Button Large</span>
        </div>
        <span class="c-button__border"></span>
      </button>
      <button class="c-button c-button--small c-button--outline-inverted">
        <div class="c-button__content">
          <span>Button Small</span>
        </div>
        <span class="c-button__border"></span>
      </button>
    </Section >
    <Section
      width="narrow"
    >
      <Button
        label="Button Medium"
      />
      <Button
        size="large"
        label="Button Large"
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
        label="Button Medium"
        variant="solid-inverted"
      />
      <Button
        size="large"
        label="Button Large"
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
        className="c-button--main"
        label="Button Main Medium"
      />
    </Section >
  </>
);

const Template = (args) => <Page {...args} />;
export const Buttons = Template.bind({});
