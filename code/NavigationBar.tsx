import * as React from "react";
import { Frame, addPropertyControls, ControlType } from "framer";
import {
  NavigationList as _NavigationList,
  NavigationBar as _NavigationBar,
  CountryFlag as _CountryFlag
} from "@kiwicom/orbit-components";

export function NavigationBar(props) {
  return (
    <div style={{ height: "1000px" }}>
      <_NavigationBar>
        <_NavigationList type="inline"></_NavigationList>
      </_NavigationBar>
    </div>
  );
}

NavigationBar.defaultProps = {
  height: 75,
  width: 1152
};
