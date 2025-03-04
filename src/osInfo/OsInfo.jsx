import { useContext } from "react";
import { OsContext } from "./OsContext";

export default function OsInfo() {
  const Os = useContext(OsContext);

  return (
    <div>
      <h1>OS Info</h1>
      <div>
        <h2>OS Name : {Os.name}</h2>
        <h2>OS Version : {Os.version}</h2>
      </div>
    </div>
  );
}
