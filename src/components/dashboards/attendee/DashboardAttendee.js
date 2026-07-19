import { Suspense } from "react";
import UpcommmingEvents from "../deshboardsUi/UpcommmingEvents";
import RecomandedEvents from "../deshboardsUi/RecomandedEvents";
import EventsListSkeleton from "@/components/skeletons/EventsListSkeleton";

function DashboardAttandee() {
  return (
    <section className="px-6 py-10 md:px-10">
      <h3 className="text-center text-2xl font-semibold md:text-start">
        Upcoming events
      </h3>
      <Suspense fallback={<EventsListSkeleton />}>
        <UpcommmingEvents />
      </Suspense>
      <h3 className="mt-10 text-2xl font-semibold">Recommended events</h3>
      <Suspense fallback={<EventsListSkeleton />}>
        <RecomandedEvents />
      </Suspense>
    </section>
  );
}

export default DashboardAttandee;
