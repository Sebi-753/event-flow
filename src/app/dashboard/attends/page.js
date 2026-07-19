import { getCurrentUser } from "@/lib/Data-services";
import { Suspense } from "react";
import AttendedEventsFilter from "@/components/events/AttendedEventsFilter";
import AttendedEventsList from "@/components/events/AttendedEventsList";
import AttendedEventsListSkeleton from "@/components/skeletons/AttendedEventsListSkeleton";

export const metadata = {
  title: "My Attends",
  description: "View and manage the events you've registered to attend.",
  robots: {
    index: false,
    follow: false,
  },
};

async function page({ searchParams }) {
  const user = await getCurrentUser();

  if (user.role !== "attendee") throw new Error("You are not an attandee");

  const params = await searchParams;

  return (
    <section className="px-6 py-10 md:px-10">
      <header className="mb-10 flex flex-col text-center md:text-start">
        <h2 className="text-2xl font-semibold">My Attended Events</h2>
        <h3 className="text-[var(--text-secondary)]">
          Events you&apos;ve signed up for
        </h3>
      </header>
      <div>
        <AttendedEventsFilter />
      </div>

      <div className="mt-10">
        <Suspense fallback={<AttendedEventsListSkeleton />}>
          <AttendedEventsList filter={params} />
        </Suspense>
      </div>
    </section>
  );
}

export default page;
