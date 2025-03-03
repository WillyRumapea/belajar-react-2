import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <span style={{ background: "#eee", padding: "10px" }}>
      <h2>My App</h2>
      {user ? (
        <>
          <span>welcome {user.name}</span>
          <button onClick={logout}>logout</button>
        </>
      ) : (
        <span>please login</span>
      )}
    </span>
  );
}
