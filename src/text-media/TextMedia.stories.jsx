import textMediaStories, {
  Template,
} from "@kickstartds/base/lib/text-media/text-media.stories";
import schema from "@kickstartds/base/lib/text-media/text-media.schema.dereffed.json";

export default {
  ...textMediaStories,
  parameters: {
    jsonschema: schema,
  },
};

export const ImageAbove = Template.bind({});
ImageAbove.args = {
  media: [
    {
      image: {
        src: "https://picsum.photos/seed/kdsteaserbox/500/300",
        width: 1280,
        height: 853,
      },
    },
  ],
  text: `
Consequuntur est quia atque eum ducimus. Consequatur fugiat hic eos perferendis. Libero unde omnis dolorem maxime occaecati sapiente distinctio. Consectetur non placeat dolorem est animi.

Suscipit quos rem suscipit culpa. Et distinctio et veritatis consectetur quae dolorem aut. Explicabo commodi repudiandae fugiat. Accusamus alias mollitia perferendis qui iure magni. Minus est vitae dolor dolor.
`,
};

export const VideoAbove = Template.bind({});
VideoAbove.args = {
  media: [
    {
      video: {
        src: "/video-compressed.mp4",
      },
    },
  ],
  text: `
Consequuntur est quia atque eum ducimus. Consequatur fugiat hic eos perferendis. Libero unde omnis dolorem maxime occaecati sapiente distinctio. Consectetur non placeat dolorem est animi.

Suscipit quos rem suscipit culpa. Et distinctio et veritatis consectetur quae dolorem aut. Explicabo commodi repudiandae fugiat. Accusamus alias mollitia perferendis qui iure magni. Minus est vitae dolor dolor.
    `,
};

export const ImageIntext = Template.bind({});
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

export const ImageBeside = Template.bind({});
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
