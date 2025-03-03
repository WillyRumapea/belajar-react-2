import { useContext } from "react";
import { Profile } from "./Context";

export default function ContextAddres() {
  const profile = useContext(Profile);

  return (
    <div>
      <h2>Profile Addres</h2>
      <p>Address {profile}</p>
    </div>
  );
}
