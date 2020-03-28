import { useEffect, useRef } from "react";

export const useHover = onClick => {
  if (typeof onClick !== "function") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("mouseenter", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("mouseenter", onClick);
      }
    };
  }, []);
  return element;
};
