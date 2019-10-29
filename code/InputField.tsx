import * as React from "react";
import { Frame, addPropertyControls, ControlType } from "framer";
import { InputField as _InputField } from "@kiwicom/orbit-components";

export function InputField(props) {
  return <_InputField {...props} />;
}

addPropertyControls(InputField, {});

InputField.defaultProps = {
  height: 45,
  width: 200
};
