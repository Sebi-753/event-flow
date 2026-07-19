import FavoriteEventsListSkeleton from "./FavoriteEventsListSkeleton";

function FavoriteEventsPageSkeleton() {
  return (
    <section className="animate-pulse px-10 py-10 sm:px-6 md:px-10">
      <header className="mb-10 flex flex-col text-center md:text-start">
        <div className="mx-auto h-8 w-56 rounded bg-gray-200 md:mx-0" />

        <div className="mx-auto mt-3 h-4 w-72 rounded bg-gray-200 md:mx-0" />
      </header>

      <FavoriteEventsListSkeleton />
    </section>
  );
}

export default FavoriteEventsPageSkeleton;
