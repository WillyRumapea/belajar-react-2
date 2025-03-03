import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h2>Dashboard</h2>
      {user ? <p>wellcome {user.name}</p> : <p>please login into continue</p>}
    </div>
  );
}
