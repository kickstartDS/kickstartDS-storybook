import { Section } from "@kickstartds/base";
import { Storytelling } from "@kickstartds/content";

const Recipe = () => (
  <>
    <Section
      spaceAfter="none"
      width="wide"
      headline={{
        content: "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat",
        styleAs: "h1",
      }}
    >

    </Section>
    <Section
      width="full"
      mode="list"
      gutter="none"
      spaceBefore="none"
    >
      <Storytelling
        backgroundColor="#FFEEBE"
        box={{
          headline: {
            align: null,
            content: "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis",
            level: "h2",
            pageHeader: false,
            spaceAfter: "none",
            styleAs: "h2",
          }
        }}
        full
        image={{
          order: {
            desktopImageLast: false,
          },
          ratio: "none",
          source: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        }}
      />
      <Storytelling
        backgroundColor="#F3CAC9"
        box={{
          headline: {
            align: null,
            content: "Molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum",
            level: "h2",
            pageHeader: false,
            spaceAfter: "none",
            styleAs: "h2",
          }
        }}
        full
        image={{
          order: {
            desktopImageLast: true,
          },
          ratio: "none",
          source: "https://images.unsplash.com/photo-1608142172575-b7c5bb9bb98f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        }}
      />
      <Storytelling
        backgroundColor="#CCE4EB"
        box={{
          headline: {
            align: null,
            content: "Iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor",
            level: "h2",
            pageHeader: false,
            spaceAfter: "none",
            styleAs: "h2",
          },
        }}
        full
        image={{
          order: {
            desktopImageLast: false,
          },
          ratio: "none",
          source: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        }}
      />
      <Storytelling
        backgroundColor="#FFDDF1"
        box={{
          headline: {
            align: null,
            content: "Molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum",
            level: "h2",
            pageHeader: false,
            spaceAfter: "none",
            styleAs: "h2",
          }
        }}
        full
        image={{
          order: {
            desktopImageLast: true,
          },
          ratio: "none",
          source: "https://images.unsplash.com/photo-1572635196184-84e35138cf62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80",
        }}
      />
    </Section>
  </>
);

export const Mosaic = Recipe.bind({});