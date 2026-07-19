"use client";

import Image from "next/image";

function Notification({ notification }) {
  const { type, created_at, metadata, read, performedBy, targetUser, event } =
    notification;

  const formattedTime = new Date(created_at).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

  const notificationMap = {
    registration: (
      <>
        <span className="font-semibold">{performedBy?.fullName}</span>{" "}
        registered for your event{" "}
        <span className="font-semibold">{event?.title}</span>.
      </>
    ),

    review_created: (
      <>
        <span className="font-semibold">{performedBy?.fullName}</span> left a{" "}
        <span className="font-semibold">{metadata?.rating}★</span> review on{" "}
        <span className="font-semibold">{event?.title}</span>.
      </>
    ),

    event_created: (
      <>
        <span className="font-semibold">{performedBy?.fullName}</span> created{" "}
        <span className="font-semibold">{event?.title}</span>.
      </>
    ),

    role_changed: (
      <>
        <span className="font-semibold">{performedBy?.fullName}</span> changed{" "}
        <span className="font-semibold">{targetUser?.fullName}</span>&apos;s
        role from <span className="font-semibold">{metadata?.oldRole}</span> to{" "}
        <span className="font-semibold">{metadata?.newRole}</span>.
      </>
    ),

    user_suspended: (
      <>
        <span className="font-semibold">{performedBy?.fullName}</span> suspended{" "}
        <span className="font-semibold">{targetUser?.fullName}</span>.
      </>
    ),

    user_reactivated: (
      <>
        <span className="font-semibold">{performedBy?.fullName}</span>{" "}
        reactivated{" "}
        <span className="font-semibold">{targetUser?.fullName}</span>.
      </>
    ),

    event_updated: (
      <>
        <span className="font-semibold">{performedBy?.fullName}</span> updated{" "}
        <span className="font-semibold">{event?.title}</span>.
      </>
    ),

    event_cancelled: (
      <>
        <span className="font-semibold">{performedBy?.fullName}</span> cancelled{" "}
        <span className="font-semibold">{event?.title}</span>.
      </>
    ),

    event_reminder: (
      <>
        Reminder: <span className="font-semibold">{event?.title}</span> starts
        soon.
      </>
    ),
    registration_cancelled: (
      <>
        <span className="font-semibold">{performedBy?.fullName}</span> canceled
        their registration for{" "}
        <span className="font-semibold">{event?.title}</span>.
      </>
    ),
  };

  return (
    <li
      className={`2xs:gap-3 2xs:p-3 xs:p-4 flex cursor-pointer items-start gap-2 p-3 transition hover:bg-gray-50 sm:gap-3 sm:p-4 md:gap-4 md:p-4 ${
        !read ? "bg-blue-50/40" : ""
      } border-b border-gray-100`}
    >
      {/* Avatar */}
      <div className="2xs:h-9 2xs:w-9 xs:h-10 xs:w-10 relative h-8 w-8 flex-shrink-0 overflow-hidden rounded-full sm:h-11 sm:w-11 md:h-11 md:w-11">
        <Image
          src={performedBy?.avatar || "/default-avatar.png"}
          alt={performedBy?.fullName || "User"}
          fill
          sizes="44px"
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <p className="2xs:text-[13px] xs:text-sm text-xs leading-5 break-words text-gray-800 sm:text-sm md:text-sm lg:text-[15px]">
          {notificationMap[type]}
        </p>

        <span className="2xs:text-[11px] xs:text-xs mt-1 block text-[10px] text-gray-400 sm:text-xs">
          {formattedTime}
        </span>
      </div>

      {/* Unread dot */}
      {!read && (
        <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500" />
      )}
    </li>
  );
}

export default Notification;
