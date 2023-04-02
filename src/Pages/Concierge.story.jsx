import { unpack } from "@kickstartds/core/lib/storybook/helpers";

import HeaderStories from "../header/Header.stories";
import FooterStories from "../footer/Footer.stories";

import { Header } from "../header/HeaderComponent";
import { Footer } from "../footer/FooterComponent";
import { Concierge as ConciergeComponent } from "../concierge/ConciergeComponent";
import React, { useCallback, useRef, useState } from "react";

export default {
  title: "Concierge",
};

const placeholder = `Why should I care about Design Systems, and what are the main reasons to start one?

... or maybe you'd like to know something about kickstartDS... I know about that as well, so fire away!
`;

const questions = [
  "What is the definition of a Design System?",
  "What are the 5 main benefits of using Design Token in your Design System?",
  "What are the main reasons to prefer React as your frontend framework, especially when building a Design System?",
  "When do you need a Design System?",
  "How can I convince others of the value of having a Design System?",
  "How would I go about measuring the adoption of my Design System, to calculate a ROI?",
];

const index = [
  { title: "https://acorn.firefox.com/", url: "https://acorn.firefox.com/" },
  { title: "https://atlassian.design/", url: "https://atlassian.design/" },
  {
    title: "https://atomicdesign.bradfrost.com/",
    url: "https://atomicdesign.bradfrost.com/",
  },
  { title: "https://backlight.dev/", url: "https://backlight.dev/" },
  { title: "https://blog.damato.design/", url: "https://blog.damato.design/" },
  { title: "https://bradfrost.com/", url: "https://bradfrost.com/" },
  {
    title: "https://build.washingtonpost.com/",
    url: "https://build.washingtonpost.com/",
  },
  { title: "https://chakra-ui.com/", url: "https://chakra-ui.com/" },
  { title: "https://clarity.design/", url: "https://clarity.design/" },
  { title: "https://cloudscape.design/", url: "https://cloudscape.design/" },
  {
    title: "https://comet.discoveryeducation.com",
    url: "https://comet.discoveryeducation.com",
  },
  { title: "https://cultureamp.design/", url: "https://cultureamp.design/" },
  { title: "https://danmall.com/", url: "https://danmall.com/" },
  {
    title: "https://design-system.service.gov.uk",
    url: "https://design-system.service.gov.uk",
  },
  {
    title: "https://design-tokens.github.io/",
    url: "https://design-tokens.github.io/",
  },
  { title: "https://design.gitlab.com/", url: "https://design.gitlab.com/" },
  {
    title: "https://designstrategy.guide/",
    url: "https://designstrategy.guide/",
  },
  {
    title: "https://designsystem.digital.gov/",
    url: "https://designsystem.digital.gov/",
  },
  {
    title: "https://designsystem.webstandards.ca.gov",
    url: "https://designsystem.webstandards.ca.gov",
  },
  {
    title: "https://digitaldesign.vattenfall.com",
    url: "https://digitaldesign.vattenfall.com",
  },
  { title: "https://docs.astro.build/", url: "https://docs.astro.build/" },
  { title: "https://docs.tokens.studio/", url: "https://docs.tokens.studio/" },
  {
    title: "https://druids.datadoghq.com/",
    url: "https://druids.datadoghq.com/",
  },
  { title: "https://eightshapes.com/", url: "https://eightshapes.com/" },
  {
    title: "https://help.knapsack.cloud/",
    url: "https://help.knapsack.cloud/",
  },
  { title: "https://mui.com/", url: "https://mui.com/" },
  { title: "https://nextjs.org/", url: "https://nextjs.org/" },
  { title: "https://nordhealth.design/", url: "https://nordhealth.design/" },
  { title: "https://nuxtjs.org/", url: "https://nuxtjs.org/" },
  { title: "https://orbit.kiwi/", url: "https://orbit.kiwi/" },
  {
    title: "https://paste.twilio.design/",
    url: "https://paste.twilio.design/",
  },
  {
    title: "https://polaris.shopify.com/",
    url: "https://polaris.shopify.com/",
  },
  { title: "https://primer.style/", url: "https://primer.style/" },
  {
    title: "https://react-spectrum.adobe.com/",
    url: "https://react-spectrum.adobe.com/",
  },
  { title: "https://react.dev/", url: "https://react.dev/" },
  { title: "https://remix.run/", url: "https://remix.run/" },
  { title: "https://rivet.iu.edu/", url: "https://rivet.iu.edu/" },
  { title: "https://spectrum.adobe.com/", url: "https://spectrum.adobe.com/" },
  { title: "https://svelte.dev/", url: "https://svelte.dev/" },
  { title: "https://ux.mailchimp.com/", url: "https://ux.mailchimp.com/" },
  { title: "https://vuejs.org/", url: "https://vuejs.org/" },
  {
    title: "https://www.a11yproject.com/",
    url: "https://www.a11yproject.com/",
  },
  {
    title: "https://www.delldesignsystem.com/",
    url: "https://www.delldesignsystem.com/",
  },
  {
    title: "https://www.designbetter.co/",
    url: "https://www.designbetter.co/",
  },
  {
    title: "https://www.designsystemchecklist.com",
    url: "https://www.designsystemchecklist.com",
  },
  {
    title: "https://www.designsystems.com/",
    url: "https://www.designsystems.com/",
  },
  { title: "https://www.duetds.com/", url: "https://www.duetds.com/" },
  {
    title: "https://www.kickstartDS.com/",
    url: "https://www.kickstartDS.com/",
  },
  { title: "https://www.knapsack.cloud/", url: "https://www.knapsack.cloud/" },
  {
    title: "https://www.lightningdesignsystem.com",
    url: "https://www.lightningdesignsystem.com",
  },
  {
    title: "https://www.michaelmang.dev/",
    url: "https://www.michaelmang.dev/",
  },
  { title: "https://www.radix-ui.com/", url: "https://www.radix-ui.com/" },
  { title: "https://www.supernova.io/", url: "https://www.supernova.io/" },
];

