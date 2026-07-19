"use client";

import Link from "next/link";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import FavouriteEvent from "./FavouriteEvent";
import EmptyState from "../ui/EmptyState";

function FavoriteEventsList({ events, favoriteIds }) {
  const [search, setSearch] = useState("");

  let filteredEvents = events;
  filteredEvents = events.filter((event) =>
    event.events.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <main>
      <div className="mt-6 flex items-center gap-5">
        <div className="relative w-full max-w-md">
          <FaSearch className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-[var(--text-disabled)]" />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search..."
            className="w-full rounded-2xl border border-gray-300 py-2 pr-3 pl-10"
          />
        </div>
      </div>
      {events.length !== 0 ? (
        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredEvents?.map((event) => (
            <FavouriteEvent
              event={event.events}
              isFavorite={favoriteIds.includes(event.events.id)}
              key={event.events.id}
            />
          ))}
        </ul>
      ) : (
        <EmptyState
          title="No favorite events"
          description="Save events you like to access them quickly later."
          action={
            <Link
              href="/events"
              className="rounded-xl bg-indigo-600 px-5 py-3 text-white"
            >
              Browse Events
            </Link>
          }
        />
      )}
    </main>
  );
}

export default FavoriteEventsList;
