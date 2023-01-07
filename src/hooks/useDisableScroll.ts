import { useState, useEffect } from "react";
import { gsap } from "gsap";

/**
 * useDisableScroll
 * Disable scroll and hide scroll bar of targeted element. In default it target html tag of document.
 * @param {Element} targetElement - optional, if defined, hook is applied on that element
 */
export const useDisableScroll = (targetElement?: Element) => {
  const [disabled, setDisabled] = useState<boolean>(false);

  useEffect(() => {
    if (typeof document !== "undefined") {
      const element = targetElement ?? document.getElementsByTagName("html")[0];
      disabled ? gsap.set(element, { overflowY: "hidden" }) : gsap.set(element, { overflowY: "initial" });
    }
  }, [disabled]);

  return [disabled, setDisabled];
};