const statusMessages = {
  idle: "Concierge is awaiting your request!",
  loading: "Working: Concierge is researching...",
  responding: "Working: Concierge is responding...",
  error: "Concierge is not available",
  canthelp: "Sorry, I couldn't find anything relevant to your question ☹️",
};

const dummySources = [
  {
    id: "source-0",
    thumbnail: "img/concierge/supernova.png",
    url: "https://designstrategy.guide/design-management/what-is-a-design-system-and-how-does-it-align-your-team-to-create-better-products/",
    title:
      "What is a design system and how does it align your team to create better products? - Design strategy guide",
    summary:
      "The motto of product design, “Consistency & Predictability”, is often forgotten. If you become known for your excellent design and user experience but fail to reproduce it as you grow, you’ll find yourself in a bit of a pickle. It takes some time to talk things through, decide the best course for your company and then create a system around this. Basically, a design system enables your business to design, realize, develop and scale with the utmost efficiency and on a consistently excellent basis.",
    sections: [
      {
        excerpt:
          "What is a design system?\nA design system is a continuously evolving single source of truth for the whole team that’s working on a project or product. It combines a UI kit, behavior and scale rules, code, and a brand book.\nIt is a collection of reusable components, guided by clear standards, that can be assembled to build any number of applications.\nOr as Chris Messina, tech evangelist and former Developer Experience Lead at Uber, puts it: “Design systems provide a convenient, centralized, and evolving map of a brand’s known product territories with directional pointers to help you explore new regions.”",
        relevance: "87.92",
      },
    ],
  },
  {
    id: "source-1",
    thumbnail: "img/concierge/supernova.png",
    url: "https://www.delldesignsystem.com/getting-started/about/",
    title: "About the Dell Design System - Dell Design System",
    summary:
      "What is a design system A design system is a library of reusable components governed by a set a foundational standards, such as color, typography, and grid. Additionally, guidelines and documentation accompany all components along with guiding patterns and best practices. Teams are encouraged to leverage the system and its documentation to build repeatable designs within applications or interfaces.",
    sections: [
      {
        excerpt:
          "What is a design system\nA design system is a library of reusable components governed by a set a foundational standards, such as color, typography, and grid. Additionally, guidelines and documentation accompany all components along with guiding patterns and best practices. Teams are encouraged to leverage the system and its documentation to build repeatable designs within applications or interfaces.",
        relevance: "87.78",
      },
    ],
  },
  {
    id: "source-2",
    thumbnail: "img/concierge/supernova.png",
    url: "https://bradfrost.com/reading/",
    title: "Reading | Brad Frost",
    summary:
      "Reading Here’s a list of books that I’m currently reading and have read over the years. It's aimed at driven, successful, overachiever, workaholic types, and helps shine some serious light on the traps and detrimental aspects of being wired for \"doing\" all the time. Factfulness Hans Rosling, Anna Rosling Rönnlund, Ola Rosling ★★★★★ A fantastic read about how our over dramatic and negative outlook on the world prevents us from seeing (and therefore recognizing and celebrating) all the progress that's been made in the world. Unsubscribe Jocelyn K. Glei ★★★★ This book has plenty of tactics for taming your inbox, and I read it immediately after Deep Work, which was a nice one-two punch.",
    sections: [
      {
        excerpt: "Design Systems",
        relevance: "87.51",
      },
    ],
  },
  {
    id: "source-3",
    thumbnail: "img/concierge/supernova.png",
    url: "https://www.supernova.io/blog/what-is-a-design-system",
    title:
      "What Is a Design System? The Definitive Guide – Blog – Supernova.io",
    summary:
      "Learn about all things design systems — including what they are, why you need them, and to create them. This might be a mouthful of a definition, but there’s a reason for that. To prove a point, I asked around our own team of dedicated design system professionals, and here are a couple of their definitions: “Repeatable solutions for commonly recurring problems” “A collection of design artifacts, and connection between design and developers” “Componentized delivery of designs, not just a style guide” Even if you search on Google, you’ll find equally different answers. Now that we know what design systems are and why you need them, let's go through what you should include in your design system.",
    sections: [
      {
        excerpt:
          "What is a design system?\nA design system is the source of truth, governing principles, and componentized delivery of design artifacts that repeatedly solves commonly recurring problems across an organization.\nThis might be a mouthful of a definition, but there’s a reason for that. If you go around asking people “what exactly is a design system?” you’ll get different answers from everyone. To prove a point, I asked around our own team of dedicated design system professionals, and here are a couple of their definitions:\n“Repeatable solutions for commonly recurring problems”\n“A collection of design artifacts, and connection between design and developers”\n“Componentized delivery of designs, not just a style guide”\nEven if you search on Google, you’ll find equally different answers. But the thing is, none of them are wrong, design systems are all of these definitions combined. The answers differ because it depends largely on who you’re asking. To a designer, a design system acts as a source of truth where they can set guidelines for how to use their designs. To a product manager, it's a way to ensure consistency across teams and eventually to the final product. And to a developer, it’s a shared language between them and designers.",
        relevance: "87.20",
      },
    ],
  },
  {
    id: "source-4",
    thumbnail: "img/concierge/supernova.png",
    url: "https://rivet.iu.edu/about/",
    title: "About Rivet 2 - Rivet Design System - Indiana University",
    summary:
      "About Rivet 2 Learn about IU's system for designing digital interfaces What is Rivet 2? # Instead, Rivet is intended to provide common markup, styles, and design guidelines for digital products built with or hosted by these tools. The pages created by the IU Web Framework use their own distinct markup and styles. You are not required to use the WCMS to manage a site using Rivet markup and styles.",
    sections: [
      {
        excerpt:
          "What is a design system? #\nA design system is a collection of templates, components, tools, and guidelines for designing digital interfaces at an organization.\nBy creating a common toolkit and set of standards for their teams, an organization can ensure a more consistent experience for their users across all of their digital properties, including websites, apps, email, and digital signs.\nDesign systems can also help teams create better products more quickly, as much of the work when it comes to usability, accessibility, and branding has already been done for them.\nThe Rivet design system is made up of five parts: layouts, components, utilities, tokens, and documentation.",
        relevance: "85.66",
      },
    ],
  },
];

