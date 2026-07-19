function AttendeeSkeleton() {
  return (
    <li className="mt-4 first:mt-0 xl:mt-0">
      {/* Mobile / Tablet */}
      <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm xl:hidden">
        {/* User */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <div className="h-12 w-12 animate-pulse rounded-full bg-gray-200" />

            <div className="space-y-2">
              {/* Name */}
              <div className="h-4 w-32 animate-pulse rounded bg-gray-200" />

              {/* Email */}
              <div className="h-3 w-44 animate-pulse rounded bg-gray-100" />
            </div>
          </div>

          {/* Status */}
          <div className="h-6 w-20 animate-pulse rounded-full bg-gray-100" />
        </div>

        {/* Event */}
        <div className="mt-5 flex items-center gap-3 rounded-lg bg-gray-50 p-3">
          {/* Event image */}
          <div className="h-16 w-16 animate-pulse rounded-xl bg-gray-200" />

          <div className="space-y-2">
            {/* Event title */}
            <div className="h-4 w-36 animate-pulse rounded bg-gray-200" />

            {/* Date */}
            <div className="h-3 w-28 animate-pulse rounded bg-gray-100" />
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden h-[4rem] items-center px-8 py-2 xl:grid xl:grid-cols-[35fr_25fr_25fr_20fr]">
        {/* Attendee */}
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 animate-pulse rounded-2xl bg-gray-200" />

          <div className="space-y-2">
            <div className="h-3 w-28 animate-pulse rounded bg-gray-200" />

            <div className="h-3 w-36 animate-pulse rounded bg-gray-100" />
          </div>
        </div>

        {/* Event */}
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 animate-pulse rounded-2xl bg-gray-200" />

          <div className="h-3 w-28 animate-pulse rounded bg-gray-100" />
        </div>

        {/* Registered */}
        <div className="h-3 w-24 animate-pulse rounded bg-gray-100" />

        {/* Status */}
        <div className="h-6 w-24 animate-pulse rounded-full bg-gray-100" />
      </div>
    </li>
  );
}

export default function AttendeesPageSkeleton() {
  return (
    <section className="flex flex-col px-6 py-10 sm:px-10">
      {/* Header */}
      <header className="flex flex-col gap-2 text-center md:text-start">
        <div className="mx-auto h-9 w-72 animate-pulse rounded bg-gray-200 md:mx-0" />

        <div className="mx-auto h-4 w-80 animate-pulse rounded bg-gray-100 md:mx-0" />
      </header>

      {/* Search + list */}
      <div className="mt-6 flex flex-col gap-5">
        {/* Search */}
        <div className="h-10 w-full max-w-md animate-pulse rounded-2xl bg-gray-100" />

        {/* Table container */}
        <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
          {/* Desktop header */}
          <div className="hidden h-[3rem] items-center border-t border-b border-gray-200 bg-[var(--bg-secondary)] px-8 xl:grid xl:grid-cols-[35fr_25fr_25fr_20fr]">
            <div className="h-3 w-16 animate-pulse rounded bg-gray-200" />

            <div className="h-3 w-14 animate-pulse rounded bg-gray-200" />

            <div className="h-3 w-20 animate-pulse rounded bg-gray-200" />

            <div className="h-3 w-14 animate-pulse rounded bg-gray-200" />
          </div>

          <ul className="h-fit max-h-[35rem] overflow-y-scroll">
            {Array.from({ length: 6 }).map((_, index) => (
              <AttendeeSkeleton key={index} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
