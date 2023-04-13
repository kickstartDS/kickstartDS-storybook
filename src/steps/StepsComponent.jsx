import { ContentBox } from "@kickstartds/base/lib/content-box";
import { Picture } from "@kickstartds/base/lib/picture";

export const Steps = ({ home }) => (
  <>
    <div className="kds-steps">
      <ContentBox
        align="center"
        image="img/landingpage/start.svg"
        topic="Start"
      />
      <div className="kds-steps__arrow">
        <Picture src="patterns/progress-arrow.svg" />
      </div>
      <ContentBox
        align="center"
        image="img/landingpage/design.svg"
        topic="Design"
      />
      <div className="kds-steps__arrow">
        <Picture src="patterns/progress-arrow.svg" />
      </div>
      <ContentBox
        align="center"
        image="img/landingpage/configure.svg"
        topic="Configure"
      />
      <div className="kds-steps__arrow">
        <Picture src="patterns/progress-arrow.svg" />
      </div>
      <ContentBox
        align="center"
        image="img/landingpage/collect.svg"
        topic="Collect"
      />
      <div className="kds-steps__arrow">
        <Picture src="patterns/progress-arrow.svg" />
      </div>
      <ContentBox
        align="center"
        image="img/landingpage/publish.svg"
        topic="Publish"
      />
    </div>
  </>
);
