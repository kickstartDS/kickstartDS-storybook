import { Storytelling } from "@kickstartds/content/lib/storytelling";
import { Section } from "@kickstartds/base/lib/section";

const Recipe = () => (
  <Section width="full" spaceBefore="none" spaceAfter="none">
    <Storytelling
      image={{
        source: "img/recipes/hero-angled.png",
        order: {
          desktopImageLast: true,
        },
      }}
      box={{
        headline: {
          level: "h1",
          styleAs: "h1",
          content: "We help you overcome digital obstacles",
          subheadline: "Autem voluptas quis facere et qui voluptate earum.",
        },
        text: `Lorem ipsum dolor sit amet, [consetetur sadipscing](http://example.com/) elitr, sed diam voluptua. At vero eos et accusam et justo duo **dolores et ea rebum.**`,
        // @ts-expect-error
        links: [
          {
            fillAnimation: false,
            href: "#",
            iconAfter: false,
            iconAnimation: false,
            iconBefore: false,
            label: "Start now",
            newTab: false,
            size: "medium",
            variant: "solid",
          },
          {
            href: "#",
            label: "Request a demo",
            variant: "outline",
          },
        ],
      }}
      full
    />
  </Section>
);

export const AngledImage = {
  render: Recipe,
};
