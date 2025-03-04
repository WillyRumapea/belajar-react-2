import { NotificatioContext } from "./NotificationContext";
import { v4 } from "uuid";
import { useState } from "react";

export default function NotificationProvider({ children }) {
  const [notification, setNotif] = useState([]);

  function handleNotif(message) {
    const newNotif = { id: v4(), message };
    setNotif((prevNotif) => [...prevNotif, newNotif]);
  }

  function removeNotif(id) {
    setNotif((prev) => prev.filter((notif) => notif.id !== id));
  }

  return (
    <NotificatioContext.Provider
      value={{ notification, handleNotif, removeNotif }}
    >
      {children}
    </NotificatioContext.Provider>
  );
}
