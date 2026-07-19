import { getEventsAttendedByCurrentUser } from "@/lib/Data-services";
import AttendedEvent from "./AttendedEvent";
import EmptyState from "../ui/EmptyState";

async function AttendedEventsList({ filter }) {
  const eventsAttend = await getEventsAttendedByCurrentUser();
  const { category, status, query } = filter;
  let showingEvents = [...eventsAttend];

  if (category)
    showingEvents = showingEvents.filter(
      (event) => event.events.type === category,
    );

  const now = new Date();

  if (status === "Upcoming") {
    showingEvents = showingEvents.filter(
      (event) => new Date(event.events.date) > now,
    );
  }

  if (status === "Past") {
    showingEvents = showingEvents.filter(
      (event) => new Date(event.events.date) < now,
    );
  }
  if (query)
    showingEvents = showingEvents.filter((event) =>
      event.events.title.toLowerCase()?.includes(query.toLowerCase()),
    );

  return (
    <>
      {eventsAttend.length !== 0 ? (
        <>
          <ul className="xs:grid-cols-1 grid gap-4 sm:grid-cols-2 lg:flex lg:flex-col">
            {showingEvents?.map((event) => (
              <AttendedEvent
                key={event.events.id}
                status={event.status}
                event={event.events}
              />
            ))}
          </ul>
        </>
      ) : (
        <EmptyState
          title="No attended events"
          description="You haven't attended any events ye!."
        />
      )}
    </>
  );
}

export default AttendedEventsList;
