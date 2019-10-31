import * as React from "react";
import { Frame, addPropertyControls, ControlType } from "framer";
import {
  NavigationList as _NavigationList,
  NavigationBar as _NavigationBar,
  ButtonLink as _ButtonLink,
  CountryFlag as _CountryFlag
} from "@kiwicom/orbit-components";

export function NavigationBar(props) {
  return (
    <div style={{ height: "1000px" }}>
      <_NavigationBar>
        <_NavigationList type="inline">
          <_ButtonLink iconLeft={<_CountryFlag />} type="secondary" transparent>
            English
          </_ButtonLink>
          <_ButtonLink type="secondary" transparent>
            EUR - €
          </_ButtonLink>
          <_ButtonLink type="secondary" transparent>
            Help
          </_ButtonLink>
          <_ButtonLink type="secondary" transparent>
            Starred
          </_ButtonLink>
          <_ButtonLink type="secondary" transparent>
            My Bookings
          </_ButtonLink>
        </_NavigationList>
      </_NavigationBar>
    </div>
  );
}

NavigationBar.defaultProps = {
  height: 75,
  width: 1152
};
