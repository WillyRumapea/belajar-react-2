import NotificationButton from "./NotificationButton";
import NotificationList from "./NotificationList";
import NotificationProvider from "./NotificationProvider";

export default function App() {
  return (
    <NotificationProvider>
      <NotificationButton />
      <NotificationList />
    </NotificationProvider>
  );
}
