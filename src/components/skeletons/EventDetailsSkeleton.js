function EventDetailsSkeleton() {
  return (
    <section className="xs:px-16 animate-pulse px-10 py-30 sm:px-30">
      {/* Hero */}
      <header className="xs:h-45 relative h-45 overflow-hidden rounded-xl bg-gray-200 sm:h-64">
        <div className="absolute bottom-[10%] left-[10%] flex flex-col gap-3">
          <div className="h-7 w-24 rounded-full bg-gray-300" />

          <div className="flex items-center gap-5">
            <div className="h-9 w-72 rounded bg-gray-300" />

            <div className="h-10 w-10 rounded-full bg-gray-300" />
          </div>
        </div>
      </header>

      <main className="mx-auto w-full">
        {/* Organizer */}
        <div className="my-12 flex gap-6 rounded-xl bg-white p-4 shadow-sm">
          <div className="h-12 w-12 rounded-full bg-gray-200" />

          <div className="space-y-2">
            <div className="h-3 w-24 rounded bg-gray-200" />
            <div className="h-5 w-40 rounded bg-gray-200" />
          </div>
        </div>

        {/* Info cards */}
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="rounded-xl bg-white p-4 shadow-sm">
              <div className="mb-3 h-4 w-28 rounded bg-gray-200" />
              <div className="h-5 w-40 rounded bg-gray-200" />
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="mt-10">
          <div className="mb-5 h-6 w-44 rounded bg-gray-200" />

          <div className="space-y-3">
            <div className="h-4 w-full rounded bg-gray-200" />
            <div className="h-4 w-full rounded bg-gray-200" />
            <div className="h-4 w-5/6 rounded bg-gray-200" />
            <div className="h-4 w-4/6 rounded bg-gray-200" />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex justify-end gap-4">
          <div className="h-12 w-48 rounded-xl bg-gray-200" />
          <div className="h-12 w-44 rounded-xl bg-gray-200" />
        </div>

        {/* Reviews */}
        <aside className="mt-14">
          <div className="mb-6 h-7 w-28 rounded bg-gray-200" />

          {/* Review form */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-2 h-6 w-40 rounded bg-gray-200" />
            <div className="mb-8 h-4 w-64 rounded bg-gray-200" />

            <div className="mb-6">
              <div className="mb-3 h-4 w-28 rounded bg-gray-200" />

              <div className="flex gap-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="h-8 w-8 rounded-full bg-gray-200" />
                ))}
              </div>
            </div>

            <div className="h-36 rounded-xl bg-gray-200" />

            <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="h-4 w-52 rounded bg-gray-200" />

              <div className="h-11 w-full rounded-xl bg-gray-200 md:w-40" />
            </div>
          </div>

          {/* Reviews */}
          <div className="mt-16 space-y-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-200 bg-white p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gray-200" />

                  <div className="space-y-2">
                    <div className="h-4 w-36 rounded bg-gray-200" />
                    <div className="h-3 w-24 rounded bg-gray-200" />
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  <div className="h-4 w-full rounded bg-gray-200" />
                  <div className="h-4 w-11/12 rounded bg-gray-200" />
                  <div className="h-4 w-8/12 rounded bg-gray-200" />
                </div>
              </div>
            ))}
          </div>
        </aside>
      </main>
    </section>
  );
}

export default EventDetailsSkeleton;
