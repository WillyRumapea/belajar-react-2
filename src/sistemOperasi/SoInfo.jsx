import { useContext } from "react";
import { SoContext } from "./SoContext";

export default function SoInfo() {
  const { nameSo, vers } = useContext(SoContext);

  return (
    <div>
      <h1>Informasi Sistem Operasi</h1>
      <div>
        <h2>Nama Sistem Operasi: {nameSo}</h2>
        <h2>Versi Sistem Operasi: {vers}</h2>
      </div>
    </div>
  );
}
