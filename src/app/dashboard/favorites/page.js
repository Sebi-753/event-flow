import FavoriteEventsList from "@/components/events/FavoriteEventsList";
import { getFavoriteEventIds, getFavoriteEvents } from "@/lib/Data-services";

export const metadata = {
  title: "Favorites",
  description:
    "View and manage the events you've saved to your favorites list.",
  robots: {
    index: false,
    follow: false,
  },
};

async function page() {
  const [favoriteEvents, favoriteIds] = await Promise.all([
    getFavoriteEvents(),
    getFavoriteEventIds(),
  ]);

  return (
    <section className="px-10 py-10 sm:px-6 md:px-10">
      <header className="mb-10 flex flex-col text-center md:text-start">
        <h2 className="text-2xl font-semibold"> Favorite events</h2>
        <h3 className="text-[var(--text-secondary)]">
          Events you marked as favorite
        </h3>

        <FavoriteEventsList favoriteIds={favoriteIds} events={favoriteEvents} />
      </header>
    </section>
  );
}

export default page;
1;
