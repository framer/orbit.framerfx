import * as React from "react";
import { Frame, addPropertyControls, ControlType } from "framer";
import { InputStepper as _InputStepper } from "@kiwicom/orbit-components";

export function InputStepper(props) {
  return <_InputStepper {...props} />;
}

addPropertyControls(InputStepper, {
  disabled: {
    type: ControlType.Boolean,
    title: "Disabled"
  },
  required: {
    type: ControlType.Boolean,
    title: "Required"
  },
  error: {
    type: ControlType.Boolean,
    title: "Error"
  },
  label: {
    type: ControlType.String,
    title: "Label"
  },
  size: {
    type: ControlType.Enum,
    title: "Size",
    options: ["small", "normal"],
    optionTitles: ["Small", "Normal"]
  }
});

InputStepper.defaultProps = {
  height: 45,
  width: 300,
  disabled: false,
  label: "",
  size: "normal",
  required: false,
  inlineLabel: false,
  error: false
};
