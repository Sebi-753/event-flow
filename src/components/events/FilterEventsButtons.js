"use client";

import { useRouter, useSearchParams } from "next/navigation";

const categories = [
  "All",
  "Technology",
  "Business",
  "Design",
  "Arts",
  "Health",
  "Sports",
];

function FilterEventsButtons() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const category = searchParams.get("category") || "All";

  function setFilter(value) {
    const params = new URLSearchParams(searchParams);
    params.set("category", value);
    router.replace(`/events?${params.toString()}`);
  }

  const active = "bg-[var(--color-primary)] text-white";

  return (
    <>
      {/* Mobile Dropdown */}
      <div className="lg:hidden">
        <select
          value={category}
          onChange={(e) => setFilter(e.target.value)}
          className="w-fit rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm shadow-sm outline-none focus:border-[var(--color-primary)]"
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      {/* Desktop Buttons */}
      <div className="hidden overflow-x-auto lg:block">
        <ul className="flex gap-4">
          {categories.map((item) => (
            <li
              key={item}
              onClick={() => setFilter(item)}
              className={`cursor-pointer rounded-2xl border border-gray-400 px-5 py-2 transition hover:bg-gray-100 ${
                category === item ? active : ""
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default FilterEventsButtons;
