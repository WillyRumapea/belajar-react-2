import { useContext } from "react";
import { SoContext } from "./SoContext";

export default function SoUpdate() {
  const { handleUpVers } = useContext(SoContext);

  return (
    <div>
      <button onClick={handleUpVers}>ugrade</button>
    </div>
  );
}
