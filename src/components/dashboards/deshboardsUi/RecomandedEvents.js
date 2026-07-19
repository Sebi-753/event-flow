import Event from "@/components/events/Event";
import { getEvents } from "@/lib/Data-services";

async function RecomandedEvents() {
  const events = await getEvents();
  return (
    <ul className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
      {events.map((event) => (
        <Event event={event} key={event.id} />
      ))}
    </ul>
  );
}

export default RecomandedEvents;
