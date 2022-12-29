//CUSTOM THROTTLE FUNCTION
export function useThrottle(func: () => void, timeout = 300) {
  let run = false;
  return function (this: any, ...args: any) {
    if (run === false) {
      func.apply(this, args);
      run = true;
      setTimeout(() => (run = false), timeout);
    }
  };
}
