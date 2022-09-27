import { useEffect, useState, useContext, createContext } from "react";

const SessionStateContext = createContext((sessionKey: string) => {
  const [value, setValue] = useState(sessionStorage.getItem(sessionKey));

  useEffect(() => {
    if (value == null) {
      sessionStorage.removeItem(sessionKey);
    } else {
      sessionStorage.setItem(sessionKey, value);
    }
  }, [value]);
  return [value, setValue] as const;
});

export const useSessionState = (sessionKey: string) =>
  useContext(SessionStateContext)(sessionKey);
