import { useState } from "react";
import { LangContext } from "./LangContext";

export default function LangProvider({ children }) {
  const [lang, setLang] = useState("english");

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}
