function ActivitySkeleton() {
  return (
    <li className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      {/* Avatar */}
      <div className="relative h-12 w-12 shrink-0">
        <div className="h-full w-full animate-pulse rounded-full bg-gray-200" />

        {/* Icon badge */}
        <div className="absolute -right-1 -bottom-1 h-6 w-6 animate-pulse rounded-full border-2 border-white bg-gray-300" />
      </div>

      {/* Content */}
      <div className="flex-1 space-y-3">
        {/* Description line */}
        <div className="h-4 w-[85%] animate-pulse rounded bg-gray-200" />

        <div className="h-4 w-[65%] animate-pulse rounded bg-gray-200" />

        {/* Time */}
        <div className="h-3 w-24 animate-pulse rounded bg-gray-100" />
      </div>
    </li>
  );
}
export default ActivitySkeleton;
