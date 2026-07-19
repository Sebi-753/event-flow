"use client";

import Image from "next/image";
import Link from "next/link";
import { MdDateRange, MdLocationOn } from "react-icons/md";
import { HiOutlineClock } from "react-icons/hi2";
import FavouriteButton from "../ui/FavouriteButton";

function FavouriteEvent({ event, isFavorite }) {
  console.log(isFavorite);
  const eventDate = new Date(event.date);
  const today = new Date();

  const daysLeft = Math.ceil((eventDate - today) / (1000 * 60 * 60 * 24));

  const isPast = daysLeft < 0;

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}
      <div className="relative h-52 w-full">
        <Image
          src={
            typeof event.image_url === "string" && event.image_url.length > 0
              ? event.image_url
              : "/images.jpg"
          }
          alt={event.title}
          fill
          className="object-cover"
        />

        <div className="absolute top-4 left-4 rounded-full bg-[var(--indigo-100)] px-3 py-1 text-xs font-semibold text-[var(--indigo-600)]">
          {event.type}
        </div>

        <div className="absolute top-3 right-3 rounded-full bg-white/90 p-1 shadow">
          <FavouriteButton event={event} isFavorite={isFavorite} />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <div>
          <h3 className="line-clamp-1 text-xl font-semibold text-gray-900">
            {event.title}
          </h3>

          <p className="mt-2 line-clamp-2 text-sm text-gray-500">
            {event.description}
          </p>
        </div>

        <div className="mt-5 space-y-3 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <MdDateRange className="text-[var(--indigo-500)]" size={18} />
            <span>{event.date}</span>
          </div>

          <div className="flex items-center gap-2">
            <HiOutlineClock className="text-[var(--indigo-500)]" size={18} />
            <span>{event.time}</span>
          </div>

          <div className="flex items-center gap-2">
            <MdLocationOn className="text-[var(--indigo-500)]" size={18} />
            <span className="line-clamp-1">{event.location}</span>
          </div>
        </div>

        {/* Footer - Always at the bottom */}
        <div className="mt-auto pt-6">
          <div className="mb-4 h-px bg-gray-200" />

          <div className="flex flex-col items-center justify-between gap-4">
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                isPast
                  ? "bg-red-100 text-red-600"
                  : "bg-green-100 text-green-600"
              }`}
            >
              {isPast
                ? `Ended ${Math.abs(daysLeft)} days ago`
                : `${daysLeft} days left`}
            </span>

            <Link
              href={`/events/${event.id}`}
              className="w-full rounded-lg bg-[var(--indigo-600)] px-4 py-2 text-center text-sm font-medium text-white transition hover:bg-[var(--indigo-700)]"
            >
              View Event
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FavouriteEvent;
