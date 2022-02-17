import {
  Headline,
  Button,
  Icon,
  RichText,
} from "@kickstartds/base";

export const ShareBar = () => (
  <>
    <div className="c-share-bar">
      <Headline
        content="Share this article"
        level="h3"
      />
      <div className="c-share-bar__list">
        <Button
          className="c-share-bar__icon"
          variant="clear"
          size="default"
          iconAfter
          icon={{
            icon: "twitter",
          }}
        />
        <Button
          className="c-share-bar__icon"
          variant="clear"
          size="default"
          iconAfter
          icon={{
            icon: "linkedin",
          }}
        />
        <Button
          className="c-share-bar__icon"
          variant="clear"
          size="default"
          iconAfter
          icon={{
            icon: "email",
          }}
        />
      </div>
    </div>
  </>
);
