import { DependencyList, EffectCallback, useEffect, useRef } from "react";


/**
 * useEffectOnce
 * - Perform task only once if React strict mode is enabled. Work in same way as useEffect, but removes double call of function.
 * @param {EffectCallback} effect - effect callback
 * @param {DependencyList} deps - dependency list
 */
export const useEffectOnce = (effect: EffectCallback) => {
  const rendered = useRef(false);

  useEffect(() => {
    if (rendered.current === false) {
      rendered.current = true;
      effect()
    }
  }, []);
};
