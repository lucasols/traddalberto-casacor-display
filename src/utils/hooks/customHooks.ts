import { useState, useRef, useCallback, useEffect } from 'react';

export function usePrevious<T>(value: T, initial: T | null = null) {
  const ref = useRef(initial);
  useEffect(() => {
    ref.current = value;
  });
  return ref.current as NonNullable<typeof ref['current']>;
}

export const useForceUpdate = () => {
  const [, setIt] = useState(false);
  return () => setIt(it => !it);
};

export function useOnChange<T>(value: T, callBack: (last: T) => void) {
  const last = usePrevious(value, value);

  useEffect(() => {
    if (value !== last) {
      callBack(last);
    }
  });
}

export function useGetSet<T>(initialState: T): [() => T, (value: T) => void, T] {
  const [value, set] = useState(initialState);
  const s = useRef(initialState);
  const get = useCallback(() => s.current, []);
  s.current = value;
  return [get, set, value];
}
