export default function CreateEventSkeleton() {
  return (
    <section className="px-6 py-10 sm:px-10">
      {/* Header */}
      <header className="mb-8 flex flex-col items-center">
        <div className="h-9 w-64 animate-pulse rounded bg-gray-200" />

        <div className="mt-3 h-4 w-80 animate-pulse rounded bg-gray-100" />
      </header>

      {/* Form container */}
      <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="space-y-6">
          {/* Title input */}
          <div className="space-y-2">
            <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />

            <div className="h-11 w-full animate-pulse rounded-xl bg-gray-100" />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <div className="h-4 w-32 animate-pulse rounded bg-gray-200" />

            <div className="h-32 w-full animate-pulse rounded-xl bg-gray-100" />
          </div>

          {/* Image upload */}
          <div className="space-y-2">
            <div className="h-4 w-28 animate-pulse rounded bg-gray-200" />

            <div className="h-48 w-full animate-pulse rounded-xl bg-gray-100" />
          </div>

          {/* Date + Capacity */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <div className="h-4 w-20 animate-pulse rounded bg-gray-200" />

              <div className="h-11 animate-pulse rounded-xl bg-gray-100" />
            </div>

            <div className="space-y-2">
              <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />

              <div className="h-11 animate-pulse rounded-xl bg-gray-100" />
            </div>
          </div>

          {/* Location */}
          <div className="space-y-2">
            <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />

            <div className="h-11 w-full animate-pulse rounded-xl bg-gray-100" />
          </div>

          {/* Submit button */}
          <div className="mt-8 h-11 w-40 animate-pulse rounded-xl bg-gray-200" />
        </div>
      </div>
    </section>
  );
}
