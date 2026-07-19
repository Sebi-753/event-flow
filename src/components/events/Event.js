"use client";

import { useRouter } from "next/navigation";
import { Suspense } from "react";

import Image from "next/image";
import { MdDateRange, MdLocationOn } from "react-icons/md";

import StarRating from "../ui/StarRating";
import ProgressBar from "./ProgressBar";
import FavouriteButton from "../ui/FavouriteButton";

function Event({ event, isFavorite }) {
  const router = useRouter();

  const eventId = event.id;

  const placesLeft = Number(event.capacity) - Number(event.places_taken);

  // Check if the event has already passed
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const eventDate = new Date(event.date);

  const isPast = eventDate < today;
  const isFull = placesLeft <= 0;

  function openEventDetails(id) {
    router.push(`/events/${id}`);
  }

  return (
    <div
      onClick={() => openEventDetails(eventId)}
      className={`relative grid h-fit w-full cursor-pointer grid-cols-2 flex-row overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl lg:flex lg:h-[20rem] lg:flex-col ${
        isPast ? "opacity-90" : ""
      }`}
    >
      {/* IMAGE */}
      <div className="relative w-full overflow-hidden lg:h-1/2">
        <Image
          alt="event image"
          fill
          src={
            typeof event?.image_url === "string" && event.image_url.length > 0
              ? event.image_url
              : "/images.jpg"
          }
          className={`z-0 object-cover transition duration-500 hover:scale-105 ${
            isPast ? "grayscale" : ""
          }`}
        />

        {isPast && <div className="absolute inset-0 z-10 bg-gray-900/50" />}

        {isPast && (
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-800 shadow-lg">
              Event Finished
            </span>
          </div>
        )}
      </div>
      {/* TOP BADGES */}
      <div className="absolute top-3 right-3 left-3 flex items-center justify-between">
        <div className="flex gap-2">
          <span className="rounded-full bg-[var(--indigo-100)] px-3 py-1 text-xs font-semibold text-[var(--indigo-600)]">
            {event.type}
          </span>

          {isPast && (
            <span className="rounded-full bg-gray-900 px-3 py-1 text-xs font-semibold text-white">
              Past
            </span>
          )}
        </div>

        <div onClick={(e) => e.stopPropagation()}>
          <Suspense fallback={<p>...</p>}>
            <FavouriteButton event={event} isFavorite={isFavorite} />
          </Suspense>
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex h-1/2 flex-col justify-between p-4">
        <div>
          <h3 className="xs:text-lg line-clamp-1 text-base font-semibold">
            {event.title}
          </h3>

          <div className="mt-2 space-y-2 text-sm text-[var(--text-tertiary)]">
            <div className="flex items-start gap-2 md:items-center">
              <MdDateRange className="mt-0.5 h-4 w-4 flex-shrink-0" />

              <span>
                {event.date} • {event.time}
              </span>
            </div>

            <div className="flex items-start gap-2 md:items-center">
              <MdLocationOn className="mt-0.5 h-4 w-4 flex-shrink-0" />
              <span>{event.location}</span>
            </div>
          </div>
        </div>

        <div>
          <div className="my-3 h-px bg-gray-200" />

          <div className="flex flex-col items-start justify-between gap-2 lg:flex-row lg:items-center lg:gap-0">
            <div className="flex items-center gap-2">
              <StarRating rating={event.average_rating} />

              <p className="text-sm text-[var(--text-disabled)]">
                ({event.num_ratings})
              </p>
            </div>

            {isPast ? (
              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
                Event completed
              </span>
            ) : (
              <div className="flex w-full items-center gap-2 lg:w-[52%]">
                <ProgressBar value={event.places_taken} max={event.capacity} />
                {isFull ? (
                  <span className="w-full text-xs text-[var(--text-disabled)] lg:w-20">
                    Full
                  </span>
                ) : (
                  <span className="w-full text-sm text-[var(--text-disabled)] lg:w-20">
                    {placesLeft} left
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
