"use client";

import Image from "next/image";
import Link from "next/link";
import { HiOutlineEye, HiOutlineTrash } from "react-icons/hi";

import ProgressBar from "../events/ProgressBar";
import { deleteEvent } from "@/lib/actions";
import { toast } from "sonner";

function RecentEvent({ event, user }) {
  const isPast = new Date(event.date) < new Date();

  const formatted = new Date(event.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  async function handleDelete() {
    const toastId = toast.loading("Deleting event...");

    try {
      await deleteEvent(user, event);

      toast.success("Event deleted successfully!", {
        id: toastId,
      });
    } catch {
      toast.error("Failed to delete event.", {
        id: toastId,
      });
    }
  }

  return (
    <li>
      {/* ================= Mobile ================= */}
      <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm lg:hidden">
        <div className="relative mb-4 h-48 w-full overflow-hidden rounded-xl">
          <Image
            src={event.image_url}
            alt={event.title}
            fill
            className="object-cover"
          />
        </div>

        <h3 className="text-lg font-semibold">{event.title}</h3>

        <p className="mt-1 text-sm text-[var(--text-secondary)]">{formatted}</p>

        <div className="mt-5">
          <div className="mb-2 flex items-center justify-between text-sm text-[var(--text-secondary)]">
            <span>Capacity</span>

            <span>
              {event.places_taken}/{event.capacity}
            </span>
          </div>

          <ProgressBar
            width="100%"
            height="8px"
            max={event.capacity}
            value={event.places_taken}
          />
        </div>

        <div className="mt-5">
          {isPast ? (
            <span className="rounded-2xl border border-[var(--green-700)] bg-[var(--green-100)] px-3 py-1 text-sm text-[var(--green-700)]">
              Past
            </span>
          ) : (
            <span className="rounded-2xl border border-[var(--color-blue-700)] bg-[var(--color-blue-100)] px-3 py-1 text-sm text-[var(--color-blue-700)]">
              Upcoming
            </span>
          )}
        </div>

        <div className="mt-6 flex gap-3">
          <Link
            href={`/events/${event.id}`}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-blue-300 px-4 py-2 text-blue-700 transition hover:bg-blue-50"
          >
            <HiOutlineEye />
            View
          </Link>

          <button
            onClick={handleDelete}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-red-300 px-4 py-2 text-red-700 transition hover:bg-red-50"
          >
            <HiOutlineTrash />
            Delete
          </button>
        </div>
      </div>

      {/* ================= Desktop ================= */}
      <div className="hidden h-[4rem] grid-cols-[35fr_15fr_25fr_20fr_10fr] items-center px-8 py-2 text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] lg:grid">
        <div className="flex items-center gap-3">
          <div className="relative aspect-square w-10 overflow-hidden rounded-2xl">
            <Image
              src={event.image_url}
              alt="Image of event"
              fill
              className="object-cover"
            />
          </div>

          <span className="font-semibold">{event.title}</span>
        </div>

        <p className="text-sm text-[var(--text-secondary)]">{formatted}</p>

        <div className="flex items-center gap-5 pr-8">
          <ProgressBar
            width="30%"
            height="5px"
            max={event.capacity}
            value={event.places_taken}
          />

          <div className="flex text-sm text-[var(--text-secondary)]">
            <p>{event.places_taken}</p>
            <span>/</span>
            <p>{event.capacity}</p>
          </div>
        </div>

        <div>
          {isPast ? (
            <p className="w-fit rounded-2xl border border-[var(--green-700)] bg-[var(--green-100)] px-3 py-1 text-sm text-[var(--green-700)]">
              Past
            </p>
          ) : (
            <p className="w-fit rounded-2xl border border-[var(--color-blue-700)] bg-[var(--color-blue-100)] px-3 py-1 text-sm text-[var(--color-blue-700)]">
              Upcoming
            </p>
          )}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href={`/events/${event.id}`}
            className="rounded-xl p-2 transition hover:bg-blue-100 hover:text-blue-700"
          >
            <HiOutlineEye size={18} />
          </Link>

          <button
            onClick={handleDelete}
            className="rounded-xl p-2 transition hover:bg-red-100 hover:text-red-700"
          >
            <HiOutlineTrash size={18} />
          </button>
        </div>
      </div>
    </li>
  );
}

export default RecentEvent;