const dummyAnswer = `Hey there!
  
A design system is a library of reusable components governed by a set a foundational standards, such as color, typography, and grid. Additionally, guidelines and documentation accompany all components along with guiding patterns and best practices. Teams are encouraged to leverage the system and its documentation to build repeatable designs within applications or interfaces.

My updated definition is as follows: A design system is the official story of how an organization designs and builds digital interfaces. It is a connected, package-managed, version-controlled software product that contains the smallest set of components and guidelines an organization needs to make digital products consistently, efficiently and happily.

If I have ~30 seconds in an elevator or over animated slides, I’ll lead with: Almost always, a design system offers a library of visual style and components documented and released as reusable code for developers and/or tool(s) for designers. A system may also offer guidance on accessibility, page layout, and editorial and less often branding, data viz, UX patterns, and other tools. A design system is adopted by and supported for other teams making experiences. These teams use it to develop and ship features more efficiently to form a more cohesive customer journey. A design system is made by an individual, team, and/or community. While some arise less formally, organizations now dedicate small to large squad(s) to develop and release system versions and processes over time.`;

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function chunkSubstr(str, size) {
  const numChunks = Math.ceil(str.length / size);
  const chunks = new Array(numChunks);

  for (let i = 0, o = 0; i < numChunks; ++i, o += size) {
    chunks[i] = str.substr(o, size);
  }

  return chunks;
}

