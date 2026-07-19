import Link from "next/link";
import Image from "next/image";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { HiOutlineClock } from "react-icons/hi2";

import CancelRegistrationButton from "../ui/CancelRegistrationButton";
import FavouriteButtonServer from "../ui/FavouriteButtonServer";
import LeaveReviewButton from "../ui/LeaveReviewButton";

function AttendedEvent({ event }) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const eventDate = new Date(event.date);
  eventDate.setHours(0, 0, 0, 0);

  const daysUntilEvent = Math.ceil((eventDate - today) / (1000 * 60 * 60 * 24));

  const isPast = eventDate < today;

  return (
    <div className="rounded-xl border border-gray-300 bg-white p-4 shadow-sm transition hover:shadow-md">
      {/* Mobile Layout */}
      <div className="flex flex-col gap-4 lg:hidden">
        <div className="relative h-48 w-full overflow-hidden rounded-lg">
          <Image
            src={event.image_url}
            fill
            alt={event.title}
            className="object-cover"
          />
        </div>

        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>

          <FavouriteButtonServer event={event} />
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="rounded-2xl bg-[var(--green-100)] px-3 py-1 text-xs font-bold text-[var(--green-700)]">
            {event.type}
          </span>

          <span
            className={`rounded-full px-3 py-1 text-xs font-medium ${
              isPast ? "bg-red-50 text-red-600" : "bg-green-50 text-green-600"
            }`}
          >
            {isPast ? "Past" : "Upcoming"}
          </span>
        </div>

        <div className="flex flex-col gap-2 text-sm text-gray-500 sm:flex-row sm:gap-4">
          <div className="flex items-center gap-1">
            <MdOutlineCalendarMonth size={16} />
            <span>{event.date}</span>
          </div>

          <div className="flex items-center gap-1">
            <HiOutlineClock size={16} />
            <span>{event.time}</span>
          </div>
        </div>

        <p className="text-xs text-gray-400">
          {isPast
            ? `Ended ${Math.abs(daysUntilEvent)} days ago`
            : `Starts in ${daysUntilEvent} days`}
        </p>

        <div className="flex gap-3">
          <div className="flex-1">
            {!isPast ? <CancelRegistrationButton event={event} /> : ""}
          </div>
          <LeaveReviewButton eventId={event.id} />

          <Link
            href={`/events/${event.id}`}
            className="flex-1 rounded-lg border border-indigo-300 px-4 py-2 text-center text-sm font-medium text-indigo-600 transition hover:bg-indigo-50"
          >
            View
          </Link>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="relative hidden items-center gap-3 lg:flex">
        <span
          className={`absolute top-3 right-3 rounded-full px-3 py-1 text-xs font-medium ${
            isPast ? "bg-red-50 text-red-600" : "bg-green-50 text-green-600"
          }`}
        >
          {isPast ? "Past" : "Upcoming"}
        </span>

        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg">
          <Image
            src={event.image_url}
            fill
            alt={event.title}
            className="object-cover"
          />
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="flex min-w-0 items-center gap-2">
              <h3 className="truncate text-base font-semibold text-gray-900">
                {event.title}
              </h3>
            </div>

            <FavouriteButtonServer event={event} />

            <span className="rounded-2xl bg-[var(--green-100)] px-3 py-1 text-xs font-bold text-[var(--green-700)]">
              {event.type}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <MdOutlineCalendarMonth size={16} />
              <span>{event.date}</span>
            </div>

            <div className="flex items-center gap-1">
              <HiOutlineClock size={16} />
              <span>{event.time}</span>
            </div>
          </div>

          <p className="text-xs text-gray-400">
            {isPast
              ? `Ended ${Math.abs(daysUntilEvent)} days ago`
              : `Starts in ${daysUntilEvent} days`}
          </p>
        </div>

        <div className="mr-24 ml-auto flex shrink-0 gap-2">
          {isPast ? (
            <LeaveReviewButton eventId={event.id} />
          ) : (
            <CancelRegistrationButton event={event} />
          )}

          <Link
            href={`/events/${event.id}`}
            className="rounded-lg border border-indigo-300 px-4 py-1.5 text-sm font-medium text-indigo-600 transition hover:bg-indigo-50"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AttendedEvent;
