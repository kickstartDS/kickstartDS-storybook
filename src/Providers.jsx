import { HeadlineProvider } from "./headline/HeadlineComponent";
import { ButtonProvider } from "./button/ButtonComponent";
import { LinkButtonProvider } from "./link-button/LinkButtonComponent";
import { SectionProvider } from "./section/SectionComponent";
import { CountUpProvider } from "./count-up/CountUpComponent";

export default (props) => (
  <HeadlineProvider>
    <ButtonProvider>
      <LinkButtonProvider>
        <SectionProvider>
          <CountUpProvider {...props} />
        </SectionProvider>
      </LinkButtonProvider>
    </ButtonProvider>
  </HeadlineProvider>
);
