import * as React from "react";
import { Frame, addPropertyControls, ControlType } from "framer";
import { DestinationHeader as _DestinationHeader } from "@kiwicom/orbit-components";

export function DestinationHeader(props) {
  return <_DestinationHeader {...props} />;
}

addPropertyControls(DestinationHeader, {
  destinationCity: {
    type: ControlType.String,
    title: "Departure City"
  },
  image: {
    type: ControlType.String,
    title: "Image"
  }
});

DestinationHeader.defaultProps = {
  height: 120,
  width: 500,
  destinationCity: "Paris",
  image: "paris_fr"
};
