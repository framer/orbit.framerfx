import * as React from "react";
import { Frame, addPropertyControls, ControlType } from "framer";
import { DestinationCard as _DestinationCard } from "@kiwicom/orbit-components";

export function DestinationCard(props) {
  return (
    <_DestinationCard
      {...props}
      outbound={{
        date: props.outboundDate,
        type: props.outboundType,
        duration: props.outboundDuration,
        text: props.showOutboundText ? props.outboundText : null
      }}
      inbound={
        props.inbound
          ? {
              date: props.inboundDate,
              type: props.inboundType,
              duration: props.inboundDuration
            }
          : null
      }
    />
  );
}

addPropertyControls(DestinationCard, {
  price: {
    type: ControlType.String,
    title: "Price"
  },
  timeOfStay: {
    type: ControlType.String,
    title: "Time of Stay"
  },
  departureCity: {
    type: ControlType.String,
    title: "Departure City"
  },
  destinationCity: {
    type: ControlType.String,
    title: "Destination City"
  },
  destinationCountry: {
    type: ControlType.String,
    title: "Destination Country"
  },
  outboundDate: {
    type: ControlType.String,
    title: "Outbound Date"
  },
  outboundType: {
    type: ControlType.String,
    title: "Outbound Type"
  },
  outboundDuration: {
    type: ControlType.String,
    title: "Outbound Duration"
  },
  showOutboundText: {
    type: ControlType.Boolean,
    title: "Outbound Text"
  },
  outboundText: {
    type: ControlType.String,
    title: "Outbound Text",
    hidden(props) {
      return props.showOutboundText === false;
    }
  },
  inbound: {
    type: ControlType.Boolean,
    title: "Inbound"
  },
  inboundDate: {
    type: ControlType.String,
    title: "Inbound Date",
    hidden(props) {
      return props.inbound === false;
    }
  },
  inboundType: {
    type: ControlType.String,
    title: "Inbound Type",
    hidden(props) {
      return props.inbound === false;
    }
  },
  inboundDuration: {
    type: ControlType.String,
    title: "Inbound Duration",
    hidden(props) {
      return props.inbound === false;
    }
  },
  image: {
    type: ControlType.String,
    title: "Image"
  }
});

DestinationCard.defaultProps = {
  height: 200,
  width: 300,
  price: "159€",
  timeOfStay: "3 nights",
  departureCity: "Amsterdam",
  destinationCity: "Paris",
  destinationCountry: "France",
  outboundDate: "Wed 31 October",
  outboundType: "Direct",
  outboundDuration: "1h 10m",
  showOutboundText: false,
  outboundText: "One-way",
  inbound: false,
  inboundDate: "Sat 3 Nov",
  inboundType: "Direct",
  inboundDuration: "1h 10m",
  image: "paris_fr"
};
