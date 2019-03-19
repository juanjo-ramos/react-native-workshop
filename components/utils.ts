export function generateRandomNumber(start: number, end: number) {
  return Math.floor(Math.random() * end + start);
}

export function randomNumberGenerator(start: number, end: number) {
  return () => generateRandomNumber(start, end);
}

export function removeItemFromArray<T>(index: number, collection: T[]) {
  return collection.filter((_, idx) => index !== idx);
}

export function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function seq<T>(length: number, mapper: () => T) {
  return Array.from({ length }, mapper);
}

export function generateRandomColor() {
  const componentGenerator = randomNumberGenerator(0, 255);

  const result = `rgb(${seq(2, componentGenerator).reduce(
    (acc, curr) => `${acc}, ${curr}`,
    `${componentGenerator()}`
  )})`;

  return result;
}
