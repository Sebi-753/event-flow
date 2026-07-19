import EventsOrganizerList from "@/components/ui/EventsOrganizerList";
import StatsList from "@/components/ui/StatsList";
import {
  getCurrentUser,
  getEventsCreatedByOrganiser,
} from "@/lib/Data-services";
import { Suspense } from "react";

async function DashboardOrganizer() {
  const user = await getCurrentUser();
  let events = await getEventsCreatedByOrganiser();

  return (
    <section className="px-6 py-10 md:px-10">
      <header className="text-center md:text-start">
        <h2 className="text-2xl font-semibold">Organizer Dashboard</h2>
        <h3 className="text-sm font-semibold text-[var(--text-secondary)]">
          Overview of your events and performance metrics.
        </h3>
      </header>
      <Suspense fallback={<p>Loading Stats...</p>}>
        <StatsList user={user} />
      </Suspense>
      <Suspense fallback={<p>Loading events...</p>}>
        <EventsOrganizerList user={user} num={4} events={events} />{" "}
      </Suspense>
    </section>
  );
}

export default DashboardOrganizer;
