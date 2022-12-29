import { MutableRefObject, useEffect, useState } from "react";

type UseClickOutsideProps = MutableRefObject<any>;

/**
 * useClickOutside
 * - this hook return true on click outside of targeted element
 * @param {ref} reference on target element. need to use useRef hook.
 * @returns {boolean} outside - returns if click vas inside or outside.. default is undefined
 */
export const useClickOutside = (ref: UseClickOutsideProps) => {
  const [outside, setOutside] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOutside(true);
      } else {
        setOutside(false);
      }
    };

    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [ref]);

  return { outside };
};
