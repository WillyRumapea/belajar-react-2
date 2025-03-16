import { useOnline } from "./OnlineHook.jsx";

export default function Online() {
  const isOnline = useOnline();

  console.log(isOnline);
  return <h1>{isOnline ? "Online" : "Offline"}</h1>;
}
