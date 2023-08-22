export const mergeRefs = (...inputRefs) => {
  return (ref: any) => {
    inputRefs.forEach((inputRef) => {
      if (!inputRef) {
        return;
      }
      if (typeof inputRef === "function") {
        inputRef(ref);
      } else {
        inputRef.current = ref;
      }
    });
  };
};
