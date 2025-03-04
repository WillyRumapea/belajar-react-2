import { useState } from "react";
import { SoContext } from "./SoContext";

export default function SoProvider({ children }) {
  const [nameSo, setNameSo] = useState("OS_Willea");
  const [vers, setVers] = useState(3.63);

  function handleUpVers() {
    setVers((befVers) => Number(befVers + 0.1));
  }

  function handleNewSo(newSo) {
    setNameSo(newSo);
  }

  return (
    <SoContext.Provider value={{ nameSo, vers, handleUpVers, handleNewSo }}>
      {children}
    </SoContext.Provider>
  );
}
