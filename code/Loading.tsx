import * as React from "react";
import { Frame, addPropertyControls, ControlType } from "framer";
import { Loading as _Loading } from "@kiwicom/orbit-components";

export function Loading(props) {
  return <_Loading {...props} />;
}

addPropertyControls(Loading, {
  loading: {
    type: ControlType.Boolean,
    title: "Loading"
  },
  type: {
    type: ControlType.Enum,
    title: "My Enum",
    options: [
      "buttonLoader",
      "searchLoader",
      "boxLoader",
      "pageLoader",
      "inlineLoader"
    ]
  }
});

Loading.defaultProps = {
  height: 100,
  width: 100,
  loading: true,
  type: "buttonLoader"
};
