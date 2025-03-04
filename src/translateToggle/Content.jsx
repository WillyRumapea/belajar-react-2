import { useContext } from "react";
import { LangContext } from "./LangContext";

export default function Content() {
  const { lang } = useContext(LangContext);

  return <div>ini adalah content dalam bahasa {lang}</div>;
}
