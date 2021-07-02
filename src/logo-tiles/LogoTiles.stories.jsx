import { LogoTiles } from "@kickstartds/content/lib/logo-tiles";

LogoTiles.displayName = "LogoTiles";
const Template = (args) => <LogoTiles {...args} />;

export default {
  title: "Content/Siegel",
  component: LogoTiles,
};

export const Default = Template.bind({});
Default.args = {
  logos: [
    {
      alt: "Erfolgsfaktor Familie",
      src:
        "https://maxcluster.de/images/d/8/9/6/d/d896daf31d331dcce9a6d7abfb93843157c9cd46-eff.jpg",
      height: 336,
      width: 336,
    },
    {
      alt: "Familienfreundliches Unternehmen",
      src: "https://maxcluster.de/user/pages/25.jobs/familenfreundlich.png",
      height: 350,
      width: 350,
    },
    {
      alt: "Kooperationspartner der FHDW",
      src: "https://maxcluster.de/user/pages/25.jobs/FHDW_Logo_RGB.jpg",
      height: 337,
      width: 841,
    },
    {
      alt: "Kooperationspartner von it´s owl",
      src: "https://maxcluster.de/user/pages/25.jobs/logo-its-owl.png",
      height: 358,
      width: 500,
    },
  ],
};
