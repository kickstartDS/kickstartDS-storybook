import { ContactContext } from "@kickstartds/content/lib/contact";
import classnames from "classnames";
import { Picture } from "@kickstartds/base/lib/picture";
import { Headline } from "@kickstartds/base/lib/headline";
import { RichText } from "@kickstartds/base/lib/rich-text";
import { Icon } from "@kickstartds/base/lib/icon";

const Contact = ({
  image,
  title,
  subtitle,
  twitter,
  email,
  copy,
  className,
  ...props
}) => (
  <address className={classnames("c-contact", className)} {...props}>
    {image && image.src ? (
      <div className="c-contact__image">
        <Picture {...image} />
      </div>
    ) : (
      ""
    )}
    <div className="c-contact__body">
      {title && (
        <Headline
          level="h3"
          content={title}
          subheadline={subtitle}
          align="left"
          spaceAfter="none"
        />
      )}
      {twitter || email ? (
        <ul className="c-contact__links">
          {twitter && (
            <li>
              <Icon icon="twitter" />
              <a
                className="c-contact__link"
                href={`https://twitter.com/${twitter}`}
              >
                @{twitter}
              </a>
            </li>
          )}
          {email && (
            <li>
              <Icon icon="email" />
              <a className="c-contact__link" href={`mailto:${email}`}>
                {email}
              </a>
            </li>
          )}
        </ul>
      ) : (
        ""
      )}
      {copy && <RichText text={copy} className="c-contact__copy" />}
    </div>
  </address>
);

export const ContactProvider = (props) => (
  <ContactContext.Provider value={Contact} {...props} />
);
