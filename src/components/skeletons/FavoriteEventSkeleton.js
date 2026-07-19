function FavouriteEventSkeleton() {
  return (
    <li className="animate-pulse">
      <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        {/* Image */}
        <div className="relative h-52 w-full bg-gray-200">
          <div className="absolute top-4 left-4 h-6 w-20 rounded-full bg-gray-300" />

          <div className="absolute top-3 right-3 h-9 w-9 rounded-full bg-gray-300" />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-5">
          <div>
            <div className="h-6 w-3/4 rounded bg-gray-200" />

            <div className="mt-4 h-4 w-full rounded bg-gray-200" />
            <div className="mt-2 h-4 w-5/6 rounded bg-gray-200" />
          </div>

          <div className="mt-6 space-y-4">
            <div className="h-4 w-36 rounded bg-gray-200" />
            <div className="h-4 w-28 rounded bg-gray-200" />
            <div className="h-4 w-44 rounded bg-gray-200" />
          </div>

          <div className="mt-auto pt-6">
            <div className="mb-4 h-px bg-gray-200" />

            <div className="flex flex-col items-center gap-4">
              <div className="h-7 w-28 rounded-full bg-gray-200" />

              <div className="h-10 w-full rounded-lg bg-gray-200" />
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default FavouriteEventSkeleton;
