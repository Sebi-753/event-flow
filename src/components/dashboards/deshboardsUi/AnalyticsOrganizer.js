import StatsList from "@/components/ui/StatsList";
import RegistrationChart from "../../Charts/RegistrationChart";
import EventsByCategoryChart from "../../Charts/EventsByCategoryChart";
import { getEventsCreatedByOrganiser } from "@/lib/Data-services";

async function AnalyticsOrganizer({ registrations, user }) {
  console.log("AnalyticsOrganizer:", user);
  const events = await getEventsCreatedByOrganiser();

  return (
    <section className="px-6 py-10 md:px-10">
      <header className="flex flex-col gap-2 text-center md:text-start">
        <h2 className="text-2xl font-semibold">Analytics</h2>
        <h3 className="text-base font-semibold text-[var(--text-secondary)]">
          Detailed performance metrics for all your events.
        </h3>
      </header>
      <StatsList user={user} />
      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[65fr_35fr]">
        <RegistrationChart registrations={registrations} />
        <EventsByCategoryChart events={events} />
      </div>
    </section>
  );
}

export default AnalyticsOrganizer;
