import { numericArrayGenerator } from "../functions/numeric-array-generator";

/*
Defina uma função que, dada uma lista numérica, retorna uma tupla-2,
tal que contenha o maior valor da lista, bem como sua posição relativa
*/

function maxNumber(num1: number, num2: number): number {
  return num1 > num2 ? num1 : num2;
}

function getHighestValue(list: number[]): number {
  return list.reduce((acc, elem) => maxNumber(acc, elem), 0);
}

function getIndexOfElement<
  T extends string[] | number[],
  U extends number | string
>(array: T, elem: U) {
  let resultIdx: number = -1;
  array.forEach((valor: number | string, idx: number) => {
    if (valor === elem) resultIdx = idx;
  });
  return resultIdx;
}

const numbers: number[] = numericArrayGenerator(10, { min: 1, max: 20 });

const greaterNumberTuple = [
  getHighestValue(numbers),
  getIndexOfElement(numbers, getHighestValue(numbers)),
];
console.log(greaterNumberTuple);
