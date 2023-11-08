import type { Meta, StoryObj } from "@storybook/react";
import { pack } from "@kickstartds/core/lib/storybook";
import logoTilesStories from "@kickstartds/content/lib/logo-tiles/logo-tiles.stories";
import schema from "@kickstartds/content/lib/logo-tiles/logo-tiles.schema.dereffed.json";
import { LogoTiles } from "@kickstartds/content/lib/logo-tiles";

const { argTypes } = logoTilesStories;
const meta: Meta<typeof LogoTiles> = {
  ...logoTilesStories,
  title: "Content/Logos",
  argTypes,
  args: pack({
    logos: [
      {
        alt: "Erfolgsfaktor Familie",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/640px-Shopify_logo_2018.svg.png",
      },
      {
        alt: "Familienfreundliches Unternehmen",
        src: "https://d21buns5ku92am.cloudfront.net/41748/images/177922-logo-d8345a-large-1441290673.png",
      },
      {
        alt: "Kooperationspartner der FHDW",
        src: "https://timotheebinet.com/static/fa38ab30a9b8abb4a1ff8c0b7fb86cef/00d43/gatsby.png",
      },
      {
        alt: "Kooperationspartner von it´s owl",
        src: "https://www-cdn.bigcommerce.com/assets/mediakit/logo-plain.png",
      },
    ],
  }),
  parameters: {
    jsonschema: schema,
  },
};
export default meta;
type Story = StoryObj<typeof LogoTiles>;

export const FourRow: Story = {};
