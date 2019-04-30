import style from "./style";

export const defaultCreditCardNumberLength = 16;
export const defaultCVCPlaceholder = "---";
export const defaultExpiryPlaceholder = "--/--";
export const defaultCardHolderNamePlaceholder = "Card holder's name";
export const defaultCreditCardNumberPlaceholder = "---- ---- ---- ----";

export function addPlaceholderStyleIfNeeded(value: any) {
  if (value) {
    return;
  }

  return style.placeholderTextStyle;
}

const placeholder = "---- ---- ---- ----";
const digitsGroupLength = 4;

function formatCreditCardString(number: string) {
  return number
    .split("")
    .reduce(
      (prev, curr, index) =>
        `${prev}${(index % digitsGroupLength === 0 && " ") || ""}${curr}`,
      ""
    );
}

function paddedNumber(value: string | number, length = 2) {
  return `0${value}`.substr(-length);
}

function twoDigitsDateString(date: string) {
  if (!date) {
    return "--";
  }

  return `${paddedNumber(date)}`.substr(0, 2);
}

function assertValidDateFormat(expiryDate: string) {
  if (expiryDate.length > 2 && expiryDate.indexOf("/") < 0) {
    throw new Error("The date must have a format of mm/yy");
  }
}

export function formatExpiryDateString(expiryDate: string) {
  assertValidDateFormat(expiryDate);

  const [month, year] = expiryDate.split("/");
  const monthString = twoDigitsDateString(month);
  const yearString = twoDigitsDateString(year);

  return `${monthString}/${yearString}`;
}

export function creditCardStringWithNumber(number: string) {
  const normalizedNumber = `${number.replace(/\s/g, "")}`;

  return `${normalizedNumber}${placeholder.substring(
    16 - normalizedNumber.length
  )}`;
}
