import * as React from "react";
import { Frame, addPropertyControls, ControlType } from "framer";
import { Select as _Select } from "@kiwicom/orbit-components";

export function Select(props) {
  let options = props.dropdown.map((item, index) => {
    return { value: index, label: item };
  });

  return <_Select {...props} options={options} />;
}

addPropertyControls(Select, {
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
    options: ["small", "normal"]
  },
  dropdown: {
    type: ControlType.Array,
    title: "Options",
    propertyControl: {
      type: ControlType.String
    }
  }
});

Select.defaultProps = {
  height: 65,
  width: 300,
  disabled: false,
  required: false,
  error: false,
  label: "",
  dropdown: ["Item 1", "Item 2", "Item 3"]
};
