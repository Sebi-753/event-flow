import Link from "next/link";
import Events from "@/components/events/Events";
import FilterEventsButtons from "@/components/events/FilterEventsButtons";
import Sort from "@/components/ui/Sort";
import FilterEvents from "@/components/events/FilterEvents";
import { getEvents } from "@/lib/Data-services";
import EmptyState from "@/components/ui/EmptyState";

export const metadata = {
  title: "Browse Events",
  description:
    "Explore upcoming conferences, workshops, meetups, and networking events. Find the perfect event based on your interests, location, and category.",

  keywords: [
    "browse events",
    "discover events",
    "upcoming events",
    "conferences",
    "meetups",
    "workshops",
    "networking events",
    "technology events",
    "business events",
    "EventFlow",
  ],
};

async function page({ searchParams }) {
  //getting the events
  const events = await getEvents();

  //awaiting the params for filtering
  const params = await searchParams;

  //getting the category and the qyery form the input for filtering events
  const category = params?.category;
  const query = params?.query;

  //getting the sort param
  const sort = params?.sort || "latest";

  //declaring a new variable for filte
  let shownEvents = events;

  //filltering the shwnEents by category
  if (category && category !== "All") {
    shownEvents = shownEvents.filter((e) => e.type === category);
  }

  //filltering the shwnEents by input

  if (query) {
    shownEvents = shownEvents.filter((e) =>
      e.title.toLowerCase().includes(query.toLowerCase()),
    );
  }

  //sorting logic
  if (sort === "latest") {
    shownEvents = shownEvents.sort(
      (a, b) => new Date(b.created_at) - new Date(a.created_at),
    );
  }

  if (sort === "date") {
    shownEvents = shownEvents.sort(
      (a, b) => new Date(a.date) - new Date(b.date),
    );
  }
  if (sort === "oldest") {
    shownEvents = shownEvents.sort(
      (a, b) => new Date(b.date) - new Date(a.date),
    );
  }

  //getting the number of events that appear
  const numEvents = shownEvents.length;

  return (
    <section className="xs:px-10 px-6 pt-30 sm:px-20 md:px-30">
      <div>
        <header className="flex flex-col gap-2 text-center md:text-start">
          <h2 className="text-3xl font-bold">Discover Events</h2>
          <h3 className="textr-base text-[var(--text-tertiary)] sm:text-lg">
            Find events that match your interests and schedule
          </h3>
        </header>

        <FilterEvents />

        <div className="my-6 h-[1px] w-full bg-gray-200" />
        <main>
          <FilterEventsButtons />

          <div className="my-4 flex items-center justify-between">
            <p className="flex items-center gap-1">
              <span className="2xs:text-lg text-base">{numEvents}</span>

              <span className="xs:text-base 2xs:text-sm text-xs text-[var(--text-tertiary)]">
                events found
              </span>
            </p>

            <Sort />
          </div>
          {events.length !== 0 ? (
            <Events events={shownEvents} />
          ) : (
            <EmptyState
              title={"No events"}
              description="There are currently no events listed! Please come back later!"
              action={
                <Link
                  href="/"
                  className="rounded-xl bg-indigo-600 px-5 py-3 text-white"
                >
                  Home
                </Link>
              }
            />
          )}
        </main>
      </div>
    </section>
  );
}

export default page;
