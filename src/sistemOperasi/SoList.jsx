import { useContext } from "react";
import { SoContext } from "./SoContext";

export default function SoList() {
  const { handleNewSo } = useContext(SoContext);

  function handleChangeOs(e) {
    handleNewSo(e.target.value);
  }

  return (
    <div
      style={{
        marginTop: "20px",
      }}
    >
      <select onChange={handleChangeOs}>
        <option value="Cow_SO">Cow SO</option>
        <option value="Mix_SO">Mix SO</option>
        <option value="SoGalaxy">SoGalaxy</option>
      </select>
    </div>
  );
}
