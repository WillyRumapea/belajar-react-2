import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Article() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#000",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h2>Judul Artikle</h2>
      <p>ini adalah isi artikel, sekarang tema {theme} </p>
    </div>
  );
}
