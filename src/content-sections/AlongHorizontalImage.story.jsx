import {
  TextMedia,
  Section,
} from "@kickstartds/base";

import {
  Storytelling,
} from "@kickstartds/content";

export default {
  title: "Card Grid",
};

const Page = () => (
  <>
    <Section
      width="wide"
      mode="list"
      headline={{
        styleAs: "h2",
        content: "Vel eum iriure dolor",
        subheadline: "lorem ispum",
        align: "center",
      }}
    >
      <Storytelling
        box={{
          hAlign: 'center',
          headline: {
            align: null,
            content: 'Vel eum iriure dolor',
            level: 'h2',
            pageHeader: false,
            spaceAfter: 'none',
            styleAs: 'h2',
            subheadline: 'lorem ispum dolor sit amet'
          },
          link: {
            fillAnimation: false,
            href: '#',
            iconAfter: false,
            iconAnimation: false,
            iconBefore: false,
            label: '',
            newTab: false,
            size: 'medium',
            variant: 'clear'
          },
          text: `Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet.
### Lorem ipsum dolor sit amet

commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          
`,
          textAlign: 'left',
          vAlign: 'top'
        }}
        full
        image={{
          hAlign: 'center',
          order: {
            desktopImageLast: false,
            mobileImageLast: false
          },
          ratio: 'none',
          source: 'img/examples/horizontal-image.png',
          vAlign: 'top'
        }}
      />
    </Section>
  </>
);

const Template = (args) => <Page {...args} />;
export const AlongHorizontalImage = Template.bind({});
