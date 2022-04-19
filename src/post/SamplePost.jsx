import { Picture } from "@kickstartds/base/lib/picture";
import { Post } from "./PostComponent";

const shareBar = {
  headline: {
    content: "Share this article",
    level: "h3",
  },
  links: [
    {
      icon: "twitter",
      href: "https://twitter.com/intent/tweet?source=webclient&url=[URL]%2F&text=[TEXT]",
      title: "Auf Twitter teilen",
      newTab: true,
    },
    {
      icon: "facebook",
      href: "http://www.facebook.com/sharer.php?u=[URL]",
      title: "Auf Facebook teilen",
      newTab: true,
    },
    {
      icon: "xing",
      href: "https://www.xing.com/app/user?op=share;url=[URL]",
      title: "Auf Xing teilen",
      newTab: true,
    },
    {
      icon: "email",
      href: "mailto:?subject=[SUBJECT]",
      title: "Per E-Mail teilen",
    },
  ],
};

export const SamplePost = (props) => (
  <Post shareBar={shareBar} {...props}>
    <p className="has-large-font-size">
      Lorem ipsum dolor sit amet, consetetur <strong>sadipscing elitr</strong>,
      sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
      sed<strong> diam nonumy eirmod</strong> tempor invidunt ut labore et dolore
      magna aliquyam erat, sed diam voluptua.
    </p>
    <h2>
      Now you might wonder if or why you need that.
    </h2>
    <p>
      Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
      At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet:
    </p>
    <figure className="wp-block-video alignwide">
      <Picture src="https://picsum.photos/seed/kdscontentbox/500/300" />
      <figcaption>Storybook Controls panel in action</figcaption>
    </figure>

    <p>
      Ipsum dolor sit amet, consetetur sadipscing elitr,
      sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
      sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
    </p>
    <figure className="wp-block-pullquote">
      <blockquote>
        <p>
          Great components! Make the most out of your frontends by unifying
          their core – utilizing component and design tokens
        </p>
      </blockquote>
    </figure>
    <p>
      Ipsum dolor sit amet, consetetur sadipscing elitr,
      sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat:
    </p>
    <ul>
      <li>
        Sed diam voluptua
      </li>
      <li>
        At vero eos et accusam
      </li>
      <li>
        Justo duo dolores et ea rebum
      </li>
    </ul>
    <p>
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
    </p>
    <h2>
      The past and present
    </h2>
    <p>
      Ipsum dolor sit amet, consetetur sadipscing elitr,
      sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
      sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consetetur <strong>sadipscing elitr</strong>,
      sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
      <strong> diam nonumy eirmod</strong> tempor invidunt ut labore et dolore magna aliquyam erat,
      sed diam voluptua.
    </p>
  </Post>
);
