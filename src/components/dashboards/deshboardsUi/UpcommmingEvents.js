import Event from "@/components/events/Event";
import { getEvents } from "@/lib/Data-services";

async function UpcommmingEvents() {
  const allevents = await getEvents();
  let events = [...allevents].filter((event) => {
    const now = new Date();
    const eventDate = new Date(event.date);

    return now < eventDate;
  });

  return (
    <ul className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
      {events.map((event) => (
        <Event event={event} key={event.id} />
      ))}
    </ul>
  );
}

export default UpcommmingEvents;
