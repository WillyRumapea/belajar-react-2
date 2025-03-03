import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export default function LogginButton() {
  const { login } = useContext(AuthContext);

  return <button onClick={login}>login</button>;
}
