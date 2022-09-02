export function useDebounce(func: () => void, timeout = 300) {
  let timer: NodeJS.Timer;
  return function (this: any, ...args: any) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
