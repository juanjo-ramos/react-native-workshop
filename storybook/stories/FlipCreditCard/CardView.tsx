import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import {
  defaultCVCPlaceholder,
  defaultExpiryPlaceholder,
  defaultCardHolderNamePlaceholder,
  defaultCreditCardNumberPlaceholder
} from "./common";
import CreditCardViewFront from "./CardViewFront";
import CreditCardViewBack from "./CardViewBack";

export interface CreditCardLabels {
  expiryDate: string;
}

export interface CreditCardFields {
  creditCardName: string;
  creditCardNumber: string;
  expiryDate: string;
  cvc: string;
}

export interface Props {
  style?: StyleProp<ViewStyle>;
  scale?: number;
  creditCardName?: string;
  creditCardNumber?: string;
  creditCardNumberLength?: number;
  expiryDate?: string;
  cvc?: string;
  placeholders?: Partial<CreditCardFields>;
  localizedLabels?: Partial<CreditCardFields>;
  visibleFace: "front" | "back";
}

export default function CardView(props: Props) {
  const {
    creditCardName,
    creditCardNumber,
    cvc,
    placeholders: optionalPlaceholders,
    localizedLabels: optionalLabels,
    expiryDate,
    visibleFace,
    style: externalStyle
  } = props;

  const placeholders = {
    cvc: defaultCVCPlaceholder,
    expiryDate: defaultExpiryPlaceholder,
    creditCardName: defaultCardHolderNamePlaceholder,
    creditCardNumber: defaultCreditCardNumberPlaceholder,
    ...optionalPlaceholders
  };

  const labels = {
    expiryDate: "MM/YY",
    ...optionalLabels
  };

  if (visibleFace === "front") {
    return (
      <CreditCardViewFront
        style={externalStyle}
        cardHolderName={creditCardName}
        number={creditCardNumber}
        expiryDate={expiryDate}
        placeholders={placeholders}
        labels={labels}
      />
    );
  } else {
    return (
      <CreditCardViewBack
        style={externalStyle}
        cvc={cvc}
        expiryDate={expiryDate}
        cardHolderName={creditCardName}
        placeholders={placeholders}
        labels={labels}
      />
    );
  }
}
