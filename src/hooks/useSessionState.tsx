import {
  useEffect,
  useState,
  useCallback,
  Dispatch,
  SetStateAction,
} from "react";

export const useSessionState = (
  sessionKey: string
): [string | null, Dispatch<SetStateAction<string | null>>] => {
  if (typeof window === "undefined") {
    return [null, () => {}];
  }

  const [value, setValue] = useState(sessionStorage.getItem(sessionKey));
  const updateValue = useCallback(() => {
    setValue(sessionStorage.getItem(sessionKey));
  }, [sessionKey]);

  useEffect(() => {
    updateValue();
    window.addEventListener("session-storage", updateValue);
    return () => window.removeEventListener("session-storage", updateValue);
  }, [updateValue]);

  useEffect(() => {
    if (value == null) {
      sessionStorage.removeItem(sessionKey);
    } else {
      sessionStorage.setItem(sessionKey, value);
    }
    window.dispatchEvent(new Event("session-storage"));
  }, [value]);

  return [value, setValue];
};
