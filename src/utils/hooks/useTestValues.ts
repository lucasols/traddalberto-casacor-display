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
