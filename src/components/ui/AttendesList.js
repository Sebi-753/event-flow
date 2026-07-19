"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Attendee from "./Attendee";
import EmptyState from "./EmptyState";

function AttendesList({ data }) {
  const [search, setSearch] = useState("");
  let attendes = data;

  if (search)
    attendes = attendes.filter((att) =>
      att.user.fullName.toLowerCase().includes(search.toLowerCase()),
    );

  return (
    <div className="mt-6 flex flex-col gap-5">
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

      <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
        <ul className="h-fit max-h-[35rem] overflow-y-scroll">
          <li className="hidden h-[3rem] grid-cols-[35fr_25fr_25fr_20fr] items-center border-t border-b border-gray-200 bg-[var(--bg-secondary)] px-8 text-xs font-semibold text-[var(--text-tertiary)] uppercase xl:grid">
            <p>Attendee</p>
            <p>Event</p>
            <p>Registered</p>
            <p>Status</p>
          </li>
          {data.length !== 0 ? (
            <>
              {attendes?.map((attende) => (
                <Attendee data={attende} key={attende.id} />
              ))}
            </>
          ) : (
            <EmptyState
              title="No registrations"
              description="There are currently no registrations to any of your events!"
            />
          )}
        </ul>
      </div>
    </div>
  );
}

export default AttendesList;