const Page = () => {
  const textAreaRef = useRef(null);
  const [answer, setAnswer] = useState("");
  const [sources, setSources] = useState([]);
  const [statusCode, setStatusCode] = useState("idle");

  async function getData(resolve, reject, chunks) {
    if (chunks.length === 0) {
      return resolve();
    } else {
      const chunk = chunks.shift();
      await timeout(120);
      setAnswer((answer) => {
        return (answer ?? "") + chunk;
      });
      getData(resolve, reject, chunks);
    }
  }

  const handleConciergeConfirm = useCallback(async () => {
    setAnswer("");
    setStatusCode("loading");

    textAreaRef.current.disabled = true;

    timeout(1200)
      .then(() => {
        setSources(
          dummySources.map((dummySource) => {
            const url = new URL(dummySource.url);
            const domain = url.hostname
              .replaceAll("rivet.iu", "rivet.ui")
              .replaceAll(".", "_");
            const path = url.pathname.endsWith("/")
              ? url.pathname
                  .substring(1, url.pathname.length - 1)
                  .replaceAll("/", "-")
              : url.pathname
                  .substring(1, url.pathname.length)
                  .replaceAll("/", "-");

            return dummySource;
          })
        );
      })
      .then(() => {
        setStatusCode("responding");

        const chunks = chunkSubstr(dummyAnswer, 30);

        return new Promise((resolve, reject) =>
          getData(resolve, reject, chunks)
        );
      })
      .then(() => {
        setStatusCode("idle");
      });
  });

  function handleResetPrompt() {
    if (textAreaRef.current) {
      textAreaRef.current.value = "";
      textAreaRef.current.focus();
      textAreaRef.current.disabled = false;
    }
    setAnswer("");
    setStatusCode("idle");
  }

  const status = {
    code: statusCode,
    ...statusMessages,
  };

  return (
    <div ks-theme="dark" ks-inverted="true">
      <Header
        {...unpack(HeaderStories.args)}
        dark
        announcementBar={{
          content: "",
        }}
      />
      <ConciergeComponent
        placeholder={placeholder}
        answer={answer}
        sources={sources}
        index={index}
        status={status}
        questions={questions}
        ref={textAreaRef}
        handleResetPrompt={handleResetPrompt}
        handleConciergeConfirm={handleConciergeConfirm}
      />
      <Footer {...unpack(FooterStories.args)} dark />
    </div>
  );
};

const Template = (args) => <Page {...args} />;
export const Concierge = Template.bind({});
