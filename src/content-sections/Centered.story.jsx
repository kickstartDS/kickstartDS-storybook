import {
  TextMedia,
  Section,
} from "@kickstartds/base";

export default {
  title: "Card Grid",
};

const Page = () => (
  <>
    <Section
      width="narrow"
      mode="list"
      headline={{
        styleAs: "h2",
        content: "Vel eum iriure dolor",
        subheadline: "lorem ispum",
        align: "center",
      }}
    >
      <TextMedia
        media={[
          {
            caption: "Duis autem vel eum",
            image: {
              src: 'https://images.unsplash.com/photo-1558799707-687a753aba75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
            }
          }
        ]}
        mediaAlignment="above-center"
        text={`Duis autem vel eum iriure dolor in **hendrerit** in vulputate velit esse [molestie](http://example.com/) consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril **delenit augue** duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.   

### Lorem ipsum dolor sit amet

commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.

> Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.   

Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.

- Ut wisi enim ad minim veniam
- quis nostrud exerci tation ullamcorper
- suscipit lobortis nisl ut aliquip ex ea

At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.`}
      />
      <TextMedia
        media={[
          {
            caption: "Duis autem vel eum",
            image: {
              src: 'https://images.unsplash.com/photo-1421757295538-9c80958e75b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80',
            }
          }
        ]}
        mediaAlignment="above-center"
        text={`Duis autem vel eum iriure dolor in **hendrerit** in vulputate velit esse consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril **delenit augue** duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.`}
      />
    </Section>
  </>
);

const Template = (args) => <Page {...args} />;
export const Centered = Template.bind({});
