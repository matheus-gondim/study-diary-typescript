import { RageInterval } from "../interfaces/rage-interval.interface";
import { randomNumber } from "./random-number";

export function numericArrayGenerator(
  arraySize: number,
  rageInterval: RageInterval
): number[] {
  const array: number[] = [];

  for (let idx: number = 0; array.length < arraySize; idx++) {
    const newArray = Math.ceil(randomNumber(rageInterval));
    if (!array.includes(newArray)) array.push(newArray);
  }

  return array;
}
