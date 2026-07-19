function UsersManagementSkeleton() {
  return (
    <section className="animate-pulse px-3 py-10 md:px-10">
      {/* Header */}
      <header className="text-center md:text-start">
        <div className="mx-auto h-8 w-56 rounded bg-gray-200 md:mx-0" />
        <div className="mx-auto mt-2 h-5 w-80 max-w-full rounded bg-gray-200 md:mx-0" />
      </header>

      <div className="mt-10">
        {/* Search */}
        <div className="relative w-full md:max-w-md">
          <div className="h-12 rounded-2xl bg-gray-200" />
        </div>

        {/* Table/Card Container */}
        <div className="mt-8 px-3 md:rounded-2xl md:bg-white md:shadow-sm xl:px-0">
          {/* Desktop Header */}
          <div className="hidden h-12 grid-cols-[25fr_15fr_15fr_15fr_10fr_10fr] items-center border-y border-gray-200 bg-[var(--bg-secondary)] px-8 xl:grid">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-4 w-20 rounded bg-gray-200" />
            ))}
          </div>

          {/* Mobile title */}
          <div className="mb-5 block h-7 w-24 rounded bg-gray-200 xl:hidden" />

          <ul className="h-[70dvh] space-y-4 overflow-hidden overflow-y-hidden rounded-2xl">
            {Array.from({ length: 8 }).map((_, index) => (
              <li key={index}>
                {/* ================= Desktop ================= */}
                <div className="hidden h-[4.5rem] grid-cols-[25fr_15fr_15fr_15fr_10fr_10fr] items-center border-b border-gray-100 px-8 py-2 xl:grid">
                  {/* User */}
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-2xl bg-gray-200" />

                    <div className="space-y-2">
                      <div className="h-4 w-32 rounded bg-gray-200" />
                      <div className="h-3 w-40 rounded bg-gray-200" />
                    </div>
                  </div>

                  {/* Role */}
                  <div className="h-8 w-28 rounded-full bg-gray-200" />

                  {/* Status */}
                  <div className="h-8 w-24 rounded-full bg-gray-200" />

                  {/* Joined */}
                  <div className="h-4 w-20 rounded bg-gray-200" />

                  {/* Events */}
                  <div className="h-4 w-8 rounded bg-gray-200" />

                  {/* Action */}
                  <div className="h-10 w-10 rounded-xl bg-gray-200" />
                </div>

                {/* ================= Mobile ================= */}
                <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm xl:hidden">
                  <div className="flex gap-4">
                    <div className="h-14 w-14 rounded-2xl bg-gray-200" />

                    <div className="flex-1">
                      <div className="h-5 w-36 rounded bg-gray-200" />

                      <div className="mt-2 h-4 w-48 rounded bg-gray-200" />

                      <div className="mt-3 flex gap-2">
                        <div className="h-7 w-24 rounded-full bg-gray-200" />
                        <div className="h-7 w-24 rounded-full bg-gray-200" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-gray-100 p-3">
                      <div className="h-3 w-12 rounded bg-gray-200" />
                      <div className="mt-2 h-4 w-20 rounded bg-gray-200" />
                    </div>

                    <div className="rounded-2xl bg-gray-100 p-3">
                      <div className="h-3 w-12 rounded bg-gray-200" />
                      <div className="mt-2 h-4 w-8 rounded bg-gray-200" />
                    </div>
                  </div>

                  <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                    <div className="h-11 flex-1 rounded-xl bg-gray-200" />
                    <div className="h-11 flex-1 rounded-xl bg-gray-200" />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default UsersManagementSkeleton;
