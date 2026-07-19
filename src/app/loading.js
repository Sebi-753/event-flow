function Loading() {
  return (
    <main className="min-h-screen animate-pulse bg-[var(--bg-secondary)]">
      {/* Navbar */}
      <nav className="flex h-20 items-center justify-between border-b border-gray-200 px-6 md:px-12 lg:px-24">
        <div className="h-10 w-36 rounded-xl bg-gray-200" />

        <div className="hidden gap-8 md:flex">
          <div className="h-4 w-16 rounded bg-gray-200" />
          <div className="h-4 w-16 rounded bg-gray-200" />
          <div className="h-4 w-20 rounded bg-gray-200" />
          <div className="h-4 w-16 rounded bg-gray-200" />
        </div>

        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gray-200" />
          <div className="hidden flex-col gap-2 sm:flex">
            <div className="h-3 w-24 rounded bg-gray-200" />
            <div className="h-3 w-16 rounded bg-gray-200" />
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pt-20 md:px-12 lg:px-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6">
          <div className="h-12 w-3/4 rounded bg-gray-200" />
          <div className="h-6 w-full rounded bg-gray-200" />
          <div className="h-6 w-5/6 rounded bg-gray-200" />
          <div className="mt-4 h-12 w-44 rounded-xl bg-gray-200" />
        </div>

        {/* Cards */}
        <div className="mt-24 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white"
            >
              <div className="h-52 bg-gray-200" />

              <div className="space-y-4 p-5">
                <div className="h-5 w-3/4 rounded bg-gray-200" />

                <div className="h-4 w-1/2 rounded bg-gray-200" />
                <div className="h-4 w-2/3 rounded bg-gray-200" />

                <div className="mt-6 h-px bg-gray-200" />

                <div className="flex items-center justify-between">
                  <div className="h-4 w-24 rounded bg-gray-200" />
                  <div className="h-4 w-20 rounded bg-gray-200" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Loading;
