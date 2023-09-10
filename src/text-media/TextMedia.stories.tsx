import type { Meta, StoryObj } from "@storybook/react";
import textMediaStories from "@kickstartds/base/lib/text-media/text-media.stories";
import schema from "@kickstartds/base/lib/text-media/text-media.schema.dereffed.json";
import { TextMedia } from "@kickstartds/base/lib/text-media";

const meta: Meta<typeof TextMedia> = {
  ...textMediaStories,
  component: TextMedia,
  parameters: {
    jsonschema: schema,
  },
};
export default meta;
type Story = StoryObj<typeof TextMedia>;

export const ImageAbove: Story = {};
ImageAbove.args = {
  mediaAlignment: "intext-left",
  media: [
    {
      image: {
        src: "https://picsum.photos/seed/kdsteaserbox/500/300",
        width: 500,
        height: 300,
      },
    },
  ],
  text: `
Consequuntur est quia atque eum ducimus. Consequatur fugiat hic eos perferendis. Libero unde omnis dolorem maxime occaecati sapiente distinctio. Consectetur non placeat dolorem est animi.

Suscipit quos rem suscipit culpa. Et distinctio et veritatis consectetur quae dolorem aut. Explicabo commodi repudiandae fugiat. Accusamus alias mollitia perferendis qui iure magni. Minus est vitae dolor dolor.
`,
};

export const VideoAbove: Story = {};
VideoAbove.args = {
  media: [
    {
      video: {
        src: "/video-compressed.mp4",
        width: 900,
        height: 300,
      },
    },
  ],
  text: `
Consequuntur est quia atque eum ducimus. Consequatur fugiat hic eos perferendis. Libero unde omnis dolorem maxime occaecati sapiente distinctio. Consectetur non placeat dolorem est animi.

Suscipit quos rem suscipit culpa. Et distinctio et veritatis consectetur quae dolorem aut. Explicabo commodi repudiandae fugiat. Accusamus alias mollitia perferendis qui iure magni. Minus est vitae dolor dolor.
    `,
};

export const ImageIntext: Story = {};
ImageIntext.args = {
  ...ImageAbove.args,
  mediaAlignment: "intext-left",
  text: `
Consequuntur est quia atque eum ducimus. Consequatur fugiat hic eos perferendis. Libero unde omnis dolorem maxime occaecati sapiente distinctio. Consectetur non placeat dolorem est animi.

Suscipit quos rem suscipit culpa. Et distinctio et veritatis consectetur quae dolorem aut. Explicabo commodi repudiandae fugiat. Accusamus alias mollitia perferendis qui iure magni. Minus est vitae dolor dolor.
Consequuntur est quia atque eum ducimus. Consequatur fugiat hic eos perferendis. Libero unde omnis dolorem maxime occaecati sapiente distinctio. Consectetur non placeat dolorem est animi.

Suscipit quos rem suscipit culpa. Et distinctio et veritatis consectetur quae dolorem aut. Explicabo commodi repudiandae fugiat. Accusamus alias mollitia perferendis qui iure magni. Minus est vitae dolor dolor.
  `,
};

export const ImageBeside: Story = {};
ImageBeside.args = {
  ...ImageAbove.args,
  mediaAlignment: "beside-left",
  text: `
Consequuntur est quia atque eum ducimus. Consequatur fugiat hic eos perferendis. Libero unde omnis dolorem maxime occaecati sapiente distinctio. Consectetur non placeat dolorem est animi.

Suscipit quos rem suscipit culpa. Et distinctio et veritatis consectetur quae dolorem aut. Explicabo commodi repudiandae fugiat. Accusamus alias mollitia perferendis qui iure magni. Minus est vitae dolor dolor.
Consequuntur est quia atque eum ducimus. Consequatur fugiat hic eos perferendis. Libero unde omnis dolorem maxime occaecati sapiente distinctio. Consectetur non placeat dolorem est animi.

Suscipit quos rem suscipit culpa. Et distinctio et veritatis consectetur quae dolorem aut. Explicabo commodi repudiandae fugiat. Accusamus alias mollitia perferendis qui iure magni. Minus est vitae dolor dolor.
  `,
};
