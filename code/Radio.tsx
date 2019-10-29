import * as React from "react";
import { Frame, addPropertyControls, ControlType } from "framer";
import { Radio as _Radio } from "@kiwicom/orbit-components";

export function Radio(props) {
  const [checked, setChecked] = React.useState(false);

  return (
    <_Radio
      {...props}
      onChange={() => setChecked(!checked)}
      checked={props.checked ? props.checked : checked}
    />
  );
}

addPropertyControls(Radio, {
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

Radio.defaultProps = {
  height: 20,
  width: 100,
  disabled: false,
  checked: false,
  hasError: false,
  label: "Radio"
};
