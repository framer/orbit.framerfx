import * as React from "react";
import { Frame, addPropertyControls, ControlType } from "framer";
import {
  PricingTable as _PricingTable,
  PricingTableItem as _PricingTableItem,
  List as _List,
  ListItem as _ListItem,
  Tooltip as _Tooltip,
  Text as _Text
} from "@kiwicom/orbit-components";
import { Check } from "@kiwicom/orbit-components/lib/icons";

export function PricingTable(props) {
  return (
    <_PricingTable>
      <_PricingTableItem badge={"Polular"} price={"€749"}>
        <_List type="separated">
          <_ListItem label="Kiwi.com services" icon={<Check />}>
            <_Tooltip
              content="Extra info about provided service"
              stopPropagation
            >
              <_Text>Extended.</_Text>
            </_Tooltip>
          </_ListItem>
          <_ListItem label="Calleer priority" icon={<Check />}>
            <_Tooltip
              content="Extra info about provided service"
              stopPropagation
            >
              <_Text>Medium</_Text>
            </_Tooltip>
          </_ListItem>
          <_ListItem label="Email support" icon={<Check />}>
            <_Text>Yes</_Text>
          </_ListItem>
          <_ListItem label="Additional Services" icon={<Check />}>
            <_Tooltip
              content="Extra info about provided service"
              stopPropagation
            >
              <_Text>$10 processing fee</_Text>
            </_Tooltip>
          </_ListItem>
          <_ListItem label="Additional Services" icon={<Check />}>
            <_Tooltip
              content="Extra info about provided service"
              stopPropagation
            >
              <_Text>$10 processing fee</_Text>
            </_Tooltip>
          </_ListItem>
        </_List>
      </_PricingTableItem>
    </_PricingTable>
  );
}

addPropertyControls(PricingTable, {
  text: {
    type: ControlType.String,
    title: "Text"
  }
});

PricingTable.defaultProps = {
  height: 435,
  width: 350
};
