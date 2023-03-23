import React, { FunctionComponent, HTMLAttributes } from "react";

import { NavMain } from "./nav/NavMainComponent";
import { NavSkip } from "./nav/NavSkipComponent";
import { Logo } from "../logo/LogoComponent";
import { AnnouncementBar } from "../announcement-bar/AnnouncementBarComponent";
import classnames from "classnames";

import { HeaderProps } from "./HeaderProps";

export const Header: FunctionComponent<
  HeaderProps & HTMLAttributes<HTMLDivElement>
> = ({
  dark,
  homeLink,
  navEnabled,
  navEntries,
  className,
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
          targetSessionStorageKey="hideSubscriptionForm"
        />
      )}
      <header data-component="kds.header">
        <div className={classnames(className, "kds-header")}>
          <Logo dark={dark} homeLink={homeLink} />
          {navEntries && navEntries.length > 0 && navEnabled && (
            <NavMain
              navEntries={navEntries}
              activeEntry={activeEntry}
              cta={cta}
            />
          )}
        </div>
      </header>
    </div>
    <div className="kds-header--spacer"></div>
  </>
);
