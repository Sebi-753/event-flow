"use client";
import { useRouter, useSearchParams } from "next/navigation";

function Sort() {
  const router = useRouter();
  const searchParams = useSearchParams();

  function setSort(value) {
    const params = new URLSearchParams(searchParams);
    params.set("sort", value);
    router.replace(`/events?${params.toString()}`);
  }
  const sort = searchParams.get("sort");

  return (
    <div className="w-48">
      <select
        value={sort || "latest"}
        onChange={(e) => setSort(e.target.value)}
        className="w-full cursor-pointer rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-black focus:outline-none"
      >
        <option value="latest">Latest</option>
        <option value="date">Date</option>
        <option value="rating">Rating</option>
        <option value="oldest">Oldest</option>
      </select>
    </div>
  );
}

export default Sort;
