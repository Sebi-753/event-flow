"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
          <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-red-100 text-2xl text-red-600">
              !
            </div>

            <h1 className="text-2xl font-semibold text-gray-900">
              Something went wrong
            </h1>

            <p className="mt-3 text-sm text-gray-500">
              We couldn&apos;t complete your request. Please try again.
            </p>

            {process.env.NODE_ENV === "development" && (
              <p className="mt-4 rounded-lg bg-gray-100 p-3 text-left text-xs text-gray-600">
                {error.message}
              </p>
            )}

            <button
              onClick={() => reset()}
              className="mt-6 rounded-xl bg-[var(--color-primary)] px-5 py-2.5 font-medium text-white transition hover:bg-[var(--color-primary-hover)]"
            >
              Try again
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
