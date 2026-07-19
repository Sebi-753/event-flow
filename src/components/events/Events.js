import { getFavoriteEventIds } from "@/lib/Data-services";
import Event from "./Event";

async function Events({ events }) {
  const favoriteIds = await getFavoriteEventIds();

  return (
    <ul className="grid grid-cols-1 gap-4 pt-6 pb-16 md:pt-0 lg:grid-cols-2 xl:grid-cols-3">
      {events?.map((event) => (
        <Event
          isFavorite={favoriteIds.includes(event.id)}
          event={event}
          key={event.id}
        />
      ))}
    </ul>
  );
}

export default Events;
