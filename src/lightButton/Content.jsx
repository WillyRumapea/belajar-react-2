import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Content() {
  const { theme } = useContext(ThemeContext);

  return <p>ini dalam mode {theme}</p>;
}
