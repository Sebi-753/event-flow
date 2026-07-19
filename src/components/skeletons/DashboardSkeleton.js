import EventsListSkeleton from "./EventsListSkeleton";

function DashboardSkeleton() {
  return (
    <section className="animate-pulse px-6 py-10 md:px-10">
      {/* Header */}
      <header className="mb-10 flex flex-col items-center md:items-start">
        <div className="h-8 w-64 rounded-lg bg-gray-200" />
        <div className="mt-3 h-4 w-80 max-w-full rounded bg-gray-200" />
      </header>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-5">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="xs:px-4 flex h-36 flex-col justify-between rounded-2xl border border-gray-200 bg-white px-2 py-3 sm:px-6"
          >
            <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:gap-0 sm:text-start">
              {/* Icon */}
              <div className="rounded-xl bg-gray-200 p-2">
                <div className="h-6 w-6 rounded bg-gray-300 md:h-7 md:w-7" />
              </div>

              {/* Title */}
              <div className="h-3 w-18 rounded bg-gray-200 sm:w-24" />
            </div>

            {/* Value */}
            <div className="flex justify-center">
              <div className="h-8 w-8 rounded bg-gray-200" />
            </div>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-6 h-6 w-52 rounded bg-gray-200" />

        <div className="relative h-72 rounded-xl bg-gray-100">
          {/* fake bars */}
          <div className="absolute bottom-6 left-8 flex h-52 items-end gap-4">
            {[40, 75, 55, 95, 65, 120, 90].map((height, i) => (
              <div
                key={i}
                className="w-8 rounded-t-lg bg-gray-200"
                style={{ height }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming */}
      <div className="mt-12 mb-6">
        <div className="h-8 w-56 rounded-lg bg-gray-200" />
      </div>

      <EventsListSkeleton />

      {/* Recommended */}
      <div className="mt-12 mb-6">
        <div className="h-8 w-64 rounded-lg bg-gray-200" />
      </div>

      <EventsListSkeleton />
    </section>
  );
}

export default DashboardSkeleton;
