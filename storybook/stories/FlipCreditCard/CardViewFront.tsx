import React from "react";
import {
  View,
  Text,
  Image,
  StyleProp,
  ViewStyle,
  TextStyle
} from "react-native";
import { LinearGradient } from "expo";
import style, {
  CardBackgroundColorEnd,
  CardBackgroundColorStart
} from "./style";
import { addPlaceholderStyleIfNeeded } from "./common";
import { CreditCardFields, CreditCardLabels } from "./CardView";

interface CreditCardViewFrontProps {
  cardHolderName: string;
  number: string;
  expiryDate: string;
  style?: StyleProp<ViewStyle>;
  placeholders: CreditCardFields;
  labels: CreditCardLabels;
}

interface CreditCardInfoContainerProps {
  cardHolderName: string;
  expiryDate: string;
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  placeholders: CreditCardFields;
  labels: CreditCardLabels;
}

export function CardInformationContainer(props: CreditCardInfoContainerProps) {
  const {
    cardHolderName,
    expiryDate,
    textStyle,
    style: externalStyle,
    placeholders,
    labels
  } = props;

  return (
    <View style={[style.cardInformationContainer, externalStyle]}>
      <Text
        style={[
          style.cardViewText,
          style.cardViewFrontCardNameText,
          textStyle,
          addPlaceholderStyleIfNeeded(cardHolderName)
        ]}
      >
        {(cardHolderName || placeholders.creditCardName).toUpperCase()}
      </Text>
      <View style={style.cardViewFrontExpiration}>
        <Text
          style={[
            style.cardViewText,
            style.cardViewFrontExpiryLabel,
            textStyle
          ]}
        >
          {labels.expiryDate}
        </Text>
        <Text
          style={[
            style.cardViewText,
            textStyle,
            addPlaceholderStyleIfNeeded(expiryDate)
          ]}
        >
          {expiryDate || placeholders.expiryDate}
        </Text>
      </View>
    </View>
  );
}

export default function CreditCardViewFront(props: CreditCardViewFrontProps) {
  const {
    cardHolderName,
    number,
    expiryDate,
    placeholders,
    style: externalStyle,
    labels
  } = props;

  return (
    <LinearGradient
      colors={[CardBackgroundColorStart, CardBackgroundColorEnd]}
      style={[style.cardView, externalStyle]}
    >
      <Image
        style={style.cardViewFrontBackground}
        source={require("./assets/gray-world-map-md.png")}
      />
      <Image
        style={style.cardViewFrontChip}
        source={require("./assets/card-chip.png")}
      />
      <Image
        style={style.cardViewFrontBrandIcon}
        source={require("./assets/visa-icon.png")}
      />
      <CardInformationContainer
        cardHolderName={cardHolderName}
        expiryDate={expiryDate}
        placeholders={placeholders}
        labels={labels}
      />
      <Text
        style={[
          style.cardViewText,
          style.cardViewFrontNumberText,
          addPlaceholderStyleIfNeeded(number)
        ]}
      >
        {number || placeholders.creditCardNumber}
      </Text>
    </LinearGradient>
  );
}
