import { Headline } from "@kickstartds/base/lib/headline";
import { Link } from "@kickstartds/base/lib/link";
import { Icon } from "@kickstartds/base/lib/icon";

const ShareBarLink = ({ icon, newTab, ...props }) => (
  <Link
    className="c-post-aside__share-link"
    {...(newTab ? { target: "_blank", rel: "noopener" } : {})}
    {...props}
  >
    <Icon icon={icon} />
  </Link>
);

export const ShareBar = ({
  links = [],
  headline = "Share this article",
  headlineLevel = "h3",
}) => (
  <div className="c-share-bar c-post-aside__share-bar">
    <Headline content={headline} level={headlineLevel} />
    {links.length
      ? links.map((link, i) => <ShareBarLink {...link} key={i} />)
      : ""}
  </div>
);
