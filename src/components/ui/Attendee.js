import Image from "next/image";

function Attendee({ data }) {
  const formatted = new Date(data.registered_at).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <li className="mt-4 first:mt-0 xl:mt-0">
      {/* ================= Mobile / Tablet ================= */}
      <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm xl:hidden">
        {/* Top */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
              <Image
                src={data.user.avatar}
                alt={data.user.fullName}
                fill
                className="object-cover"
              />
            </div>

            <div className="min-w-0">
              <p className="truncate font-semibold text-gray-900">
                {data.user.fullName}
              </p>

              <p className="truncate text-sm text-[var(--text-tertiary)]">
                {data.user.email}
              </p>
            </div>
          </div>

          {data.status === "registered" ? (
            <span className="shrink-0 rounded-full border border-green-200 bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
              Registered
            </span>
          ) : (
            <span className="shrink-0 rounded-full border border-red-200 bg-red-100 px-3 py-1 text-xs font-medium text-red-700">
              Cancelled
            </span>
          )}
        </div>

        {/* Event */}
        <div className="mt-5 flex items-center gap-3 rounded-lg bg-gray-50 p-3">
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
            <Image
              src={data.event.image_url}
              alt={data.event.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="min-w-0">
            <p className="truncate font-medium text-gray-900">
              {data.event.title}
            </p>

            <p className="mt-1 text-sm text-[var(--text-secondary)]">
              Registered {formatted}
            </p>
          </div>
        </div>
      </div>

      {/* ================= Desktop (unchanged) ================= */}
      <div className="hidden h-[4rem] grid-cols-[35fr_25fr_25fr_20fr] items-center px-8 py-2 text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] xl:grid">
        <div className="flex items-center gap-3">
          <div className="relative aspect-square w-10 overflow-hidden rounded-2xl">
            <Image
              src={data.user.avatar}
              alt={data.user.fullName}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-bold">{data.user.fullName}</p>

            <p className="text-xs text-[var(--text-tertiary)]">
              {data.user.email}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative aspect-square w-10 overflow-hidden rounded-2xl">
            <Image
              src={data.event.image_url}
              alt={data.event.title}
              fill
              className="object-cover"
            />
          </div>

          <p className="text-sm text-[var(--text-secondary)]">
            {data.event.title}
          </p>
        </div>

        <div className="flex items-center gap-5 pr-8">
          <div className="flex text-sm text-[var(--text-secondary)]">
            <p>{formatted}</p>
          </div>
        </div>

        <div>
          {data.status === "registered" ? (
            <span className="inline-flex rounded-full border border-green-200 bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
              Registered
            </span>
          ) : (
            <span className="inline-flex rounded-full border border-red-200 bg-red-100 px-3 py-1 text-sm font-medium text-red-700">
              Cancelled
            </span>
          )}
        </div>
      </div>
    </li>
  );
}

export default Attendee;
