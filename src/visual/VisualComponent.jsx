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

  const VisualComponent = (props) => (
    <LinkButtonContext.Provider value={ButtonGroup}>
      <Visual {...props} />
    </LinkButtonContext.Provider>
  );

  return <VisualContext.Provider value={VisualComponent} children={children} />;
};
