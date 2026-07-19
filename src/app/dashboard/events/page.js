import CreateEventButton from "@/components/ui/CreateEventButton";
import EventsOrganizerList from "@/components/ui/EventsOrganizerList";
import {
  getCurrentUser,
  getEventsCreatedByOrganiser,
} from "@/lib/Data-services";

async function page() {
  const events = await getEventsCreatedByOrganiser();
  const user = await getCurrentUser();

  return (
    <section className="px-10 py-8">
      <header className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between md:gap-0">
        <div className="text-center md:text-start">
          <h2 className="text-3xl font-semibold">Events</h2>
          <p className="text-sm text-[var(--text-secondary)]">
            Manage, edit, and monitor all your events.
          </p>
        </div>
        <CreateEventButton />
      </header>

      <EventsOrganizerList user={user} events={events} />
    </section>
  );
}

export default page;
