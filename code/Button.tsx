import * as React from "react";
import { Frame, addPropertyControls, ControlType } from "framer";
import { Button as _Button } from "@kiwicom/orbit-components";

export function Button(props) {
  return <_Button {...props}>{props.text}</_Button>;
}

addPropertyControls(Button, {
  text: {
    type: ControlType.String,
    title: "Button Text"
  },
  size: {
    type: ControlType.Enum,
    title: "Size",
    options: ["small", "normal", "large"],
    optionTitles: ["Small", "Normal", "Large"]
  },
  type: {
    type: ControlType.Enum,
    title: "Type",
    options: [
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "critical",
      "facebook",
      "google",
      "white",
      "none"
    ],
    optionTitles: [
      "Primary",
      "Secondary",
      "Info",
      "Success",
      "Warning",
      "Critical",
      "Facebook",
      "Google",
      "White",
      "None"
    ]
  },
  bordered: {
    type: ControlType.Boolean,
    title: "Bordered"
  },
  circled: {
    type: ControlType.Boolean,
    title: "Circled"
  },
  disabled: {
    type: ControlType.Boolean,
    title: "Disabled"
  },
  href: {
    type: ControlType.String,
    title: "href"
  },
  loading: {
    type: ControlType.Boolean,
    title: "Loading"
  }
});

Button.defaultProps = {
  height: 44,
  width: 175,
  text: "Click me",
  size: "normal",
  type: "primary",
  bordered: false,
  circled: false,
  disabled: false,
  href: "#",
  loading: false
};
