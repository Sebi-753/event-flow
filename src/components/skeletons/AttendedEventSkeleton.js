function AttendedEventSkeleton() {
  return (
    <li className="animate-pulse rounded-xl border border-gray-300 bg-white p-4 shadow-sm">
      {/* Mobile */}
      <div className="flex flex-col gap-4 lg:hidden">
        {/* Image */}
        <div className="h-48 w-full rounded-lg bg-gray-200" />

        {/* Title + favorite */}
        <div className="flex items-start justify-between gap-3">
          <div className="h-6 w-2/3 rounded bg-gray-200" />
          <div className="h-8 w-8 rounded-full bg-gray-200" />
        </div>

        {/* Badges */}
        <div className="flex gap-2">
          <div className="h-6 w-20 rounded-full bg-gray-200" />
          <div className="h-6 w-24 rounded-full bg-gray-200" />
        </div>

        {/* Date / Time */}
        <div className="space-y-2">
          <div className="h-4 w-40 rounded bg-gray-200" />
          <div className="h-4 w-32 rounded bg-gray-200" />
        </div>

        {/* Status */}
        <div className="h-3 w-32 rounded bg-gray-200" />

        {/* Buttons */}
        <div className="flex gap-3">
          <div className="h-10 flex-1 rounded-lg bg-gray-200" />
          <div className="h-10 flex-1 rounded-lg bg-gray-200" />
        </div>
      </div>

      {/* Desktop */}
      <div className="relative hidden items-center gap-4 lg:flex">
        {/* Status badge */}
        <div className="absolute top-3 right-3 h-6 w-24 rounded-full bg-gray-200" />

        {/* Image */}
        <div className="h-20 w-20 rounded-lg bg-gray-200" />

        {/* Content */}
        <div className="flex flex-1 flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="h-5 w-56 rounded bg-gray-200" />
            <div className="h-8 w-8 rounded-full bg-gray-200" />
            <div className="h-6 w-20 rounded-full bg-gray-200" />
          </div>

          <div className="flex gap-6">
            <div className="h-4 w-32 rounded bg-gray-200" />
            <div className="h-4 w-24 rounded bg-gray-200" />
          </div>

          <div className="h-3 w-40 rounded bg-gray-200" />
        </div>

        {/* Actions */}
        <div className="mr-24 ml-auto flex gap-2">
          <div className="h-10 w-36 rounded-lg bg-gray-200" />
          <div className="h-10 w-24 rounded-lg bg-gray-200" />
        </div>
      </div>
    </li>
  );
}

export default AttendedEventSkeleton;
