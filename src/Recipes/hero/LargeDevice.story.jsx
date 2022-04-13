import { TextMedia } from "@kickstartds/base/lib/text-media";
import { Section } from "@kickstartds/base/lib/section";

const Recipe = () => (
  <>
    <Section
      width="wide"
      headline={{
        content: "Hic maxime sed eos non. Consequatur ut qui amet.",
        subheadline: "Hic maxime sed eos non. Consequatur ut qui amet.",
        align: "center",
        level: "h1",
        styleAs: "h1",
      }}
    >
      <TextMedia
        media={[
          {
            image: {
              height: 853,
              src: 'img/recipes/device.png',
              width: 1280
            }
          }
        ]}
      />
    </Section>
  </>
);

export const LargeDevice = Recipe.bind({});
