import * as React from "react";
import { Frame, addPropertyControls, ControlType } from "framer";
import { Collapse as _Collapse } from "@kiwicom/orbit-components";

export function Collapse(props) {
  // undefined import
  console.log(_Collapse);

  return <_Collapse {...props}>{props.children}</_Collapse>;
}

addPropertyControls(Collapse, {
  label: {
    type: ControlType.String,
    title: "Label"
  }
});

Collapse.defaultProps = {
  height: 20,
  width: 100,
  label: "Collapse"
};
