import { LinkButtonContext } from "@kickstartds/base/lib/link-button";
import { StorytellingContext } from "@kickstartds/content/lib/storytelling";
import { useContext } from "react";

export const StorytellingProvider = ({ children }) => {
  const LinkButton = useContext(LinkButtonContext);
  const Storytelling = useContext(StorytellingContext);

  const ButtonGroup = ({ buttons = [] }) =>
    buttons.length ? (
      <div className="c-storytelling__action">
        {buttons.map((button, i) =>
          button.label ? <LinkButton {...button} key={i} /> : ""
        )}
      </div>
    ) : null;

  const StorytellingComponent = ({ box, ...props }) => {
    const { link, ...boxRest } = box;
    return (
      <LinkButtonContext.Provider value={ButtonGroup}>
        <Storytelling
          box={{ ...boxRest, link: { buttons: link } }}
          {...props}
        />
      </LinkButtonContext.Provider>
    );
  };

  return (
    <StorytellingContext.Provider
      value={StorytellingComponent}
      children={children}
    />
  );
};
