import { CLASS_PREFIX } from "../utils/global.constants";

export const useLibClass = (componentPrefix: string, className: string | string[]) => {
  if (Array.isArray(className)) {
    return className.map((oneClass) => `${CLASS_PREFIX}-${componentPrefix}-${oneClass}`).join(" ");
  }
  return `${CLASS_PREFIX}-${componentPrefix}-${className}`;
};
