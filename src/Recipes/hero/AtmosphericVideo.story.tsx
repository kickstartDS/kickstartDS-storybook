import { Visual } from "@kickstartds/content/lib/visual";
import { Section } from "@kickstartds/base/lib/section";

const Recipe = () => (
  <>
    <Section
      width="full"
      spaceBefore="none"
      spaceAfter="none"
    >
      <Visual
        backgroundColor="#f6f6f6"
        inbox
        height="fullScreen"
        skipButton
        media={{
          mode: "video",
          video: {
            srcMobile: "video/2077981.mp4",
            srcTablet: "video/2077981.mp4",
            srcDesktop: "video/2077981.mp4",
          },
        }}
        box={{
          enabled: true,
          headline: {
            content: "Hic maxime sed eos non. Consequatur ut qui amet.",
            subheadline: "Hic maxime sed eos non. Consequatur ut qui amet.",
            level: "h1",
            styleAs: "h1",
          },
          horizontal: "center",
          vertical: "top",
          background: "transparent",
          links: [{ label: "" }],
        }}
      />

    </Section>
  </>
);

export const AtmosphericVideo = Recipe.bind({});
