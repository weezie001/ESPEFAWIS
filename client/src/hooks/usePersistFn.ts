import { useCallback, useRef } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyFunction = (...args: any[]) => any;

/**
 * Returns a function whose identity is stable across renders but which always
 * invokes the latest version of the passed callback. Useful for event handlers
 * that should not be recreated on every render while still closing over the
 * most recent props/state.
 */
export function usePersistFn<T extends AnyFunction>(fn: T): T {
  const fnRef = useRef<T>(fn);
  fnRef.current = fn;

  const persistFn = useRef<T | undefined>(undefined);
  if (!persistFn.current) {
    persistFn.current = function (this: unknown, ...args) {
      return fnRef.current.apply(this, args);
    } as T;
  }

  return useCallback(persistFn.current, []) as T;
}
