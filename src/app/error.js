"use client";

import Link from "next/link";

export default function Error({ error, reset }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-6 text-white">
      <div className="max-w-lg text-center">
        <div className="mb-6 text-7xl">⚠️</div>

        <h1 className="text-4xl font-bold">Something went wrong</h1>

        <p className="mt-4 text-lg text-slate-400">{error.message}</p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <button
            onClick={reset}
            className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold transition hover:bg-indigo-500"
          >
            Try Again
          </button>

          <Link
            href="/"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold transition hover:border-slate-500 hover:bg-slate-800"
          >
            Go Home
          </Link>
        </div>
      </div>
    </main>
  );
}
