import { LinkButtonContext } from "@kickstartds/base/lib/link-button";
import { VisualContext } from "@kickstartds/content/lib/visual";
import { useContext } from "react";

export const VisualProvider = ({ children }) => {
  const LinkButton = useContext(LinkButtonContext);
  const Visual = useContext(VisualContext);

  const ButtonGroup = ({ buttons = [] }) =>
    buttons.length ? (
      <>
        {buttons.map((button, i) =>
          button.label ? <LinkButton {...button} key={i} /> : ""
        )}
      </>
    ) : null;

  const VisualComponent = ({ box, ...props }) => {
    const { link, links, ...boxRest } = box;

    if (links?.length) {
      return (
        <LinkButtonContext.Provider value={ButtonGroup}>
          <Visual box={{ ...boxRest, link: { buttons: links, enabled: true } }} {...props} />
        </LinkButtonContext.Provider>
      );
    }
    return <Visual box={{ ...boxRest, link }} {...props} />;
  };
  return <VisualContext.Provider value={VisualComponent} children={children} />;
};
