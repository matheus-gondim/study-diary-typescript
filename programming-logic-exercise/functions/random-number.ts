import { RageInterval } from "../interfaces/rage-interval.interface";

export function randomNumber(rageInterval: RageInterval): number {
  return (
    Math.random() * (rageInterval.max - rageInterval.min) + rageInterval.min
  );
}
