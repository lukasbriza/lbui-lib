import { RefObject, useState, useEffect } from "react";

/**
 * useOnScreen
 * - return true if tracked element is on screen
 * @param {element} ref - targeted element via useReff
 * @param {string} rootMargin - define how much from top of screen must be element to be detected
 * @param {void} cb - callback of intersection sction per entry (IntersectionObserverEntry is passed to callback)
 */

type UseOnScreenProps = {
  ref: RefObject<Element>;
  rootMargin?: string;
  cb?: (e: IntersectionObserverEntry) => void;
};
export const useOnScreen = (props: UseOnScreenProps) => {
  const { ref, rootMargin, cb } = props;
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const { current } = ref;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
        cb?.(entry);
      },
      { rootMargin: rootMargin }
    );

    current && observer.observe(current);

    return () => {
      current && observer.unobserve(current);
    };
  }, []);

  return { onScreen: isIntersecting };
};
