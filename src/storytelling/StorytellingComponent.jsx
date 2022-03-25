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
    const { link, links, ...boxRest } = box;

    if (links?.length) {
      return (
        <LinkButtonContext.Provider value={ButtonGroup}>
          <Storytelling
            box={{ ...boxRest, link: { buttons: links } }}
            {...props}
          />
        </LinkButtonContext.Provider>
      );
    }
    return <Storytelling box={{ ...boxRest, link }} {...props} />;
  };

  return (
    <StorytellingContext.Provider
      value={StorytellingComponent}
      children={children}
    />
  );
};
