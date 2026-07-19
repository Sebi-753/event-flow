function AttendedEventSkeleton() {
  return (
    <li>
      <div className="rounded-xl border border-gray-300 bg-white p-4 shadow-sm">
        {/* Mobile Layout */}
        <div className="flex flex-col gap-4 lg:hidden">
          {/* Image */}
          <div className="h-48 w-full animate-pulse rounded-lg bg-gray-200" />

          {/* Title + favourite */}
          <div className="flex items-start justify-between gap-3">
            <div className="h-6 w-52 animate-pulse rounded bg-gray-200" />

            <div className="h-8 w-8 animate-pulse rounded-full bg-gray-100" />
          </div>

          {/* Badges */}
          <div className="flex gap-2">
            <div className="h-6 w-20 animate-pulse rounded-2xl bg-gray-100" />

            <div className="h-6 w-24 animate-pulse rounded-full bg-gray-100" />
          </div>

          {/* Date + Time */}
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-5">
            <div className="h-4 w-28 animate-pulse rounded bg-gray-100" />

            <div className="h-4 w-20 animate-pulse rounded bg-gray-100" />
          </div>

          {/* Days text */}
          <div className="h-3 w-32 animate-pulse rounded bg-gray-100" />

          {/* Buttons */}
          <div className="flex gap-3">
            <div className="h-10 flex-1 animate-pulse rounded-lg bg-gray-100" />

            <div className="h-10 flex-1 animate-pulse rounded-lg bg-gray-200" />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="relative hidden items-center gap-3 lg:flex">
          {/* Status */}
          <div className="absolute top-3 right-3 h-6 w-20 animate-pulse rounded-full bg-gray-100" />

          {/* Image */}
          <div className="h-20 w-20 shrink-0 animate-pulse rounded-lg bg-gray-200" />

          <div className="flex min-w-0 flex-1 flex-col gap-3">
            {/* Title row */}
            <div className="flex items-center gap-3">
              <div className="h-5 w-48 animate-pulse rounded bg-gray-200" />

              <div className="h-7 w-7 animate-pulse rounded-full bg-gray-100" />

              <div className="h-6 w-20 animate-pulse rounded-2xl bg-gray-100" />
            </div>

            {/* Date row */}
            <div className="flex gap-4">
              <div className="h-4 w-28 animate-pulse rounded bg-gray-100" />

              <div className="h-4 w-20 animate-pulse rounded bg-gray-100" />
            </div>

            {/* Days */}
            <div className="h-3 w-32 animate-pulse rounded bg-gray-100" />
          </div>

          {/* Buttons */}
          <div className="mr-24 ml-auto flex gap-2">
            <div className="h-8 w-28 animate-pulse rounded-lg bg-gray-100" />

            <div className="h-8 w-20 animate-pulse rounded-lg bg-gray-200" />
          </div>
        </div>
      </div>
    </li>
  );
}

export default function AttendedEventsListSkeleton() {
  return (
    <ul className="xs:grid-cols-1 grid gap-4 sm:grid-cols-2 lg:flex lg:flex-col">
      {Array.from({ length: 6 }).map((_, index) => (
        <AttendedEventSkeleton key={index} />
      ))}
    </ul>
  );
}
