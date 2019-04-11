import { useState } from 'react';
import { clamp } from 'utils/clamp';
import { useInterval } from './useInterval';

export function useTestRandomUpdate(initialValue: number, interval: number, maxDelta: number, min: number, max: number) {
  const [value, setValue] = useState(initialValue);

  useInterval(() => {
    const newValue = value + Math.round((Math.random() * 2 - 1) * maxDelta);
    setValue(clamp(newValue, min, max));
  }, interval);

  return value;
}

export function useAlternateValues<T = any, U = T>(value1: T, value2: U, interval: number) {
  const [value, setValue] = useState<T | U>(value1);

  useInterval(() => {
    setValue(value === value1 ? value2 : value1);
  }, interval);

  return value;
}

export function useRamdomIncrement(initialValue: number, interval: number, maxDelta: number) {
  const [value, setValue] = useState(initialValue);

  useInterval(() => {
    const newValue = value + Math.round(Math.random() * maxDelta);
    setValue(newValue);
  }, interval);

  return value;
}
