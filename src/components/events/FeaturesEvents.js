import { getEvents } from "@/lib/Data-services";
import Event from "./Event";
import EmptyState from "../ui/EmptyState";

async function FeaturesEvents() {
  const allEvents = await getEvents();
  const events = allEvents.slice(0, 3);
  return (
    <>
      {events.length !== 0 ? (
        <div className="mt-8 grid justify-items-center gap-4 md:grid-cols-2 xl:grid-cols-[1fr_1fr_1fr]">
          {events?.map((event, i) => (
            <Event event={event} key={i} />
          ))}
        </div>
      ) : (
        <EmptyState
          title="No events events yet"
          description="There are currently no events"
        />
      )}
    </>
  );
}

export default FeaturesEvents;
