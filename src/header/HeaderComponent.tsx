import React, { FunctionComponent, HTMLAttributes } from "react";

import { Section } from "@kickstartds/base/lib/section";

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
  secondaryNavEntries,
  className,
  activeEntry,
  cta,
  announcementBar,
  ...props
}) => (
  <>
    <NavSkip />
    {announcementBar && announcementBar.content && (
      <AnnouncementBar
        {...announcementBar}
        targetSessionStorageKey="hideSubscriptionForm"
      />
    )}
    <header ks-component="kds.header">
      <div className={classnames(className, "kds-header")}>
        <Logo dark={dark} homeLink={homeLink} />
        {navEntries && navEntries.length > 0 && navEnabled && (
          <NavMain
            dark={dark}
            navEntries={navEntries}
            secondaryNavEntries={secondaryNavEntries}
            activeEntry={activeEntry}
            cta={cta}
          />
        )}
      </div>
    </header>
  </>
);
