import { useContext } from "react";
import { NotificatioContext } from "./NotificationContext";

export default function NotificationList() {
  const { notification, removeNotif } = useContext(NotificatioContext);

  return (
    <div>
      <h2>Daftar Notif</h2>
      <ul>
        {notification.map((notif) => {
          return (
            <li key={notif.id}>
              {notif.message}
              <button onClick={() => removeNotif(notif.id)}>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
