import { useContext } from "react";
import { Profile } from "./Context";

export default function ContextProfile() {
  const profile = useContext(Profile);

  return (
    <div>
      <h2>Profile</h2>
      <p>hello {profile}</p>
    </div>
  );
}
