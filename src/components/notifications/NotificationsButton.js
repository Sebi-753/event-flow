"use client";

import { useEffect, useRef, useState } from "react";
import { FaBell } from "react-icons/fa";
import NotificationsList from "./NotificationsList";
import { markAllNotificationsAsRead } from "@/lib/actions";

function NotificationsButton({ notifications }) {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState(notifications);
  const containerRef = useRef(null);

  const unreadCount = items.filter((n) => !n.read).length;

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  async function handleClick() {
    setIsOpen((open) => !open);

    if (unreadCount > 0) {
      setItems((current) =>
        current.map((notification) => ({
          ...notification,
          read: true,
        })),
      );

      try {
        await markAllNotificationsAsRead();
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        onClick={handleClick}
        aria-label="Notifications"
        className={`relative flex h-11 w-11 items-center justify-center rounded-full transition-all duration-200 ${
          isOpen
            ? "scale-105 bg-[var(--indigo-50)] ring-2 ring-[var(--indigo-200)]"
            : "hover:bg-gray-100"
        }`}
      >
        <FaBell
          size={20}
          className={`transition-colors duration-200 ${
            isOpen ? "text-[var(--indigo-600)]" : "text-[var(--text-secondary)]"
          }`}
        />

        {unreadCount > 0 && (
          <span className="absolute top-1 right-1 flex h-4 min-w-4 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
            {unreadCount > 99 ? "99+" : unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="2xs:w-[92vw] xs:w-[88vw] fixed top-[11vh] left-1/2 z-50 max-h-[75vh] w-[95vw] -translate-x-1/2 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl sm:absolute sm:top-14 sm:right-0 sm:left-auto sm:w-96 sm:translate-x-0">
          <div className="flex items-center justify-center border-b border-gray-200 px-5 py-4">
            <h3 className="text-base font-semibold">Notifications</h3>
          </div>

          <NotificationsList notifications={items} />
        </div>
      )}
    </div>
  );
}

export default NotificationsButton;
