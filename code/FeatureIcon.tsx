import * as React from "react";
import { Frame, addPropertyControls, ControlType } from "framer";
import { FeatureIcon as _FeatureIcon } from "@kiwicom/orbit-components";

export function FeatureIcon(props) {
  return <_FeatureIcon {...props} />;
}

addPropertyControls(FeatureIcon, {
  name: {
    type: ControlType.Enum,
    title: "Name",
    options: ["TicketFlexi", "TicketSaver", "TicketStandard"]
  }
});

FeatureIcon.defaultProps = {
  height: 55,
  width: 55,
  name: "TicketFlexi"
};
