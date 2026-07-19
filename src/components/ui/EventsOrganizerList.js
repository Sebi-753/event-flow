"use client";

import Link from "next/link";
import RecentEvent from "./RecentEvent";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import EmptyState from "./EmptyState";

function EventsOrganizerList({ num, events: allEvents, user }) {
  const [search, setSearch] = useState("");

  let events = allEvents;
  if (num) events = events?.slice(0, num);

  if (search)
    events = events.filter((event) =>
      event.title.toLowerCase().includes(search.toLowerCase()),
    );

  return (
    <>
      {!num && (
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
      )}
      <div className="mt-10 space-y-4 lg:space-y-0 lg:rounded-2xl lg:border lg:border-gray-200 lg:bg-white lg:shadow-sm">
        {num && (
          <div className="flex items-center justify-between px-8 py-4">
            <h3 className="text-lg font-semibold">Recent Events</h3>
            <Link
              className="rounded-2xl px-4 py-2 text-sm font-semibold text-[var(--text-tertiary)] transition duration-300 hover:bg-gray-100 hover:text-[var(--text-primary)]"
              href={"/dashboard/events"}
            >
              View all &rarr;
            </Link>
          </div>
        )}
        <ul className="space-y-4 md:grid md:grid-cols-2 md:gap-6 md:space-y-0 lg:block">
          <li className="hidden h-[3rem] items-center border-t border-b border-gray-200 bg-[var(--bg-secondary)] px-8 text-xs font-semibold text-[var(--text-tertiary)] uppercase lg:grid lg:grid-cols-[35fr_15fr_25fr_20fr_10fr]">
            <p>Event</p>
            <p>Date</p>
            <p>Registrations</p>
            <p>Status</p>
          </li>
          {events.length !== 0 ? (
            <>
              {events?.map((event) => (
                <RecentEvent user={user} key={event.id} event={event} />
              ))}
            </>
          ) : (
            <EmptyState
              title="No events"
              description="You haven't created any event yet!"
              action={
                <Link
                  href="/dashboard/newEvent"
                  className="rounded-xl bg-indigo-600 px-5 py-3 text-white"
                >
                  Create Event
                </Link>
              }
            />
          )}
        </ul>
      </div>
    </>
  );
}

export default EventsOrganizerList;
