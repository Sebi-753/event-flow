import EventsListSkeleton from "./EventsListSkeleton";

function EventsPageSkeleton() {
  return (
    <section className="xs:px-10 animate-pulse px-6 pt-30 sm:px-20 md:px-30">
      <div>
        {/* Header */}
        <header className="flex flex-col gap-3">
          <div className="h-9 w-64 rounded bg-gray-200" />
          <div className="h-5 w-96 max-w-full rounded bg-gray-200" />
        </header>

        {/* Search */}
        <div className="mt-6">
          <div className="h-11 w-full max-w-md rounded-2xl bg-gray-200" />
        </div>

        <div className="my-6 h-px bg-gray-200" />

        {/* Categories */}
        <div className="flex gap-3 overflow-hidden">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-10 w-24 rounded-2xl bg-gray-200" />
          ))}
        </div>

        {/* Counter + Sort */}
        <div className="my-4 flex items-center justify-between">
          <div className="h-5 w-32 rounded bg-gray-200" />
          <div className="h-10 w-40 rounded-xl bg-gray-200" />
        </div>

        <EventsListSkeleton />
      </div>
    </section>
  );
}

export default EventsPageSkeleton;
