import * as React from "react";
import { Frame, addPropertyControls, ControlType } from "framer";
import { InputField as _InputField } from "@kiwicom/orbit-components";

export function InputField(props) {
  return <_InputField {...props} />;
}

addPropertyControls(InputField, {
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
  placeholder: {
    type: ControlType.String,
    title: "Placeholder"
  },
  label: {
    type: ControlType.String,
    title: "Label"
  },
  type: {
    type: ControlType.Enum,
    title: "Type",
    options: ["text", "number", "email", "password", "passportid"],
    optionTitles: ["Text", "Number", "Email", "Password", "Passport"]
  },
  size: {
    type: ControlType.Enum,
    title: "Size",
    options: ["small", "normal"],
    optionTitles: ["Small", "Normal"]
  },
  inlineLabel: {
    type: ControlType.Boolean,
    title: "Inline Label"
  }
});

InputField.defaultProps = {
  height: 65,
  width: 300,
  disabled: false,
  placeholder: "email@address.com",
  label: "Email Address",
  size: "normal",
  type: "email",
  required: false,
  inlineLabel: false,
  error: false
};
