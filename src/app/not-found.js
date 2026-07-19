import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-6 text-white">
      <div className="max-w-lg text-center">
        <h1 className="text-8xl font-extrabold tracking-tight text-indigo-500">
          404
        </h1>

        <h2 className="mt-6 text-3xl font-bold">Oops! Page not found.</h2>

        <p className="mt-4 text-lg text-slate-400">
          The page you&apos;re looking for doesn&apos;t exist, may have been
          moved, or the URL might be incorrect.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold transition hover:bg-indigo-500"
          >
            Go Home
          </Link>
        </div>

        <div className="mt-12 text-sm text-slate-500">Error Code: 404</div>
      </div>
    </main>
  );
}
