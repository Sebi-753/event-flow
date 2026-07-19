"use client";

import Image from "next/image";
import { FaBan, FaUserCheck } from "react-icons/fa";
import { toast } from "sonner";

import { changeUserRole, toggleSuspendUser } from "@/lib/actions";

function User({ user }) {
  const joined = new Date(user.created_at);

  const formattedDate = joined.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const isSuspended = user.status === "suspended";

  let roleStyles = "bg-gray-100 text-gray-700 border-gray-200";

  if (user.role === "admin") {
    roleStyles = "bg-red-100 text-red-700 border-red-200";
  } else if (user.role === "organizer") {
    roleStyles = "bg-blue-100 text-blue-700 border-blue-200";
  } else if (user.role === "attendee") {
    roleStyles = "bg-green-100 text-green-700 border-green-200";
  }

  const statusStyles = isSuspended
    ? "bg-red-100 text-red-700 border-red-200"
    : "bg-green-100 text-green-700 border-green-200";

  async function handleToggleSuspend() {
    const toastId = toast.loading(
      isSuspended ? "Reactivating user..." : "Suspending user...",
    );

    try {
      await toggleSuspendUser(user);

      toast.success(
        isSuspended
          ? "User reactivated successfully."
          : "User suspended successfully.",
        {
          id: toastId,
        },
      );
    } catch (error) {
      toast.error(error.message || "Something went wrong.", {
        id: toastId,
      });
    }
  }

  async function handleRoleChange(e) {
    const newRole = e.target.value;

    if (newRole === user.role) return;

    const toastId = toast.loading("Updating role...");

    try {
      await changeUserRole(user, newRole);

      toast.success("Role updated successfully.", {
        id: toastId,
      });
    } catch (error) {
      toast.error(error.message || "Something went wrong.", {
        id: toastId,
      });
    }
  }

  return (
    <>
      {/* ================= DESKTOP (2XL+) ================= */}
      <li
        className={`hidden h-[4.5rem] grid-cols-[25fr_15fr_15fr_15fr_10fr_10fr] items-center border-b border-gray-100 px-8 py-2 transition last:border-b-0 xl:grid ${
          isSuspended
            ? "bg-red-50/40 opacity-80"
            : "hover:bg-[var(--bg-secondary)]"
        }`}
      >
        {/* USER */}
        <div className="flex items-center gap-3">
          <div className="relative aspect-square w-10 overflow-hidden rounded-2xl">
            <Image
              src={user.avatar}
              alt={user.fullName}
              fill
              sizes="40px"
              className={`object-cover transition ${
                isSuspended ? "grayscale" : ""
              }`}
            />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <p
                className={`text-sm font-bold ${
                  isSuspended ? "text-gray-500 line-through" : "text-gray-900"
                }`}
              >
                {user.fullName}
              </p>

              {isSuspended && <FaBan size={11} className="text-red-500" />}
            </div>

            <p className="text-xs text-[var(--text-tertiary)]">{user.email}</p>
          </div>
        </div>

        {/* ROLE */}
        <div>
          <select
            defaultValue={user.role}
            onChange={handleRoleChange}
            className={`rounded-full border px-3 py-1 text-xs font-semibold capitalize transition outline-none ${roleStyles}`}
          >
            <option value="attendee">Attendee</option>
            <option value="organizer">Organizer</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        {/* STATUS */}
        <div>
          <span
            className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold capitalize ${statusStyles}`}
          >
            {user.status}
          </span>
        </div>

        {/* JOINED */}
        <div className="text-sm text-[var(--text-tertiary)]">
          {formattedDate}
        </div>

        {/* EVENTS */}
        <div className="text-sm font-medium">
          {user.eventsCount > 0 ? user.eventsCount : "-"}
        </div>

        {/* ACTION */}
        <div className="flex items-center">
          <button
            onClick={handleToggleSuspend}
            className={`rounded-xl p-2 transition ${
              isSuspended
                ? "hover:bg-green-100 hover:text-green-700"
                : "hover:bg-red-100 hover:text-red-700"
            }`}
          >
            {isSuspended ? <FaUserCheck size={18} /> : <FaBan size={18} />}
          </button>
        </div>
      </li>

      {/* mobile/////////////////////////////////////////////////////////////////// */}

      <li
        className={`mt-4 block rounded-2xl border bg-white p-5 shadow-sm transition xl:hidden ${
          isSuspended ? "border-red-200 bg-red-50/40" : "border-gray-200"
        }`}
      >
        {/* Header */}
        <div className="flex gap-4">
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl">
            <Image
              src={user.avatar}
              alt={user.fullName}
              fill
              sizes="56px"
              className={`object-cover ${isSuspended ? "grayscale" : ""}`}
            />
          </div>

          <div className="min-w-0 flex-1">
            <h3
              className={`truncate text-base font-semibold ${
                isSuspended ? "text-gray-500 line-through" : "text-gray-900"
              }`}
            >
              {user.fullName}
            </h3>

            <p className="mt-1 text-sm break-all text-gray-500">{user.email}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              <span
                className={`rounded-full border px-3 py-1 text-xs font-medium capitalize ${roleStyles}`}
              >
                {user.role}
              </span>

              <span
                className={`rounded-full border px-3 py-1 text-xs font-medium capitalize ${statusStyles}`}
              >
                {user.status}
              </span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-5 grid grid-cols-2 gap-4 rounded-xl p-4">
          <div className="rounded-2xl bg-gray-50 p-2">
            <p className="text-xs tracking-wide text-gray-400 uppercase">
              Joined
            </p>

            <p className="mt-1 font-medium">{formattedDate}</p>
          </div>

          <div className="rounded-2xl bg-gray-50 p-2">
            <p className="text-xs tracking-wide text-gray-400 uppercase">
              Events
            </p>

            <p className="mt-1 font-medium">
              {user.eventsCount > 0 ? user.eventsCount : "-"}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <select
            defaultValue={user.role}
            onChange={handleRoleChange}
            className={`flex-1 rounded-xl border px-4 py-2.5 text-sm font-medium outline-none ${roleStyles}`}
          >
            <option value="attendee">Attendee</option>
            <option value="organizer">Organizer</option>
            <option value="admin">Admin</option>
          </select>

          <button
            onClick={handleToggleSuspend}
            className={`flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 font-medium transition ${
              isSuspended
                ? "bg-green-600 text-white hover:bg-green-700"
                : "bg-red-600 text-white hover:bg-red-700"
            }`}
          >
            {isSuspended ? <FaUserCheck /> : <FaBan />}

            {isSuspended ? "Activate" : "Suspend"}
          </button>
        </div>
      </li>
    </>
  );
}

export default User;
