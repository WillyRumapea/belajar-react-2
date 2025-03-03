import { useState } from "react";
import { Profile } from "./Context";
import ContextAddres from "./ContextAddres";
import ContextProfile from "./ContextProfile";

export default function ContextApp() {
  const [name, setName] = useState("willea");

  return (
    <>
      <Profile.Provider value={name}>
        <h1>Profile App</h1>
        <ContextProfile />
        <ContextAddres />
      </Profile.Provider>
    </>
  );
}
