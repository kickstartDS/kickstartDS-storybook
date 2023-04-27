import { ButtonContext } from "@kickstartds/base/lib/button";
import { StorytellingContext } from "@kickstartds/content/lib/storytelling";
import { useContext } from "react";

export const StorytellingProvider = ({ children }) => {
  const Button = useContext(ButtonContext);
  const Storytelling = useContext(StorytellingContext);

  const ButtonGroup = ({ buttons = [] }) =>
    buttons.length ? (
      <div className="c-storytelling__action">
        {buttons.map((button, i) =>
          button.label ? <Button {...button} key={i} /> : ""
        )}
      </div>
    ) : null;

  const StorytellingComponent = ({ box, ...props }) => {
    const { link, links, ...boxRest } = box;

    if (links?.length) {
      return (
        <ButtonContext.Provider value={ButtonGroup}>
          <Storytelling
            box={{ ...boxRest, link: { buttons: links } }}
            {...props}
          />
        </ButtonContext.Provider>
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
