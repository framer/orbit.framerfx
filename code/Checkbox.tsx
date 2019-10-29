import * as React from "react";
import { Frame, addPropertyControls, ControlType } from "framer";
import { Checkbox as _Checkbox } from "@kiwicom/orbit-components";

export function Checkbox(props) {
  const [checked, setChecked] = React.useState(false);

  return (
    <_Checkbox
      {...props}
      onChange={() => setChecked(!checked)}
      checked={props.checked ? props.checked : checked}
    />
  );
}

addPropertyControls(Checkbox, {
  checked: {
    type: ControlType.Boolean,
    title: "Checked"
  },
  disabled: {
    type: ControlType.Boolean,
    title: "Disabled"
  },
  hasError: {
    type: ControlType.Boolean,
    title: "Error"
  },
  label: {
    type: ControlType.String,
    title: "Label"
  }
});

Checkbox.defaultProps = {
  height: 20,
  width: 100,
  disabled: false,
  checked: false,
  hasError: false,
  label: "Checkbox"
};
