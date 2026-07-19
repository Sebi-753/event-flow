function EventRowSkeleton() {
  return (
    <li>
      {/* Mobile */}
      <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm lg:hidden">
        <div className="h-48 w-full animate-pulse rounded-xl bg-gray-200" />

        <div className="mt-4 h-5 w-2/3 animate-pulse rounded bg-gray-200" />

        <div className="mt-2 h-4 w-32 animate-pulse rounded bg-gray-100" />

        <div className="mt-5 h-2 w-full animate-pulse rounded bg-gray-200" />

        <div className="mt-5 h-6 w-24 animate-pulse rounded-full bg-gray-100" />

        <div className="mt-6 flex gap-3">
          <div className="h-10 flex-1 animate-pulse rounded-lg bg-gray-100" />
          <div className="h-10 flex-1 animate-pulse rounded-lg bg-gray-100" />
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden h-[4rem] items-center px-8 py-2 lg:grid lg:grid-cols-[35fr_15fr_25fr_20fr_10fr]">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 animate-pulse rounded-2xl bg-gray-200" />

          <div className="h-4 w-32 animate-pulse rounded bg-gray-200" />
        </div>

        <div className="h-4 w-24 animate-pulse rounded bg-gray-100" />

        <div className="h-2 w-3/4 animate-pulse rounded bg-gray-200" />

        <div className="h-6 w-24 animate-pulse rounded-full bg-gray-100" />

        <div className="flex gap-4">
          <div className="h-8 w-8 animate-pulse rounded-xl bg-gray-100" />

          <div className="h-8 w-8 animate-pulse rounded-xl bg-gray-100" />
        </div>
      </div>
    </li>
  );
}

export default function EventsOrganizerPageSkeleton() {
  return (
    <section className="px-10 py-8">
      {/* Header */}

      <header className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between md:gap-0">
        <div className="flex flex-col items-center md:items-start">
          {/* Title */}
          <div className="h-9 w-28 animate-pulse rounded bg-gray-200" />

          {/* Description */}
          <div className="mx-auto mt-3 h-4 w-72 animate-pulse rounded bg-gray-100" />
        </div>

        {/* Create event button */}
        <div className="h-10 w-32 animate-pulse rounded-xl bg-gray-200" />
      </header>

      {/* Events container */}
      <div className="mt-10 space-y-4 lg:rounded-2xl lg:border lg:border-gray-200 lg:bg-white lg:shadow-sm">
        {/* Desktop table header */}
        <div className="hidden h-[3rem] items-center border-t border-b border-gray-200 bg-[var(--bg-secondary)] px-8 lg:grid lg:grid-cols-[35fr_15fr_25fr_20fr_10fr]">
          <div className="h-3 w-12 animate-pulse rounded bg-gray-200" />
          <div className="h-3 w-10 animate-pulse rounded bg-gray-200" />
          <div className="h-3 w-20 animate-pulse rounded bg-gray-200" />
          <div className="h-3 w-14 animate-pulse rounded bg-gray-200" />
        </div>

        <ul className="space-y-4 md:grid md:grid-cols-2 md:gap-6 md:space-y-0 lg:block">
          {Array.from({ length: 6 }).map((_, index) => (
            <EventRowSkeleton key={index} />
          ))}
        </ul>
      </div>
    </section>
  );
}
