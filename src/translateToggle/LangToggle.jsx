import { useContext } from "react";
import { LangContext } from "./LangContext";

export default function LangToggle() {
  const { lang, handleLang } = useContext(LangContext);

  return (
    <button onClick={handleLang}>
      change lang {lang === "english" ? "indo" : "english"}
    </button>
  );
}
