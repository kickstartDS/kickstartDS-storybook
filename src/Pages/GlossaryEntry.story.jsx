import { unpack } from "@kickstartds/core/lib/storybook/helpers";

import HeaderStories from "../header/Header.stories";
import FooterStories from "../footer/Footer.stories";

import { Glossary } from "../glossary/GlossaryComponent.tsx";
import { Header } from "../header/HeaderComponent";
import { Footer } from "../footer/FooterComponent";

export default {
  title: "Glossary Entry",
};

const Page = () => (
  <>
    <Header {...unpack(HeaderStories.args)} />
    <Glossary
      cover={{
        caption: "CSS3 image caption",
        src: "img/glossary/logo.png",
      }}
      cta={{
        image: {
          order: {
            desktopImageLast: true,
          },
        },
      }}
      definition="In addition to using ES6 as a specific flavor, on top of JavaScript as a technology, we're using TypeScript for it's additional type safety and resulting confidence when developing long lasting, well-rounded frontend solutions like a component library.   
      
      One additional feature of TypeScript we're relying heavily on is the ability to generate types for publishing packages. We use this to generate all component typings automatically, based on shared JSON Schema definitions, enabling auto-complete for properties defined in the context of the component... based on the generated types.
      "
      media={[
        {
          caption:
            "Excerpt of the TypeScript typings we auto-generate for all components. Generation happens based on our JSON Schema definitions (per component), and enables auto-complete when using components from our component library / Design System in your project.",
          src: "img/glossary/code.png",
        },
        {
          caption:
            "Shows the source code of the kickstartDS Visual component, as an example of TypeScript use in our codebase.",
          src: "img/glossary/code.png",
        },
      ]}
      stackshare="https://stackshare.io/julrich/decisions/107141570573419830"
      tags={["kickstartDS", "Decision"]}
      term="TypeScript"
      related={[
        {
          excerpt:
            "JavaScript for us has two uses. On the one hand it is the foundation for progressively layered...",
          image: "img/showcase/showcase-cover.png",
          tags: ["Frontend", "HTML", "API"],
          title: "ECMAScript 6 (ES6)",
          typeLabel: "Glossary",
          url: "#",
        },
        {
          excerpt:
            "ES6 is the specific flavour of JavaScript we're writing for it's much improved module support...",
          image: "img/showcase/showcase-cover.png",
          tags: ["CSS", "HTML"],
          title: "JavaScript",
          typeLabel: "Glossary",
          url: "#",
        },
      ]}
    />
    <Footer {...unpack(FooterStories.args)} />
  </>
);

const Template = (args) => <Page {...args} />;
export const GlossaryEntry = Template.bind({});
