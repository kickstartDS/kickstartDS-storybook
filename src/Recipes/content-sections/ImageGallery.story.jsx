import { ContentBox } from "@kickstartds/base/lib/content-box";
import { TextMedia } from "@kickstartds/base/lib/text-media";
import { Section } from "@kickstartds/base/lib/section";
import { Storytelling } from "@kickstartds/content/lib/storytelling";

const Recipe = () => (
  <>
    <Section
      width="narrow"
      mode="list"
      spaceAfter="none"
      headline={{
        styleAs: "h1",
        content: "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.",
        align: "left",
        spaceAfter: "small",
      }}
    >

    </Section>
    <Section
      spaceBefore="none"
      spaceAfter="small"
      width="max"
      mode="list"
    >
      <TextMedia
        media={[
          {
            image: {
              src: "https://images.pexels.com/photos/532568/pexels-photo-532568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            },
          },
        ]}
        mediaAlignment="above-center"
      />
    </Section>
    <Section
      spaceBefore="none"
      spaceAfter="small"
      width="wide"
      mode="list"
      gutter="large"
    >


      <Storytelling
        box={{
          hAlign: "center",
          headline: {
            align: null,
            content: "Vel eum iriure dolor",
            level: "h2",
            pageHeader: false,
            spaceAfter: "none",
            styleAs: "h2",
            subheadline: "lorem ispum dolor sit amet",
          },
          link: {
            fillAnimation: false,
            href: "#",
            iconAfter: false,
            iconAnimation: false,
            iconBefore: false,
            label: "",
            newTab: false,
            size: "medium",
            variant: "clear",
          },
          text: `Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet.`,
          textAlign: "left",
          vAlign: "center",
        }}
        full
        image={{
          hAlign: "center",
          order: {
            desktopImageLast: false,
            mobileImageLast: false,
          },
          ratio: "none",
          source: "https://images.unsplash.com/photo-1649425231920-e37a448099f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          vAlign: "top",
        }}
      />
      <Storytelling
        box={{
          hAlign: "center",
          headline: {
            align: null,
            content: "Vel eum iriure dolor",
            level: "h2",
            pageHeader: false,
            spaceAfter: "none",
            styleAs: "h2",
            subheadline: "lorem ispum dolor sit amet",
          },
          link: {
            fillAnimation: false,
            href: "#",
            iconAfter: false,
            iconAnimation: false,
            iconBefore: false,
            label: "",
            newTab: false,
            size: "medium",
            variant: "clear",
          },
          text: `Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet.`,
          textAlign: "left",
          vAlign: "center",
        }}
        full
        image={{
          hAlign: "center",
          order: {
            desktopImageLast: true,
            mobileImageLast: false,
          },
          ratio: "none",
          source: "https://images.unsplash.com/photo-1649367769288-20a0c06255f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          vAlign: "top",
        }}
      />
    </Section>

    <Section
      spaceBefore="none"
      spaceAfter="small"
      width="wide"
      mode="list"
    >
      <TextMedia
        media={[
          {
            image: {
              src: "https://images.pexels.com/photos/136413/pexels-photo-136413.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
              height: 853,
              width: 1280
            },
          },
        ]}
        mediaAlignment="above-center"
      />
    </Section>
    <Section
      spaceBefore="none"
      spaceAfter="small"
      width="default"
      mode="tile"
    >

      <ContentBox
        topic="Lorem Ipsum"
        text="Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan ."
      />
    </Section>
    <Section
      spaceBefore="none"
      spaceAfter="small"
      width="narrow"
      mode="list"
    >

      <TextMedia
        media={[
          {
            image: {
              src: "img/recipes/horizontal-image.png",
            },
          },
        ]}
        mediaAlignment="above-center"
      />
    </Section>
  </>
);

export const ImageGallery = Recipe.bind({});
