import { useContext } from "react";
import { NotificatioContext } from "./NotificationContext";

export default function NotificationButton() {
  const { handleNotif } = useContext(NotificatioContext);

  return <button onClick={() => handleNotif("Notifikasi baru!!")}>add</button>;
}
