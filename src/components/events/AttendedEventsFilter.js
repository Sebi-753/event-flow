"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

const statuses = ["All", "Upcoming", "Past"];

const categories = [
  "All",
  "Technology",
  "Business",
  "Design",
  "Arts",
  "Health",
  "Sports",
];

function AttendedEventsFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeClass = "bg-[var(--color-primary)] text-white";

  //state
  const [status, setStatus] = useState(searchParams.get("status") || "All");

  const [category, setCategory] = useState(
    searchParams.get("category") || "All",
  );

  const [search, setSearch] = useState(searchParams.get("query") || "");

  function updateParams(key, value) {
    const params = new URLSearchParams(searchParams.toString());

    //if there is no value the key in the URL is deleted and else if  there is a value it is set in the URL
    if (!value || value === "All") {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    router.replace(`/dashboard/attends?${params.toString()}`);
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      updateParams("query", search);
    }, 400);

    return () => clearTimeout(timeout);
  }, [search]);

  return (
    <div className="space-y-5">
      {/* Status */}
      <div>
        <ul className="flex flex-wrap gap-3">
          {statuses.map((item) => (
            <li
              key={item}
              onClick={() => {
                setStatus(item);
                updateParams("status", item);
              }}
              className={`cursor-pointer rounded-2xl border border-gray-300 px-4 py-2 transition ${
                status === item ? activeClass : ""
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Search */}
      <div className="relative w-full max-w-md">
        <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search attended events..."
          className="w-full rounded-2xl border border-gray-300 py-3 pr-3 pl-10 outline-none focus:border-[var(--color-primary)]"
        />
      </div>

      {/* Category */}
      <div>
        {/* Mobile */}
        <div className="lg:hidden">
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              updateParams("category", e.target.value);
            }}
            className="w-fit rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm shadow-sm outline-none focus:border-[var(--color-primary)]"
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* Desktop */}
        <div className="hidden lg:block">
          <ul className="flex flex-wrap gap-3">
            {categories.map((item) => (
              <li
                key={item}
                onClick={() => {
                  setCategory(item);
                  updateParams("category", item);
                }}
                className={`cursor-pointer rounded-2xl border border-gray-300 px-4 py-2 transition ${
                  category === item ? activeClass : ""
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AttendedEventsFilter;
