import { PostHead, PostAside } from "@kickstartds/blog";

import { Picture } from "@kickstartds/base/lib/picture";

import { Contact } from "@kickstartds/content";

import {
  Section,
  TeaserBox,
  ContentBox,
  Button,
  Divider,
} from "@kickstartds/base";

import { TextField } from "@kickstartds/form";

import { Header } from "../header/HeaderComponent";
import { Footer } from "../footer/FooterComponent";
import { Cta } from "../cta/CtaComponent";
import FooterStories from "../footer/Footer.stories";
import { Headline } from "@kickstartds/base/lib/headline";

export default {
  title: "Blog Post",
};

const Page = () => (
  <>
    <Header />
    <Section
      spaceBefore="default"
      spaceAfter="default"
      mode="list"
      width="wide"
      className="l-section--blog"
    >
      <div className="c-post__content">
        <PostHead
          categories={[
            {
              label: "About kickstartDS",
            },
            {
              label: "Background",
            },
          ]}
          headline={{
            content: "Why we are creating kickstartDS",
            level: "h1",
            pageHeader: false,
            spaceAfter: "none",
          }}
          image={{
            src: "/img/why-kickstart-Design-System.svg",
          }}
        />
        <div className="c-html c-rich-text c-post-text">
          <p className="has-large-font-size">
            <em>#tldr:</em> We want to support you to create one library of
            components, patterns and tokens to be used in any frontend you need
            to give your digital touch points a consistent interface. Even
            shorter: we want to <strong>kickstart your design system</strong>{" "}
            implementation. 😎
          </p>
          <p className="has-large-font-size">
            <strong>Now you might wonder if or why you need that.</strong>
          </p>

          <figure className="wp-block-video alignwide">
            <Picture src="https://picsum.photos/seed/kdscontentbox/500/300" />
            <figcaption>Storybook Controls panel in action</figcaption>
          </figure>

          <p>
            Let me provide some background. Jonas, founder of kickstartDS, and I
            have been working in the digital business all our professional life.
            We both have made our careers acting in different leading roles
            during the last two decades. Jonas from a development and tech
            perspective and I am from UX designers point of view. We both
            designed or coded patterns for the same things over and over again.
            Surely, we did rely on different frameworks in the past years. But
            never ever they met all our needs.{" "}
          </p>
          <figure className="wp-block-pullquote">
            <blockquote>
              <p>
                Great components! Make the most out of your frontends by
                unifying their core – utilizing component and design tokens
              </p>
            </blockquote>
          </figure>
          <p>
            In the last years, when I was working for a huge software
            corporation I was involved in their design system initiative to help
            creating a unified library at scale, serving hundreds of interfaces.
            There was quite an energetic and enthusiastic team working on it and
            after a while we could proudly say that it was adapted globally. In
            the years before, any other attempt building a pattern library or
            design system language failed awfully. Mostly because of technical
            reasons, silo-thinking and poor possibilities to adapt into existing
            environments. And I heard about the same problems from a lot of
            people from my network.
          </p>
          <p>
            Jonas on the other hand developed tons of websites and online shops
            served equally by dozens of different backend solutions, as you can
            imagine. In most cases the frontend parts were not quite re-usable
            for the next job. That already made him and the Ruhmesmeile team
            develop a pattern library which filled that gap being the base for
            new frontend projects.{" "}
          </p>
          <p className="has-large-font-size">
            <strong>The past and present</strong>
          </p>
          <p>
            In all those years we crossed our paths often. Both living and
            working in the lovely city of Bonn in Germany. We met on meetups,
            lean coffees, agile events or conferences. We even shared the
            offices in very early times as we were working for different
            companies. Each time helping and supporting each other with
            knowledge.{" "}
          </p>
          <p>
            When I stepped out of my former Job as UX Strategy Manager, I was
            looking to join or even create a startup. A place where I could
            continue to follow the holistic UX approach of developing a user
            centric business and a place to apply “new work” principles. At that
            time we met again, exchanging on what we are aiming for currently.{" "}
            <a
              href="https://ruhmesmeile.com/ueber-uns/unser-entwicklungsansatz"
              target="_blank"
              rel="noreferrer noopener"
            >
              Ruhmesmeile
            </a>
            , the company behind kickstartDS, was hit hard by the Covid-19
            crisis, clients stepped back from running projects and it was time
            to reform the agency.{" "}
          </p>
          <p>
            In this time, Jonas and I met and we decided to join forces and
            strive for the most modern solution to help SMEs and frontend
            development teams to build up their design systems putting{" "}
            <strong>frontend first!</strong>{" "}
          </p>
          <p>
            Markup is really important. Whenever new projects are planned people
            discuss about APIs, backends and other infrastructural topics, but
            never really about the the frontend. Because often the user
            interface is a given thing. It comes with the system or it can be
            put over in the the end. Nowadays experts talk more about{" "}
            <a
              rel="noreferrer noopener"
              href="https://jamstack.wtf/"
              data-type="URL"
              data-id="https://jamstack.wtf/"
              target="_blank"
            >
              JAMstack
            </a>
            , where “JAM” stands for JavaScript, API and Markup, again putting
            markup literally in the end. We want to turn this, making the markup
            something that really matters. Because it is what your users see and
            interact with. It needs to be seamlessly consistent granting a first
            class experience. Easily accessible, performant and framework
            agnostic. It should become the foundation of your design system.{" "}
          </p>
          <p className="has-large-font-size">
            <strong>
              We strongly believe in the power of design systems.{" "}
            </strong>
          </p>
          <p>
            Because it fosters a better collaboration and unites the work of
            design and dev teams and even further it heavily impacts these
            teams’ speed and ultimately the full user and customer experience.
          </p>
          <p>
            We bundled our knowledge and expertise and wrapped it into
            kickstartDS. It contains best practice&nbsp;patterns&nbsp;and well
            tested&nbsp;web components. All the while following the principles
            of the Atomic Design methodology. That’s
            why&nbsp;kickstartDS&nbsp;really is a ready to use framework,
            preventing&nbsp;developers from&nbsp;wasting time&nbsp;setting up
            the basics, while it&nbsp;enables designers&nbsp;to focus on neat UI
            challenges.
          </p>
          <p className="has-large-font-size">
            <strong>
              Today we are happy to announce the launch of our kickstartDS
              landing page
            </strong>{" "}
          </p>
          <p>
            This marks a huge milestone for us. We designed our own brand and to
            get all the things working whilst still finishing customer projects
            on the other storefront. This includes the work with two pilot
            customers using our kickstartDS frontend framework to build up their
            design system.{" "}
          </p>
          <p>
            But this is only the starting point. In the last weeks we conducted
            user interviews to validate our assumptions on how to develop a
            successful frontend framework which has the ability to scale and to
            form its very own community. Also the landing page and this blog
            itself are helpful tools to validate and explore these ideas. we are
            going to continue our discovery putting you, our customer and user,
            into the center of our doing. Customer first
          </p>
          <p>
            Therefore we need your feedback and support! Use this blog, our{" "}
            <a
              rel="noreferrer noopener"
              href="https://www.kickstartds.com"
              target="_blank"
            >
              website
            </a>{" "}
            or grow into our{" "}
            <a
              rel="noreferrer noopener"
              href="https://discord.gg/mwKzD5gejY"
              target="_blank"
            >
              discord community{" "}
            </a>
            to start the conversation. We are eager to know what you think, take
            your wishes or to discuss anything else.{" "}
          </p>
          <p>Thank you! 🙏🏼 </p>
          <p></p>
        </div>
      </div>

      <PostAside
        author={{
          headline: "Published by",
          image: {
            src: "/img/blog/web_profile_images.png",
            width: "250",
            height: "250",
          },
          title: "Daniel Ley",
          links: [
            {
              icon: "twitter",
              label: "@DLey_de",
              href: "https://twitter.com/DLey_de",
            },
            {
              icon: "email",
              label: "daniel.ley@kickstartds.com",
              href: "mailto:daniel.ley@kickstartds.com",
            },
          ],
          copy: "Co-Founder + UX Strategist with heart & soul",
        }}
        meta={{
          items: [
            {
              icon: "date",
              text: "10.02.2022",
            },
            {
              icon: "time",
              text: "5 min read",
            },
          ],
        }}
        shareBar={{
          headline: "Share this article",
          headlineLevel: "h3",
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
        }}
      />
    </Section>
    <Section width="wide" spaceBefore="none" spaceAfter="none">
      <Divider />
    </Section>
    <Section
      width="narrow"
      mode="list"
      spaceBefore="default"
      spaceAfter="small"
      gutter="large"
      headline={{
        content: "Get to know us",
        align: "center",
      }}
    >
      <Cta
        headline={{
          content: "Find out if kickstartDS suits your project",
        }}
        storytelling={{
          image: {
            order: {
              desktopImageLast: true,
              mobileImageLast: true,
            },
            source: "img/contact.svg",
          },
          box: {
            headline: {
              content: "Find out if kickstartDS suits your project",
              level: "h2",
            },
            text: "Get in contact with our team",

            link: {
              label: "Talk to us now",
              variant: "solid",
              size: "default",
              iconAfter: true,
              icon: {
                icon: "chevron-right",
              },
            },
          },
        }}
      />
    </Section>
    <Section width="narrow" spaceBefore="small">
      <Contact
        image={{
          src: "/img/blog/web_profile_images.png",
          width: "250",
          height: "250",
        }}
        title="Daniel Ley"
        subtitle="Co-Founder + UX Strategist with heart & soul"
        links={[
          {
            icon: "twitter",
            label: "@DLey_de",
            href: "https://twitter.com/DLey_de",
          },
          {
            icon: "email",
            label: "daniel.ley@kickstartds.com",
            href: "mailto:daniel.ley@kickstartds.com",
          },
        ]}
        copy={`More than 20 years ago I started creating user interfaces and web style guides, corporate design manuals and in the past years the first digital Design Systems.

After working in a large tech corporation for a long time I very well know todays problems in gaining and maintaining consistency in UIs.`}
      />
    </Section>

    <Section
      background="accent"
      spaceAfter="small"
      spaceBefore="default"
      width="wide"
      headline={{
        content: "Dig deeper ⛏️",
        align: "center",
      }}
    >
      <TeaserBox
        topic="Back to blog"
        text="Have a look through our blog posts about all aspects kickstartDS, technical or not."
        image="/img/blog/back-to-blog.svg"
        imageSpacing
        link={{
          label: "Read more",
          variant: "outline",
          size: "small",
        }}
      />
      <TeaserBox
        topic="kickstartDS"
        text="Explore kickstartDS, and how it can help yout team create consistent interfaces super fast."
        image="/img/blog/kds.svg"
        imageSpacing
        link={{
          label: "Learn more",
          variant: "outline",
          size: "small",
        }}
      />
      <TeaserBox
        topic="Storybook"
        text="Discover all the different components included with kickstartDS, especially their controls and tokens."
        image="/img/blog/storybook.svg"
        imageSpacing
        link={{
          label: "Explore components",
          variant: "outline",
          size: "small",
        }}
      />
    </Section>
    <Section
      spaceBefore="none"
      spaceAfter="none"
      width="narrow"
      mode="list"
      background="accent"
      headline={{
        content: "Subscribe to our newsletter",
        level: "h3",
        styleAs: "h3",
        align: "center",
        subheadline: "Stay up to date",
      }}
    >
      <div className="c-form">
        <TextField placeholder="Enter your email" />
        <Button label="subscribe" size="default" />
      </div>
    </Section>

    <Footer {...FooterStories.args} />
  </>
);

const Template = (args) => <Page {...args} />;
export const BlogPost = Template.bind({});
