import {
  useEffect,
  useState,
  useContext,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";

const SessionStateContext = createContext((sessionKey: string): [
  string | null,
  Dispatch<SetStateAction<string | null>>
] => {
  if (typeof window === "undefined") {
    return [null, () => {}];
  }

  const [value, setValue] = useState(sessionStorage.getItem(sessionKey));

  useEffect(() => {
    if (value == null) {
      sessionStorage.removeItem(sessionKey);
    } else {
      sessionStorage.setItem(sessionKey, value);
    }
  }, [value]);
  return [value, setValue];
});

export const useSessionState = (sessionKey: string) =>
  useContext(SessionStateContext)(sessionKey);
