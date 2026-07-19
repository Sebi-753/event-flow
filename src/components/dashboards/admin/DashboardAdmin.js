import StatsListAdmin from "@/components/ui/StatsListAdmin";
import PlatformGrowChart from "../../Charts/PlatformGrowChart";
import { getAllUsers, getEvents, getRegistrations } from "@/lib/Data-services";
import UsersRolesChart from "@/components/Charts/UsersRolesChart";

async function DashboardAdmin() {
  const [registrations, events, users] = await Promise.all([
    getRegistrations(),
    getEvents(),
    getAllUsers(),
  ]);

  return (
    <section className="px-6 py-10 md:px-10">
      <header className="text-center font-semibold md:text-start">
        <h2 className="text-2xl">Platform Analytics</h2>
        <h3 className="xs:text-base text-sm text-[var(--text-secondary)]">
          High-level overview of EventFlow platform health and growth.
        </h3>
      </header>
      <StatsListAdmin />
      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[65fr_35fr]">
        <PlatformGrowChart registrations={registrations} events={events} />
        <UsersRolesChart users={users} />
      </div>
    </section>
  );
}

export default DashboardAdmin;
