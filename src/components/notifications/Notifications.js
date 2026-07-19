import NotificationsButton from "./NotificationsButton";
import NotificationsList from "./NotificationsList";

export default function Notifications({ notifications, user }) {
  if (!user) return null;

  return (
    <NotificationsButton notifications={notifications}>
      <NotificationsList notifications={notifications} />
    </NotificationsButton>
  );
}
