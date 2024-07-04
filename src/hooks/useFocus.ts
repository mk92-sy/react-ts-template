import { RefObject, useEffect } from "react";

type FocusableElement =
  | HTMLButtonElement
  | HTMLAnchorElement
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement
  | HTMLElement;

export const useFocusTrap = (
  ref: RefObject<HTMLElement>,
  isOpen: boolean
): void => {
  useEffect(() => {
    if (!isOpen || !ref.current) return;

    const focusableElements = ref.current.querySelectorAll<FocusableElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e: KeyboardEvent): void => {
      if (e.key === "Tab") {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    const handleFocus = (e: FocusEvent): void => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleTabKey);
    document.addEventListener("focus", handleFocus, true);
    firstElement.focus();

    return () => {
      document.removeEventListener("keydown", handleTabKey);
      document.removeEventListener("focus", handleFocus, true);
    };
  }, [isOpen, ref]);
};
