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
        media={{
          mode: "image",
          image: {
            srcMobile: "https://images.unsplash.com/photo-1496147539180-13929f8aa03a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            srcTablet: "https://images.unsplash.com/photo-1496147539180-13929f8aa03a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            srcDesktop: "https://images.unsplash.com/photo-1496147539180-13929f8aa03a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          },
        }}
        box={{
          inverted: "true",
          textColor: "#fff",
          enabled: true,
          headline: {
            content: "Hic maxime sed eos non. Consequatur ut qui amet.",
            level: "h1",
            styleAs: "h1",
          },
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
          horizontal: "right",
          vertical: "center",
          background: "transparent",
          links: [{ label: "" }],
        }}
      />

    </Section>
  </>
);

export const TextOnProduct = Recipe.bind({});
