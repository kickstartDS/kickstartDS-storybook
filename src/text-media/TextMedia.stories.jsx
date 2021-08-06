import { pack } from "@kickstartds/core/lib/storybook/helpers";
import textMediaStories, {
  Template,
} from "@kickstartds/base/lib/text-media/text-media.stories";

export default textMediaStories;

export const BildUeberText = Template.bind({});
BildUeberText.args = pack({
  ...textMediaStories.args,
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
});

export const VideoUeberText = Template.bind({});
VideoUeberText.args = pack({
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
});

export const BildInText = Template.bind({});
BildInText.args = pack({
  ...BildUeberText.args,
  mediaAlignment: "intext-left",
  text: `
  Consequuntur est quia atque eum ducimus. Consequatur fugiat hic eos perferendis. Libero unde omnis dolorem maxime occaecati sapiente distinctio. Consectetur non placeat dolorem est animi.

  Suscipit quos rem suscipit culpa. Et distinctio et veritatis consectetur quae dolorem aut. Explicabo commodi repudiandae fugiat. Accusamus alias mollitia perferendis qui iure magni. Minus est vitae dolor dolor.
  Consequuntur est quia atque eum ducimus. Consequatur fugiat hic eos perferendis. Libero unde omnis dolorem maxime occaecati sapiente distinctio. Consectetur non placeat dolorem est animi.

  Suscipit quos rem suscipit culpa. Et distinctio et veritatis consectetur quae dolorem aut. Explicabo commodi repudiandae fugiat. Accusamus alias mollitia perferendis qui iure magni. Minus est vitae dolor dolor.
  `,
});

export const BildNebenText = Template.bind({});
BildNebenText.args = pack({
  ...BildUeberText.args,
  mediaAlignment: "beside-left",
  text: `
  Consequuntur est quia atque eum ducimus. Consequatur fugiat hic eos perferendis. Libero unde omnis dolorem maxime occaecati sapiente distinctio. Consectetur non placeat dolorem est animi.

  Suscipit quos rem suscipit culpa. Et distinctio et veritatis consectetur quae dolorem aut. Explicabo commodi repudiandae fugiat. Accusamus alias mollitia perferendis qui iure magni. Minus est vitae dolor dolor.
  Consequuntur est quia atque eum ducimus. Consequatur fugiat hic eos perferendis. Libero unde omnis dolorem maxime occaecati sapiente distinctio. Consectetur non placeat dolorem est animi.

  Suscipit quos rem suscipit culpa. Et distinctio et veritatis consectetur quae dolorem aut. Explicabo commodi repudiandae fugiat. Accusamus alias mollitia perferendis qui iure magni. Minus est vitae dolor dolor.
  `,
});

