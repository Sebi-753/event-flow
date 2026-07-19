"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

function FilterEvents() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("query") || "");

  //the effect is executed everytime the search state changes onChange in the input and adds the new input to the url everytime the timeout(400) finnishes.
  useEffect(() => {
    const timeout = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());

      if (search) {
        params.set("query", search);
      } else {
        params.delete("query");
      }

      router.replace(`/events?${params.toString()}`);
    }, 400); // debounce

    return () => clearTimeout(timeout);
  }, [search]);

  return (
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
  );
}

export default FilterEvents;
