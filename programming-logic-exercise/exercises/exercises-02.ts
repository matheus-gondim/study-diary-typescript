/*
Remover um elemento da lista a partir de sua posição
*/
import { numericArrayGenerator } from "../functions/numeric-array-generator";

const numbers: number[] = numericArrayGenerator(10, { min: 1, max: 20 });

function removeElement<T extends number[] | string[]>(
  array: T,
  position: number
): T | undefined {
  if (!array[position]) return;
}

removeElement(numbers, 2);
