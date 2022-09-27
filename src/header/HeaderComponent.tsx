import React, { FunctionComponent, HTMLAttributes } from "react";

import { NavMain } from "./nav/NavMainComponent";
import { NavSkip } from "./nav/NavSkipComponent";
import { Logo } from "../logo/LogoComponent";
import { AnnouncementBar } from "../announcement-bar/AnnouncementBarComponent";

// import "./Header";

import { HeaderProps } from "./HeaderProps";

export const Header: FunctionComponent<HeaderProps & HTMLAttributes<HTMLDivElement>> =
  ({
    light,
    homeLink,
    navEnabled,
    navEntries,
    activeEntry,
    cta,
    announcementBar,
    ...props
  }) => (
    <>
      <div {...props} className="kds-header__wrap">
        <NavSkip />
        {announcementBar && announcementBar.content && (
          <AnnouncementBar
            {...announcementBar}
            linkHref="#notification-subscribe"
            targetSessionStorageKey="hideSubscriptionForm"
          />
        )}
        <header data-component="kds.header">
          <div className={`kds-header ${light ? "kds-header--light" : ""}`}>
            <Logo home={homeLink} />
            {navEntries && navEntries.length > 0 && navEnabled && (
              <NavMain
                light={light}
                navEntries={navEntries}
                activeEntry={activeEntry}
                cta={cta}
              />
            )}
          </div>
        </header>
      </div>
      {!light && <div className="kds-header--spacer"></div>}
    </>
  );
