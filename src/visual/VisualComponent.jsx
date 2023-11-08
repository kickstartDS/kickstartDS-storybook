import { ButtonContext } from "@kickstartds/base/lib/button";
import { VisualContext } from "@kickstartds/content/lib/visual";
import { useContext } from "react";

export const VisualProvider = ({ children }) => {
  const Button = useContext(ButtonContext);
  const Visual = useContext(VisualContext);

  const ButtonGroup = ({ buttons = [] }) =>
    buttons.length ? (
      <>
        {buttons.map((button, i) =>
          button.label ? <Button {...button} key={i} /> : ""
        )}
      </>
    ) : null;

  const VisualComponent = ({ box = {}, ...props }) => {
    const { link, links, ...boxRest } = box;

    if (links?.length) {
      return (
        <ButtonContext.Provider value={ButtonGroup}>
          <Visual
            box={{ ...boxRest, link: { buttons: links, enabled: true } }}
            {...props}
          />
        </ButtonContext.Provider>
      );
    }
    return <Visual box={{ ...boxRest, link }} {...props} />;
  };
  return <VisualContext.Provider value={VisualComponent} children={children} />;
};
