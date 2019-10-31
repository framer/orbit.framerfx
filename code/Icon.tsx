import * as React from "react";
import { Frame, addPropertyControls, ControlType } from "framer";
import * as Icons from "@kiwicom/orbit-components/lib/icons";

export function Icon(props) {
  let OrbitIcon = Icons[props.icon];

  return <OrbitIcon {...props} />;
}

addPropertyControls(Icon, {
  icon: {
    type: ControlType.String,
    title: "Icon"
  },
  color: {
    type: ControlType.Enum,
    title: "Color",
    options: [
      "primary",
      "secondary",
      "tertiary",
      "info",
      "success",
      "warning",
      "critical",
      "default"
    ],
    optionTitles: [
      "Primary",
      "Secondary",
      "Tertiary",
      "Info",
      "Success",
      "Warning",
      "Critical",
      "Default"
    ]
  },
  size: {
    type: ControlType.Enum,
    title: "Size",
    options: ["small", "medium", "large"],
    optionTitles: ["Small", "Medium", "Large"]
  }
});

Icon.defaultProps = {
  height: 25,
  width: 25,
  icon: "Airplane",
  color: "primary",
  size: "medium"
};
