import React, { useEffect, useState } from "react";
import { useThrottle } from "./useThrottle";

export const useElementSize = (ref: React.MutableRefObject<any>) => {
  const [size, setSize] = useState<{ width: number | null; height: number | null }>({
    width: null,
    height: null,
  });

  //TODO - usecallback implementation
  const handleWidth = useThrottle(() => {
    setSize({ width: ref.current.offsetWidth, height: ref.current.offsetHeight });
  }, 300);

  useEffect(() => {
    window.addEventListener("resize", handleWidth);
    handleWidth();
    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, []);

  return size;
};
