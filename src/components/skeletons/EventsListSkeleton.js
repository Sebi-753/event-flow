import EventSkeleton from "./EventSkeleton";

function EventsListSkeleton() {
  return (
    <ul className="grid grid-cols-1 gap-4 pt-6 pb-16 md:pt-0 lg:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: 9 }).map((_, index) => (
        <li key={index}>
          <EventSkeleton />
        </li>
      ))}
    </ul>
  );
}

export default EventsListSkeleton;
