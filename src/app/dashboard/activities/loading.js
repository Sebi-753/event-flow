import ActivitySkeleton from "@/components/skeletons/ActivitySkeleton";

export default function Loading() {
  return (
    <div className="px-4 py-8 sm:px-6 md:px-10">
      {/* Header skeleton */}
      <header className="mb-8 text-center md:text-left">
        <div className="mx-auto h-8 w-52 animate-pulse rounded-md bg-gray-200 md:mx-0" />

        <div className="mx-auto mt-3 h-4 w-72 animate-pulse rounded-md bg-gray-100 md:mx-0" />
      </header>

      {/* Activity container skeleton */}
      <main className="h-[65vh] overflow-hidden rounded-3xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6 md:h-[70vh]">
        <ul className="flex flex-col gap-3 sm:gap-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <ActivitySkeleton key={index} />
          ))}
        </ul>
      </main>
    </div>
  );
}
