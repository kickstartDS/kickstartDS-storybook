import {
  PostHead,
} from "@kickstartds/blog";

import { Picture } from "@kickstartds/base/lib/picture";

import {
  Contact,
} from "@kickstartds/content";

import {
  Section,
  TeaserBox,
  ContentBox,
  Button,
  Divider,
} from "@kickstartds/base";


import { Headline } from "@kickstartds/base/lib/headline";
import { PostAside } from "./post-aside/PostAsideComponent";
import { ShareBar } from "../share-bar/ShareBarComponent";

export const Post = () => (
  <>
    <Section
      spaceBefore="small"
      spaceAfter="default"
      mode="list"
      width="wide"
      className="l-section--blog"
    >
      <PostAside />

      <div className="c-post__content">
        <PostHead
          categories={[
            {
              label: "About kickstartDS",
            },
            {
              label: "Background",
            }
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
        <div class="c-html c-rich-text c-post-text">
          <p class="has-large-font-size"><em>#tldr:</em> We want to support you to create one library of components, patterns and tokens to be used in any frontend you need to give your digital touch points a consistent interface. Even shorter: we want to <strong>kickstart your design system</strong> implementation. 😎</p>
          <p class="has-large-font-size"><strong>Now you might wonder if or why you need that.</strong></p>

          <figure class="wp-block-video alignwide">
            <Picture
              src="https://picsum.photos/seed/kdscontentbox/500/300"
            />
            <figcaption>Storybook Controls panel in action</figcaption>
          </figure>

          <p>Let me provide some background. Jonas, founder of kickstartDS, and I have been working in the digital business all our professional life. We both have made our careers acting in different leading roles during the last two decades. Jonas from a development and tech perspective and I am from UX designers point of view. We both designed or coded patterns for the same things over and over again. Surely, we did rely on different frameworks in the past years. But never ever they met all our needs. </p>
          <figure class="wp-block-pullquote"><blockquote><p>Great components! Make the most out of your frontends by unifying their core – utilizing component and design tokens</p></blockquote></figure>
          <p>In the last years, when I was working for a huge software corporation I was involved in their design system initiative to help creating a unified library at scale, serving hundreds of interfaces. There was quite an energetic and enthusiastic team working on it and after a while we could proudly say that it was adapted globally. In the years before, any other attempt building a pattern library or design system language failed awfully. Mostly because of technical reasons, silo-thinking and poor possibilities to adapt into existing environments. And I heard about the same problems from a lot of people from my network.</p>
          <p>Jonas on the other hand developed tons of websites and online shops served equally by dozens of different backend solutions, as you can imagine. In most cases the frontend parts were not quite re-usable for the next job. That already made him and the Ruhmesmeile team develop a pattern library which filled that gap being the base for new frontend projects. </p>
          <p class="has-large-font-size"><strong>The past and present</strong></p>
          <p>In all those years we crossed our paths often. Both living and working in the lovely city of Bonn in Germany. We met on meetups, lean coffees, agile events or conferences. We even shared the offices in very early times as we were working for different companies. Each time helping and supporting each other with knowledge. </p>
          <p>When I stepped out of my former Job as UX Strategy Manager, I was looking to join or even create a startup. A place where I could continue to follow the holistic UX approach of developing a user centric business and a place to apply “new work” principles. At that time we met again, exchanging on what we are aiming for currently. <a href="https://ruhmesmeile.com/ueber-uns/unser-entwicklungsansatz" target="_blank" rel="noreferrer noopener">Ruhmesmeile</a>, the company behind kickstartDS, was hit hard by the Covid-19 crisis, clients stepped back from running projects and it was time to reform the agency. </p>
          <p>In this time, Jonas and I met and we decided to join forces and strive for the most modern solution to help SMEs and frontend development teams to build up their design systems putting <strong>frontend first!</strong> </p>
          <p>Markup is really important. Whenever new projects are planned people discuss about APIs, backends and other infrastructural topics, but never really about the the frontend. Because often the user interface is a given thing. It comes with the system or it can be put over in the the end. Nowadays experts talk more about <a rel="noreferrer noopener" href="https://jamstack.wtf/" data-type="URL" data-id="https://jamstack.wtf/" target="_blank">JAMstack</a>, where “JAM” stands for JavaScript, API and Markup, again putting markup literally in the end. We want to turn this, making the markup something that really matters. Because it is what your users see and interact with. It needs to be seamlessly consistent granting a first class experience. Easily accessible, performant and framework agnostic. It should become the foundation of your design system. </p>
          <p class="has-large-font-size"><strong>We strongly believe in the power of design systems. </strong></p>
          <p>Because it fosters a better collaboration and unites the work of design and dev teams and even further it heavily impacts these teams’ speed and ultimately the full user and customer experience.</p>
          <p>We bundled our knowledge and expertise and wrapped it into kickstartDS. It contains best practice&nbsp;patterns&nbsp;and well tested&nbsp;web components. All the while following the principles of the Atomic Design methodology. That’s why&nbsp;kickstartDS&nbsp;really is a ready to use framework, preventing&nbsp;developers from&nbsp;wasting time&nbsp;setting up the basics, while it&nbsp;enables designers&nbsp;to focus on neat UI challenges.</p>
          <p class="has-large-font-size"><strong>Today we are happy to announce the launch of our kickstartDS landing page</strong> </p>
          <p>This marks a huge milestone for us. We designed our own brand and to get all the things working whilst still finishing customer projects on the other storefront. This includes the work with two pilot customers using our kickstartDS frontend framework to build up their design system. </p>
          <p>But this is only the starting point. In the last weeks we conducted user interviews to validate our assumptions on how to develop a successful frontend framework which has the ability to scale and to form its very own community. Also the landing page and this blog itself are helpful tools to validate and explore these ideas. we are going to continue our discovery putting you, our customer and user, into the center of our doing. Customer first</p>
          <p>Therefore we need your feedback and support!  Use this blog, our <a rel="noreferrer noopener" href="https://www.kickstartds.com" target="_blank">website</a> or grow into our <a rel="noreferrer noopener" href="https://discord.gg/mwKzD5gejY" target="_blank">discord community </a>to start the conversation. We are eager to know what you think, take your wishes or to discuss anything else. </p>
          <p>Thank you! 🙏🏼 </p>
          <p></p>
        </div>
        <ShareBar />
      </div>

    </Section>
    <Section
      width="wide"
      spaceBefore="none"
      spaceAfter="none"
      align="center"
    >
      <Divider />
    </Section>
  </>
);
