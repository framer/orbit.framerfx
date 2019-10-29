import * as React from "react";
import { Frame, addPropertyControls, ControlType } from "framer";
import { RatingStars as _RatingStars } from "@kiwicom/orbit-components";

export function RatingStars(props) {
  return <_RatingStars {...props} />;
}

addPropertyControls(RatingStars, {
  rating: {
    type: ControlType.Number,
    title: "Rating",
    min: 0,
    max: 5,
    step: 0.1,
    displayStepper: true
  },
  color: {
    type: ControlType.Enum,
    title: "Color",
    options: ["primary", "secondary"]
  },
  showEmpty: {
    type: ControlType.Boolean,
    title: "Show Empty"
  },
  size: {
    type: ControlType.Enum,
    title: "Size",
    options: ["small", "medium", "large"]
  }
});

RatingStars.defaultProps = {
  height: 24,
  width: 120,
  rating: 3,
  color: "primary",
  showEmpty: true,
  size: "medium"
};
