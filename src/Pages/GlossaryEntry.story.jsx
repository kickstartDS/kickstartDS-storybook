import FooterStories from "../footer/Footer.stories";
import { Glossary } from "../glossary/GlossaryComponent.tsx";

export default {
  title: "Glossary Entry",
};

import { Header } from "../header/HeaderComponent";
import HeaderStories from "../header/Header.stories";
import { Footer } from "../footer/FooterComponent";

const Page = () => (
  <>
    <Header {...unpack(HeaderStories.args)} />
    <Glossary
      term="TypeScript"
      definition="In addition to using ES6 as a specific flavor, on top of JavaScript, as a technology, we're using TypeScript for it's additional type safety and resulting confidence when developing long lasting, well-rounded frontend solutions like a component library.

      One additional feature of TypeScript we're relying heavily on is the ability to generate types for publishing packages. We use this to generate all component typings automatically, based on shared JSON Schema definitions, enabling auto-complete for properties defined in the context of the component... based on the generated types."
      cover={{
        src: "https://www.kickstartds.com/static/f750dd4b7cf3a79182eff8c092509daf/5d536/ts-logo-512.png",
      }}
      media={[
        {
          src: "https://www.kickstartds.com/static/29fe689e24e44e20c1d4fc4f2eca07fe/2643c/2021-10-23_17-18.webp",
          caption:
            "Excerpt of the TypeScript typings we auto-generate for all components. Generation happens based on our JSON Schema definitions (per component), and enables auto-complete when using components from our component library / Design System in your project.",
        },
        {
          src: "https://www.kickstartds.com/static/7b42c45763d3911d61fa5e06a28133be/8be91/2021-10-23_17-17.webp",
          caption:
            "Shows the source code of the kickstartDS Visual component, as an example of TypeScript use in our codebase.",
        },
      ]}
      tags={["kickstartDS", "Decision"]}
      related={[
        {
          title: "ECMAScript 6 (ES6)",
          excerpt:
            "ES6 is the specific flavour of JavaScript we're writing for it's much improved module support, making 100% vanilla JavaScript solutions a reality. It is also much more terse and expressive in its syntax (iterators, destructuring, arrow functions, etc).",
          url: "https://www.kickstartds.com/glossary/es6/",
          image:
            "https://raw.githubusercontent.com/github/explore/e4270e345b968ae626310bc86e339a2ae80c6ae4/topics/ecmascript/ecmascript.png",
        },
        {
          title: "JavaScript",
          excerpt:
            "JavaScript for us has two uses. On the one hand it is the foundation for progressively layered interactivity on a website / interface built with kickstartDS, and on the other hand it's at the core of the engine powering quality and developer experience in modern web frameworks: build tooling, bundling, semantic versioning, testing, etc.",
          url: "https://www.kickstartds.com/glossary/javascript/",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png",
        },
      ]}
      stackshare="https://stackshare.io/julrich/decisions/107140151808024329"
      cta={{
        box: {
          text: "Read more, or chat with us, to learn how this helps create consistent frontend interfaces",
          vAlign: "top",
          link: {
            label: "Lets have a chat",
            variant: "solid",
            iconAfter: true,
            icon: {
              icon: "person",
            },
          },
        },
        full: true,
        image: {
          source: "img/contact.svg",
          vAlign: "top",
          order: {
            desktopImageLast: true,
          },
        },
      }}
    />
    <Footer {...unpack(FooterStories.args)} />
  </>
);

const Template = (args) => <Page {...args} />;
export const GlossaryEntry = Template.bind({});
