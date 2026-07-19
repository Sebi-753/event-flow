import FavouriteEventSkeleton from "./FavoriteEventSkeleton";

function FavoriteEventsListSkeleton() {
  return (
    <main className="animate-pulse">
      {/* Search */}
      <div className="mt-6 flex items-center gap-5">
        <div className="h-11 w-full max-w-md rounded-2xl bg-gray-200" />
      </div>

      {/* Cards */}
      <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <FavouriteEventSkeleton key={i} />
        ))}
      </ul>
    </main>
  );
}

export default FavoriteEventsListSkeleton;
