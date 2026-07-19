"use client";

import Notification from "./Notification";

function NotificationsList({ notifications }) {
  if (!notifications.length)
    return (
      <div className="p-8 text-center text-sm text-gray-500">
        No notifications yet.
      </div>
    );

  return (
    <ul className="max-h-[420px] overflow-y-auto">
      {notifications.map((notification) => (
        <Notification notification={notification} key={notification.id} />
      ))}
    </ul>
  );
}

export default NotificationsList;
