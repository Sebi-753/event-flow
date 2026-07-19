import AttendedEventSkeleton from "./AttendedEventSkeleton";

function AttendedEventsPageSkeleton() {
  return (
    <section className="animate-pulse px-6 py-10 md:px-10">
      {/* Header */}
      <header className="mb-10 flex flex-col items-center gap-2 md:items-start">
        <div className="h-8 w-64 rounded-lg bg-gray-200" />
        <div className="h-4 w-56 rounded bg-gray-200" />
      </header>

      {/* Filters */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="h-11 w-full rounded-2xl bg-gray-200 md:max-w-sm" />

        <div className="flex gap-3">
          <div className="h-11 w-32 rounded-xl bg-gray-200" />
        </div>
      </div>

      {/* Event List */}
      <ul className="xs:grid-cols-1 mt-10 grid gap-4 sm:grid-cols-2 lg:flex lg:flex-col">
        {Array.from({ length: 4 }).map((_, i) => (
          <AttendedEventSkeleton key={i} />
        ))}
      </ul>
    </section>
  );
}

export default AttendedEventsPageSkeleton;
