import { HeadlineProvider } from "./headline/HeadlineComponent";
import { ButtonProvider } from "./button/ButtonComponent";
import { SectionProvider } from "./section/SectionComponent";
import { CountUpProvider } from "./count-up/CountUpComponent";
import { StorytellingProvider } from "./storytelling/StorytellingComponent";
import { VisualProvider } from "./visual/VisualComponent";
import { BedrockProvider } from "./bedrock/BedrockProvider";

export default (props) => (
  <BedrockProvider>
    <HeadlineProvider>
      <ButtonProvider>
        <SectionProvider>
          <StorytellingProvider>
            <VisualProvider>
              <CountUpProvider {...props} />
            </VisualProvider>
          </StorytellingProvider>
        </SectionProvider>
      </ButtonProvider>
    </HeadlineProvider>
  </BedrockProvider>
);
